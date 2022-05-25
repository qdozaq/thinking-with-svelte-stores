<script>
	import { progress } from './_progress';
	import Bar from './_Bar.svelte';
	import Pie from './_Pie.svelte';
	import ReplLink from '$lib/components/ReplLink.svelte';
</script>

<svelte:head>
	<title>Driving animation across multiple files</title>
</svelte:head>

<ReplLink repl="https://svelte.dev/repl/6161c11d7f354bc48bf9c16f518d9fa1?version=3.48.0" />

<input type="range" max="1000" bind:value={$progress} />
<Bar />
<Pie />

<style>
	input {
		width: 100%;
	}
</style>
