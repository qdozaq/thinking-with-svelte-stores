<script>
	import { derived } from 'svelte/store';
	import { onMount } from 'svelte/internal';
	import Slider from './_Slider.svelte';
	import { activeSlider, progress } from './_progress';
	import { spring } from 'svelte/motion';
	import ReplLink from '$lib/components/ReplLink.svelte';
	const initial_number_of_sliders = 10;

	let sliders = Array.from(Array(initial_number_of_sliders).keys()).map((id) => ({
		id,
		el: null,
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

		slider.value.subscribe((v) => {
			if (slider.el)
				requestAnimationFrame(() => {
					slider.el.value = v;
				});
		});
	});

	onMount(() => activeSlider.set(-1));
</script>

<svelte:head>
	<title>Relative Animation With Controlled State</title>
</svelte:head>

<ReplLink repl="https://svelte.dev/repl/4fade1d50ec04e5682f89e2007ba7e7d?version=3.48.0" />

<div>
	{#each sliders as { id, el }}
		<Slider
			bind:this={el}
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
