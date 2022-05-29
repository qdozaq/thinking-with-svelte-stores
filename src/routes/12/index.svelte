<script>
	import { onMount } from 'svelte';

	import Container from './_Container.svelte';
	import { getDocHeight, getWindowHeight, progress } from './_utils';

	let winHeight = 0;

	function handleResize() {
		winHeight = getWindowHeight();
		window.scrollTo({ top: 0 });
	}

	function handleScroll(e) {
		const direction = Math.sign(e.deltaY);

		updateProgress(3 * direction);
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

<svelte:window
	on:wheel|passive={handleScroll}
	on:resize|passive={handleResize}
	on:orientationchange|passive={handleResize}
/>
<h2>Amount scrolled: {$progress}%</h2>
<Container {winHeight} />
