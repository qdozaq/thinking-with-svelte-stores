<script>
	export let value;
</script>

<input type="range" max="1000" value={$value} on:mousedown on:input />
