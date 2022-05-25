<script>
	import ReplLink from '$lib/components/ReplLink.svelte';
	import { spring } from 'svelte/motion';

	let boxes = Array.from(Array(10).keys());

	let progress = spring(0, { damping: 0.9, stiffness: 0.1 });

	function handleScroll(e) {
		const pct =
			((document.documentElement.scrollTop + document.body.scrollTop) /
				(document.documentElement.scrollHeight - document.documentElement.clientHeight)) *
			100;

		progress.set(pct);
	}
</script>

<svelte:head>
	<title>Progress Bar - with spring</title>
</svelte:head>
<svelte:window on:scroll={handleScroll} />

<ReplLink repl="https://svelte.dev/repl/26505b7814b247958f5bf1f5a3b9845e?version=3.48.0" />

<progress value={$progress} max="100" />
{#each boxes as box}
	{@const color = `rgb(150, 150, ${255 / (1 + box)})`}
	<section style:background-color={color} />
{/each}

<style>
	progress {
		position: fixed;
		width: calc(100% - 2rem);
	}
	section {
		margin: 1rem;
		width: auto;
		height: 20rem;
	}
</style>
