<script>
	import { derived } from 'svelte/store';
	import { progress } from './_progress';
	export let delay = 0;

	let value = derived(
		progress,
		($p, set) => {
			setTimeout(() => requestAnimationFrame(() => set($p)), delay);
		},
		0
	);
</script>

<progress max="1000" value={$value} />

<style>
	progress {
		width: 100%;
	}
</style>
