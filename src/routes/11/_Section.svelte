<script lang="ts">
	import { onMount } from 'svelte';

	export let title;
	export let image;
	export let position = 0;
	export let index = 0;
	export let tPos = 0;
	export let cPos = 0;

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<!-- after mounting use the position calculated off of window instead of css to avoid page jumping on mobile -->
<section style:top={mounted ? `${position}px` : `calc(100vh * ${index} + 50%)`}>
	<div class="grid">
		<div style:transform="translateY({cPos}px)" class="content">
			<img alt={title} src={image} />
		</div>
		<h1 style:transform="translateY({tPos}px)">{title}</h1>
	</div>
</section>

<style>
	section {
		position: fixed;
		width: 35rem;
		top: 50vh;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.grid {
		display: grid;
		margin-left: 2rem;
		margin-right: 2rem;
		grid-template-columns: 1fr 2fr 1fr;
		grid-template-rows: 11rem 11rem 1rem;
	}

	h1 {
		color: #ff3e00;
		z-index: 2;
		font-weight: 500;
		font-size: 4rem;
		grid-row: 1;
		grid-column: 1 / 3;
		align-self: start;
		justify-self: start;
		margin: 0;
		will-change: transform;
	}

	.content {
		grid-row: 1 / 3;
		grid-column: 1 / 2;
		justify-self: end;
		align-self: end;
		width: 20rem;
		will-change: transform;
	}
</style>
