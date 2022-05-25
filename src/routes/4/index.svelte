<script>
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte/internal';
	import Slider from './_Slider.svelte';
	import { activeSlider } from './_progress';
	import ReplLink from '$lib/components/ReplLink.svelte';
	let sliders = Array.from(Array(10).keys());
	onMount(() => activeSlider.set(-1));
</script>

<svelte:head>
	<title>Relative Animation</title>
</svelte:head>

<ReplLink repl="https://svelte.dev/repl/cacf6a4564e74df59caf55949220360c?version=3.48.0" />

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
