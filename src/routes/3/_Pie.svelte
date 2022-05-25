<script>
	import { progress } from './_progress';
</script>

<svg height="200" width="200" viewBox="0 0 20 20">
	<circle r="10" cx="10" cy="10" fill="bisque" />
	<circle
		r="5"
		cx="10"
		cy="10"
		fill="bisque"
		stroke="#ff3e00"
		stroke-width="10"
		stroke-dasharray="calc({$progress / 10} * 31.42 / 100) 31.42"
	/>
</svg>
