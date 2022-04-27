<script>
	import { derived, writable, get } from 'svelte/store';
	import { tweened } from 'svelte/motion';
	import { elasticOut } from 'svelte/easing';

	// const hover = writable(false);
	let hover = false;
	let activeIndex = -1;
	const closePosition = -8;
	const openPosition = -3;
	const menuItems = ['Home', 'About', 'Memes', 'Portfolio', 'Blog'].map((name, index) => ({
		name,
		index,
		/**@type {HTMLElement}*/
		el: null,
		x: tweened(closePosition, { duration: 800, easing: elasticOut })
	}));

	menuItems.forEach((item) => {
		item.x.subscribe((x) => {
			if (item.el) {
				item.el.style.transform = `translateX(${x}rem)`;
			}
		});
	});

	// almost works like the derived store method, but less control over what gets subscribed to
	$: {
		menuItems.forEach((item) => {
			let offset = item.index === activeIndex ? 1 : 0;
			let x = activeIndex !== -1 && hover ? openPosition : closePosition;
			setTimeout(() => item.x.set(x + offset), Math.abs(activeIndex - item.index) * 100);
		});
	}
</script>

<h1>2-7: Menu Drawer Without Derived Store</h1>
<aside
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => {
		hover = false;
		activeIndex = -1;
	}}
>
	{#each menuItems as item}
		<button bind:this={item.el} on:mouseenter={() => (activeIndex = item.index)}>{item.name}</button
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
