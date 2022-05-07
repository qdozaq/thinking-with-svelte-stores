<script>
	import { spring } from 'svelte/motion';
	import Bar from './_lib/Bar.svelte';
	let progress = spring(0, { damping: 0.9, stiffness: 0.1 });
	let bars = Array.from(Array(10).keys());
</script>

<svelte:head>
	<title>Staggered Animations</title>
</svelte:head>
<div>
	<input type="range" max="100" bind:value={$progress} />
	{#each bars as bar}
		<Bar {progress} delay={bar * 100} />
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
