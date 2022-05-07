<script>
	import { derived } from 'svelte/store';
	export let delay = 0;
	export let progress;

	let value = derived(
		progress,
		($p, set) => {
			setTimeout(() => set($p), delay);
		},
		0
	);
</script>

<progress max="100" value={$value} />

<style>
	progress {
		width: 100%;
	}
</style>
