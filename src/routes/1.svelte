<script>
	import rc from 'randomcolor';
	import { writable } from 'svelte/store';
	import { spring } from 'svelte/motion';
	let boxes = Array.from(Array(10).keys());

	let progress = spring(0, { damping: 0.9, stiffness: 0.1 });
	// let progress = writable(0);

	function handleScroll(e) {
		const pct =
			((document.documentElement.scrollTop + document.body.scrollTop) /
				(document.documentElement.scrollHeight - document.documentElement.clientHeight)) *
			100;

		progress.set(pct);
	}
</script>

<svelte:head>
	<title>Progress Bar</title>
</svelte:head>
<svelte:window on:scroll={handleScroll} />

<progress value={$progress} max="100" />
{#each boxes as box}
	{@const color = rc({ seed: box })}
	<section style:background-color={color} />
{/each}

<style>
	progress {
		position: fixed;
		width: 100%;
	}
	section {
		margin: 1rem;
		width: auto;
		height: 20rem;
	}
</style>
