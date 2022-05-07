<script>
	import { utc } from './_lib/timeStores';
	import DigitalClock from './_lib/DigitalClock.svelte';
	import AnalogClock from './_lib/AnalogClock.svelte';
</script>

<svelte:head>
	<title>Clocks</title>
</svelte:head>
<h2>{JSON.stringify($utc)}</h2>

<DigitalClock />
<AnalogClock />
