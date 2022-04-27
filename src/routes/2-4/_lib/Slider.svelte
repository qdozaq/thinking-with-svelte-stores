<script>
	import { spring } from 'svelte/motion';
	import { derived, get } from 'svelte/store';
	import { progress, activeSlider } from './progress';
	export let value;

	// let value = spring(0, { damping: 0.9, stiffness: 0.1 });
	// progress.subscribe((p) => {
	// 	let active = get(activeSlider);
	// 	let diff = Math.abs(id - active);
	// 	value.damping = 1 - ((diff / total) * 0.5 + 0.3);
	// 	if (id !== active) {
	// 		setTimeout(() => value.set(p), diff * 100);
	// 	}
	// });
</script>

<input type="range" max="1000" {value} on:mousedown on:input />
