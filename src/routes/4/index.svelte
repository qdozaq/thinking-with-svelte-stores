<script>
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte/internal';
	import Slider from './_lib/Slider.svelte';
	import { activeSlider } from './_lib/progress';
	let sliders = Array.from(Array(10).keys());
	onMount(() => activeSlider.set(-1));
</script>

<svelte:head>
	<title>Relative Animation</title>
</svelte:head>

<div>
	{#each sliders as slider}
		<Slider id={slider} total={sliders.length} />
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
