<script>
	import { derived } from 'svelte/store';
	import { progress, activeSlider } from './progress';
	export let id;

	const value = derived(
		[progress, activeSlider],
		([$p, $a], set) => {
			if (id !== $a) {
				setTimeout(() => set($p), Math.abs(id - $a) * 100);
			}
		},
		0
	);
</script>

<input
	type="range"
	max="1000"
	value={$value}
	on:mousedown={() => {
		activeSlider.set(id);
	}}
	on:input={(e) => e.target && progress.set(e.target.valueAsNumber)}
/>
