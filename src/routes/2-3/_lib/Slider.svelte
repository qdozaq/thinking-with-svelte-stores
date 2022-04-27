<script>
	import { spring } from 'svelte/motion';
	import { derived, get } from 'svelte/store';
	import { progress, activeSlider } from './progress';
	export let id;
	export let total;

	let value = spring(0, { damping: 0.9, stiffness: 0.1 });
	$: {
		let diff = Math.abs(id - $activeSlider);
		value.damping = 1 - ((diff / total) * 0.5 + 0.3);
		if (id !== $activeSlider) {
			setTimeout(() => value.set($progress), diff * 100);
		}
	}
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
