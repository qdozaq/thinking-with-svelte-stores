<script>
	import { derived } from 'svelte/store';
	import { onMount } from 'svelte/internal';
	import Slider from './_lib/Slider.svelte';
	import { activeSlider, progress } from './_lib/progress';
	import { spring } from 'svelte/motion';
	const number_of_sliders = 10;
	let sliders = Array.from(Array(number_of_sliders).keys()).map((id) => ({
		id,
		delay: derived(
			[progress, activeSlider],
			([$p, $a], set) => {
				if (id !== $a) {
					setTimeout(() => set($p), Math.abs(id - $a) * 100);
				}
			},
			0
		),
		value: spring(0, { stiffness: 0.1 })
	}));

	sliders.forEach((slider) => {
		slider.delay.subscribe((delayedValue) => {
			let total = sliders.length;
			let diff = Math.abs(slider.id - $activeSlider);
			slider.value.damping = 1 - ((diff / total) * 0.5 + 0.45);
			slider.value.set(delayedValue);
		});
	});

	onMount(() => activeSlider.set(-1));
</script>

<h1>2-4: Relative Animation With Controlled State</h1>
<div>
	{#each sliders as { id, value }}
		<Slider
			{value}
			on:mousedown={() => {
				activeSlider.set(id);
			}}
			on:input={(e) => e.target && progress.set(e.target.valueAsNumber)}
		/>
	{/each}
</div>

<style>
	div {
		margin: 0 3rem;
		display: flex;
		flex-direction: column;
		width: auto;
	}
</style>
