<script>
	import { derived, writable } from 'svelte/store';
	import { spring } from 'svelte/motion';

	const mouseCoords = writable({ x: 0, y: 0 });
	const number_of_dots = 5;
	const dotIds = Array.from(Array(number_of_dots).keys());

	const sharedSpring = spring({ x: 0, y: 0 }, { stiffness: 0.1 });
	$: sharedSpring.set($mouseCoords);

	const sharedMotionDots = dotIds.map((id) => ({
		id,
		coords: derived(
			sharedSpring,
			($c, set) => {
				setTimeout(() => set($c), id * 100);
			},
			{ x: 0, y: 0 }
		),
		el: null
	}));

	sharedMotionDots.forEach((dot) => {
		dot.coords.subscribe(({ x, y }) => {
			dot.el?.setAttribute('cx', x);
			dot.el?.setAttribute('cy', y);
		});
	});

	const relativeMotionDots = Array.from(Array(number_of_dots).keys()).map((id) => ({
		id,
		delay: derived(
			mouseCoords,
			($c, set) => {
				setTimeout(() => set($c), id * 100);
			},
			{ x: 0, y: 0 }
		),
		spring: spring({ x: 0, y: 0 }, { stiffness: 0.1 }),
		el: null
	}));

	relativeMotionDots.forEach((dot) => {
		dot.delay.subscribe((delayedValue) => {
			let total = relativeMotionDots.length;
			dot.spring.damping = 1 - ((dot.id / total) * 0.5 + 0.45);
			dot.spring.set(delayedValue);
		});
		dot.spring.subscribe((coord) => {
			dot.el?.setAttribute('cx', coord.x);
			dot.el?.setAttribute('cy', coord.y);
		});
	});
</script>

<h1>2-5: Dots Example</h1>
<h3>
	Shared Spring: <div class="shared square" />
	Individual Springs:
	<div class="relative square" />
</h3>
<svelte:window on:mousemove={(e) => mouseCoords.set({ x: e.clientX, y: e.clientY })} />
<svg>
	{#each sharedMotionDots as { el, id }}
		<circle class="shared" bind:this={el} r={10 - id} />
	{/each}

	{#each relativeMotionDots as { el, id }}
		<circle class="relative" bind:this={el} r={10 - id} />
	{/each}
</svg>

<style>
	svg {
		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.relative {
		background-color: #ff3e00;
		fill: #ff3e00;
	}

	.shared {
		background-color: #a600ff;
		fill: #a600ff;
	}

	.square {
		display: inline-block;
		width: 1rem;
		height: 1rem;
	}
</style>
