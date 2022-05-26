<script>
	import { getDocHeight, getWindowHeight, progress } from './_utils';

	let winHeight = 0;
	let prevDrag = 0;
	let prevDirection = 0;

	function handleResize() {
		winHeight = getWindowHeight();
		window.scrollTo({ top: 0 });
	}

	function handleScroll(e) {
		const direction = Math.sign(e.deltaY);
		// if (direction !== prevDirection) throttledScroll.cancel();
		prevDirection = direction;

		updateProgress(3 * direction);
	}

	function updateProgress(dy) {
		progress.update((prog) => {
			const p = prog + dy;
			return p > 100 ? 100 : p < 0 ? 0 : p;
		});
	}
</script>

<svelte:window
	on:wheel|passive={handleScroll}
	on:resize|passive={handleResize}
	on:orientationchange|passive={handleResize}
/>
