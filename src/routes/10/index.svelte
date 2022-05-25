<script>
	import { utc } from './_timeStores';
	import DigitalClock from './_DigitalClock.svelte';
	import AnalogClock from './_AnalogClock.svelte';
	import ReplLink from '$lib/components/ReplLink.svelte';
</script>

<svelte:head>
	<title>Clocks</title>
</svelte:head>
<ReplLink repl="https://svelte.dev/repl/c407d48ab44f4e64b2cf5382288fabc8?version=3.48.0" />

<h2>{JSON.stringify($utc)}</h2>

<DigitalClock />
<AnalogClock />
