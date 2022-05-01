<script>
	import { utc } from './_lib/timeStores';
	import DigitalClock from './_lib/DigitalClock.svelte';
	import AnalogClock from './_lib/AnalogClock.svelte';
</script>

<h2>{JSON.stringify($utc)}</h2>
<!-- <h2>{JSON.stringify($utc1)}</h2>
<h2>{JSON.stringify($edt)}</h2> -->

<DigitalClock time={$utc} />
<AnalogClock time={$utc} />
