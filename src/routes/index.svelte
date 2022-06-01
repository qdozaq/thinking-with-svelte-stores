<script>
	import Circle from '$lib/components/Circle.svelte';
	import { browser } from '$app/env';
	import { derived, writable } from 'svelte/store';
	import { spring } from 'svelte/motion';

	const baseOffest = { x: 50, y: 50 };
	const mouseCoords = spring({ x: 0, y: 0 }, { stiffness: 0.005, damping: 0.1 });

	const inc = 100;
	let c1 = getDelayed(inc);
	let c2 = getDelayed(inc * 2);
	let c3 = getDelayed(inc * 3);
	let c4 = getDelayed(inc * 4);

	function getDelayed(delay) {
		return derived(
			mouseCoords,
			($c, set) => {
				setTimeout(
					() =>
						browser &&
						requestAnimationFrame(() => set({ x: $c.x + baseOffest.x, y: $c.y + baseOffest.y })),
					delay
				);
			},
			baseOffest
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

<section>
	<h2>A talk by Paul Mendoza</h2>
	<div>
		<a href="https://github.com/qdozaq" target="_blank" rel="noopener noreferrer">github</a> |
		<a href="https://twitter.com/qdozaq" target="_blank" rel="noopener noreferrer"> twitter</a>
		|
		<a href="https://www.instagram.com/qdozaq" target="_blank" rel="noopener noreferrer"
			>instagram</a
		>
		- <span><i>@qdozaq</i></span>
	</div>
	<a
		href="https://github.com/qdozaq/thinking-with-svelte-stores"
		target="_blank"
		rel="noopener noreferrer">See this project on github!</a
	>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 8px;
		text-align: right;
		position: absolute;
		right: 2rem;
		bottom: 6rem;
	}

	span {
		color: #777;
	}

	h2 {
		padding: 0;
		margin: 0;
	}

	svg {
		position: absolute;
		pointer-events: none;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
