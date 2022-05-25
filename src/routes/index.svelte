<script>
	import Circle from '$lib/components/Circle.svelte';
	import { browser } from '$app/env';
	import { derived, writable } from 'svelte/store';
	import { spring } from 'svelte/motion';

	const mouseCoords = spring({ x: 0, y: 0 }, { stiffness: 0.005, damping: 0.1 });

	let c1 = getDelayed(100);
	let c2 = getDelayed(200);
	let c3 = getDelayed(300);
	let c4 = getDelayed(400);

	function getDelayed(delay) {
		return derived(
			mouseCoords,
			($c, set) => {
				setTimeout(() => browser && requestAnimationFrame(() => set($c)), delay);
			},
			0
		);
	}
</script>

<svelte:window on:mousemove={(e) => mouseCoords.set({ x: e.clientX, y: e.clientY })} />
<svg>
	<Circle color="#FF8360" textSize={30} radius={70} x={$c3.x} y={$c3.y} dx={130} dy={-20}
		>Stores</Circle
	>
	<Circle color="#E8E288" textSize={25} radius={60} x={$c1.x} y={$c1.y}>Thinking</Circle>
	<Circle color="#7DCE82" textSize={20} radius={80} x={$c4.x} y={$c4.y} dx={100} dy={120}
		><tspan x="0" dy="-1em">Using svelte</tspan><tspan x="0" dy="1.2em">stores for</tspan>
		<tspan x="0" dy="1.2em">user driven</tspan>
		<tspan x="0" dy="1.2em">animation</tspan>
	</Circle>
	<Circle textSize={20} color="#3CDBD3" radius={40} x={$c2.x} y={$c2.y} dx={70} dy={40}>with</Circle
	>
</svg>

<style>
	svg {
		position: absolute;
		pointer-events: none;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
