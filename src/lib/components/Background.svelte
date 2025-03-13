<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  // Props du composant
  export let starCount: number = 150;
  export let starColor: string = '#5E2999';
  export let backgroundColor: string = '#0E0E0E5E2999'; // Nouvelle prop pour la couleur de fond
  export let minStarSize: number = 0.5;
  export let maxStarSize: number = 2.5;

  // Références
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null;
  let animationFrameId: number | null = null;
  let resizeObserver: ResizeObserver | null = null;

  // Interface pour les étoiles
  interface Star {
    x: number;
    y: number;
    size: number;
    opacity: number;
    twinkleSpeed: number;
    twinkleDirection: number;
  }

  let stars: Star[] = [];
  
  // Convertir la couleur hexadécimale en rgba
  function hexToRgba(hex: string, alpha: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  // Initialiser les étoiles
  function initStars() {
    if (!canvas || !ctx) return;
    
    stars = [];
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (maxStarSize - minStarSize) + minStarSize,
        opacity: Math.random() * 0.5 + 0.5, // Opacité entre 0.5 et 1
        twinkleSpeed: Math.random() * 0.02 + 0.005, // Vitesse de scintillement
        twinkleDirection: Math.random() > 0.5 ? 1 : -1 // Direction initiale du scintillement
      });
    }
  }

  // Dessiner les étoiles
  function drawStars() {
    if (!canvas || !ctx) return;
    
    // Effacer le canvas avec la couleur de fond spécifiée
    ctx.fillStyle = hexToRgba(backgroundColor, 1);
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Dessiner chaque étoile
    stars.forEach(star => {
      ctx!.beginPath();
      
      // Appliquer l'opacité actuelle
      ctx!.fillStyle = hexToRgba(starColor, star.opacity);
      
      // Dessiner une étoile (un cercle simple)
      ctx!.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx!.fill();
      
      // Pour les étoiles plus grandes, ajouter un halo
      if (star.size > 1.5) {
        ctx!.beginPath();
        const glow = ctx!.createRadialGradient(
          star.x, star.y, star.size * 0.5,
          star.x, star.y, star.size * 4
        );
        glow.addColorStop(0, hexToRgba(starColor, star.opacity));
        glow.addColorStop(1, hexToRgba(starColor, 0));
        
        ctx!.fillStyle = glow;
        ctx!.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
        ctx!.fill();
      }
    });
  }

  // Mettre à jour les étoiles
  function updateStars() {
    stars.forEach(star => {
      // Faire scintiller les étoiles en changeant leur opacité
      star.opacity += star.twinkleSpeed * star.twinkleDirection;
      
      // Changer de direction si atteint les limites d'opacité
      if (star.opacity >= 1) {
        star.opacity = 1;
        star.twinkleDirection = -1;
      } else if (star.opacity <= 0.3) {
        star.opacity = 0.3;
        star.twinkleDirection = 1;
      }
    });
  }

  // Boucle d'animation
  function animate() {
    if (typeof window === 'undefined') return; // Vérifier si nous sommes dans un navigateur
    
    drawStars();
    updateStars();
    animationFrameId = window.requestAnimationFrame(animate);
  }

  // Gérer le redimensionnement
  function handleResize() {
    if (!canvas || !ctx) return;
    
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    initStars();
  }

  onMount(() => {
    if (typeof window === 'undefined') return; // Vérifier si nous sommes dans un navigateur
    
    if (canvas) {
      ctx = canvas.getContext('2d');
      
      // Configurer le canvas pour qu'il prenne toute la taille disponible
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      
      // Observer les changements de taille du canvas
      if (window.ResizeObserver) {
        resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(canvas);
      } else {
        // Fallback pour les navigateurs qui ne supportent pas ResizeObserver
        window.addEventListener('resize', handleResize);
      }
      
      // Initialiser les étoiles et démarrer l'animation
      initStars();
      animate();
    }
  });

  onDestroy(() => {
    // S'assurer que nous sommes dans un navigateur avant d'utiliser ces API
    if (typeof window !== 'undefined') {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
      
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', handleResize);
      }
    }
  });
</script>

<canvas 
  bind:this={canvas} 
  class="stars-canvas"
  style="background-color: {backgroundColor};"
></canvas>

<style>
  .stars-canvas {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
