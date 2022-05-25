<script>
	import { derived } from 'svelte/store';
	import { progress, activeSlider } from './_progress';
	export let id;
	const value = derived(
		[progress, activeSlider],
		([$progress, $active], set) => {
			if (id !== $active) {
				setTimeout(() => requestAnimationFrame(() => set($progress)), Math.abs(id - $active) * 100);
			}
		},
		0
	);
</script>

<input
	type="range"
	max="1500"
	value={$value}
	on:mousedown={() => {
		activeSlider.set(id);
	}}
	on:input={(e) => e.target && progress.set(e.target.valueAsNumber)}
/>
