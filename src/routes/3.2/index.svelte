<script>
	import { onMount } from 'svelte/internal';
	import Slider from './_Slider.svelte';
	import { activeSlider } from './_progress';
	import ReplLink from '$lib/components/ReplLink.svelte';
	let sliders = Array.from(Array(10).keys());
	onMount(() => activeSlider.set(-1));
</script>

<svelte:head>
	<title>Relative Stagger</title>
</svelte:head>

<ReplLink repl="https://svelte.dev/repl/0082bdef1ba8479ab4a748ed7ebdce9f?version=3.48.0" />

<div>
	{#each sliders as slider}
		<Slider id={slider} />
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
