<script>
	import { progress } from './_progress';
	import Bar from './_Bar.svelte';
	import ReplLink from '$lib/components/ReplLink.svelte';

	let bars = Array.from(Array(10).keys());
</script>

<svelte:head>
	<title>Staggered Animations</title>
</svelte:head>
<ReplLink repl="https://svelte.dev/repl/70789a16b8964698bb4efc049df5c607?version=3.48.0" />

<div>
	<input type="range" max="1000" bind:value={$progress} />
	{#each bars as bar}
		<Bar delay={bar * 100} />
	{/each}
</div>

<style>
	div {
		margin: 0 3rem;
		display: flex;
		flex-direction: column;
		width: auto;
	}
	div > * {
		width: 100%;
	}
</style>
