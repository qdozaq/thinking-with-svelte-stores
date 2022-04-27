<script>
	import rc from 'randomcolor';
	import { spring } from 'svelte/motion';
	let boxes = Array.from(Array(10).keys());

	let progress = spring(0, { damping: 0.9, stiffness: 0.1 });

	/**@type {(e:WheelEvent) => void}*/
	function handleScroll(e) {
		const pct =
			((document.documentElement.scrollTop + document.body.scrollTop) /
				(document.documentElement.scrollHeight - document.documentElement.clientHeight)) *
			100;

		progress.set(pct);
	}
</script>

<svelte:window on:wheel|passive={handleScroll} />

<h1>1-1: Progress Bar</h1>
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
