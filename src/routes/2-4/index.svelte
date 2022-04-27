<script>
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte/internal';
	import Slider from './_lib/Slider.svelte';
	import { activeSlider, progress } from './_lib/progress';
	import { spring } from 'svelte/motion';
	let sliders = Array.from(Array(10).keys());
	let springs = sliders.map((id) => {
		return spring(0);
	});
	$: {	
		sliders.forEach(id => {
			let springStore = springs[id];
			let diff = Math.abs(id - $activeSlider);
			springStore.
		})
		$progress
	}
	progress.subscribe((p) => {
		// let active = get(activeSlider);
		let diff = Math.abs(id - active);
		value.damping = 1 - ((diff / total) * 0.5 + 0.3);
		if (id !== active) {
			setTimeout(() => value.set(p), diff * 100);
		}
	});
	onMount(() => activeSlider.set(-1));
</script>

<h1>2-4: Relative Animation With Controlled State</h1>
<div>
	{#each sliders as slider}
		<Slider
			on:mousedown={() => {
				activeSlider.set(slider);
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
