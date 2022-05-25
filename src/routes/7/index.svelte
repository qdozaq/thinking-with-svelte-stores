<script>
	import { derived, writable, get } from 'svelte/store';
	import { tweened } from 'svelte/motion';
	import { elasticOut } from 'svelte/easing';
	import ReplLink from '$lib/components/ReplLink.svelte';

	// const hover = writable(false);
	let hover = false;
	const activeIndex = writable(-1);
	const closePosition = -8;
	const openPosition = -3;
	const menuItems = ['Home', 'About', 'Memes', 'Portfolio', 'Blog'].map((name, index) => ({
		name,
		index,
		/**@type {HTMLElement}*/
		el: null,
		delay: derived(
			activeIndex,
			($active, set) => {
				let offset = index === $active ? 1 : 0;
				let x = $active !== -1 && hover ? openPosition : closePosition;
				setTimeout(() => set(x + offset), Math.abs($active - index) * 100);
			},
			closePosition
		),
		x: tweened(closePosition, { duration: 800, easing: elasticOut })
	}));

	menuItems.forEach((item) => {
		item.delay.subscribe((x) => {
			item.x.set(x);
		});
		item.x.subscribe((x) => {
			if (item.el) {
				requestAnimationFrame(() => {
					item.el.style.transform = `translateX(${x}rem)`;
				});
			}
		});
	});
</script>

<svelte:head>
	<title>Menu Drawer</title>
</svelte:head>

<ReplLink repl="https://svelte.dev/repl/4775989af51c4801aa111edb37fbf56e?version=3.48.0" />
<aside
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => {
		hover = false;
		activeIndex.set(-1);
	}}
>
	{#each menuItems as item}
		<button bind:this={item.el} on:mouseenter={() => activeIndex.set(item.index)}
			>{item.name}</button
		>
	{/each}
</aside>

<style>
	aside {
		width: 10rem;
		padding: 1rem 0;
		display: flex;
		flex-direction: column;
	}
	button {
		transform: translateX(-8rem);
		padding: 1rem;
		border-radius: 1rem;
		margin-bottom: 0.5rem;
	}
</style>
