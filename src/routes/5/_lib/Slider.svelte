<svelte:options accessors={true} />

<script>
	export let value = 0;
</script>

<input type="range" max="1000" {value} on:mousedown on:input />
