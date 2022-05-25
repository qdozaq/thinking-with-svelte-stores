<svelte:options accessors={true} />

<script>
	export let color;
	export let radius;
	export let textSize;
	export let x;
	export let y;
	export let dx = 0;
	export let dy = 0;
</script>

<g transform="translate({x + dx}, {y + dy})">
	<circle fill={color} r={radius} />
	<text style:font-size="{textSize}px" text-anchor="middle" alignment-baseline="middle"
		><slot /></text
	>
</g>

<style>
	circle {
		filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.15));
	}
</style>
