<script>
	import ReplLink from '$lib/components/ReplLink.svelte';

	import { onMount } from 'svelte';

	import Container from './_Container.svelte';
	import { getDocHeight, getWindowHeight, progress } from './_utils';

	const scrollMultiplier = 3;
	let winHeight = 0;

	function handleResize() {
		winHeight = getWindowHeight();
		window.scrollTo({ top: 0 });
	}

	function handleScroll(e) {
		const direction = Math.sign(e.deltaY);

		updateProgress(scrollMultiplier * direction);
	}

	function updateProgress(dy) {
		progress.update((prog) => {
			const p = prog + dy;
			return p > 100 ? 100 : p < 0 ? 0 : p;
		});
	}

	onMount(() => {
		winHeight = getWindowHeight() || getDocHeight();
	});
</script>

<svelte:head>
	<title>Virtual Scrolling</title>
</svelte:head>

<ReplLink repl="https://svelte.dev/repl/8a14385a9a3a42eaa916dbe9d5ec7935?version=3.48.0" />

<svelte:window
	on:wheel|passive={handleScroll}
	on:resize|passive={handleResize}
	on:orientationchange|passive={handleResize}
/>
<h2>Amount scrolled: {$progress}%</h2>
<Container {winHeight} />
