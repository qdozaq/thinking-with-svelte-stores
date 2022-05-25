<script>
	import { spring } from 'svelte/motion';
	import { utc } from './_timeStores';

	const tween = spring(toDegrees($utc), { stiffness: 0.5, damping: 0.2 });

	$: tween.set(toDegrees($utc));

	function toDegrees(date) {
		return {
			hour: (date.getHours() / 24 / 2) * 360,
			// dumb hack to get this not to loop back
			minute: (date.getMinutes() / 60) * 360 + date.getHours() * 360,
			second: (date.getSeconds() / 60) * 360 + date.getMinutes() * 360
		};
	}
</script>

<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
	<g>
		<title>Layer 1</title>
		<ellipse ry="100" rx="100" id="svg_1" cy="100" cx="100" stroke="#000" fill="#fff" />
		<line
			transform="rotate({$tween.minute})"
			stroke-width="2"
			y2="8"
			x2="100"
			y1="100"
			x1="100"
			class="minute"
			stroke="#000"
		/>
		<line
			stroke-width="2"
			transform="rotate({$tween.second})"
			class="second"
			y2="30"
			x2="100"
			y1="100"
			x1="100"
			stroke="#000"
		/>
		<line
			transform="rotate({$tween.hour})"
			stroke-width="3"
			y2="50"
			x2="100"
			y1="100"
			x1="100"
			stroke="#000"
		/>
	</g>
</svg>

<style>
	line {
		transform-origin: center;
	}
</style>
