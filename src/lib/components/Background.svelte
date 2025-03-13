<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let starCount: number = 150;
	export let starColor: string = '#5E2999';
	export let backgroundColor: string = '#0E0E0E';
	export let minStarSize: number = 0.5;
	export let maxStarSize: number = 2.5;

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null = null;
	let animationFrameId: number | null = null;
	let resizeObserver: ResizeObserver | null = null;

	interface Star {
		x: number;
		y: number;
		size: number;
		opacity: number;
		twinkleSpeed: number;
		twinkleDirection: number;
	}

	let stars: Star[] = [];

	function hexToRgba(hex: string, alpha: number): string {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}

	function initStars() {
		if (!canvas || !ctx) return;

		stars = [];

		for (let i = 0; i < starCount; i++) {
			stars.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				size: Math.random() * (maxStarSize - minStarSize) + minStarSize,
				opacity: Math.random() * 0.5 + 0.5,
				twinkleSpeed: Math.random() * 0.02 + 0.005,
				twinkleDirection: Math.random() > 0.5 ? 1 : -1
			});
		}
	}

	function drawStars() {
		if (!canvas || !ctx) return;

		ctx.fillStyle = hexToRgba(backgroundColor, 1);
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		stars.forEach((star) => {
			ctx!.beginPath();

			ctx!.fillStyle = hexToRgba(starColor, star.opacity);

			ctx!.arc(star.x, star.y, star.size, 0, Math.PI * 2);
			ctx!.fill();

			if (star.size > 1.5) {
				ctx!.beginPath();
				const glow = ctx!.createRadialGradient(
					star.x,
					star.y,
					star.size * 0.5,
					star.x,
					star.y,
					star.size * 4
				);
				glow.addColorStop(0, hexToRgba(starColor, star.opacity));
				glow.addColorStop(1, hexToRgba(starColor, 0));

				ctx!.fillStyle = glow;
				ctx!.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
				ctx!.fill();
			}
		});
	}

	function updateStars() {
		stars.forEach((star) => {
			star.opacity += star.twinkleSpeed * star.twinkleDirection;

			if (star.opacity >= 1) {
				star.opacity = 1;
				star.twinkleDirection = -1;
			} else if (star.opacity <= 0.3) {
				star.opacity = 0.3;
				star.twinkleDirection = 1;
			}
		});
	}

	function animate() {
		if (typeof window === 'undefined') return;

		drawStars();
		updateStars();
		animationFrameId = window.requestAnimationFrame(animate);
	}

	function handleResize() {
		if (!canvas || !ctx) return;

		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;
		initStars();
	}

	onMount(() => {
		if (typeof window === 'undefined') return;

		if (canvas) {
			ctx = canvas.getContext('2d');

			canvas.width = canvas.clientWidth;
			canvas.height = canvas.clientHeight;

			if (window.ResizeObserver) {
				resizeObserver = new ResizeObserver(handleResize);
				resizeObserver.observe(canvas);
			} else {
				window.addEventListener('resize', handleResize);
			}

			initStars();
			animate();
		}
	});

	onDestroy(() => {
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

<canvas bind:this={canvas} class="stars-canvas" style="background-color: {backgroundColor};"
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
