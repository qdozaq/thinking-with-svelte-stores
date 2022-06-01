<script context="module">
	const files = import.meta.glob('./**.svelte');
	let paths = [];

	for (let key in files) {
		if (!key.includes('_')) {
			const path = key.replace('.svelte', '').replace('/index', '').replace('./', '');
			if (path !== '.') paths.push(path);
		}
	}

	paths.sort((a, d) => parseInt(a) - parseInt(d));

	paths.unshift('');

	export async function load() {
		return {
			props: { paths }
		};
	}
</script>

<script>
	import { tweened } from 'svelte/motion';
	import { page } from '$app/stores';
	import { goto, afterNavigate } from '$app/navigation';
	import { expoOut } from 'svelte/easing';
	/**@type {string[]}*/
	export let paths;

	let el;
	$: width = el?.offsetWidth;
	let header = '';

	const position = tweened(0, { duration: 500, easing: expoOut });

	$: index = paths.indexOf($page.routeId);
	$: position.set(width * index);

	afterNavigate(() => {
		if (paths[index]) {
			header = `${paths[index]}: ${document.title}`;
		} else {
			header = '';
		}
	});

	function back() {
		let next = index - 1;
		if (next >= 0) {
			goto(`/${paths[next]}`);
		}
	}
	function forward() {
		let next = index + 1;
		if (next < paths.length) {
			goto(`/${paths[next]}`);
		}
	}
</script>

<svelte:window
	on:keydown={(e) => {
		switch (e.key) {
			case 'ArrowRight':
				return forward();
			case 'ArrowLeft':
				return back();
		}
	}}
	on:resize|={() => {
		width = el.offsetWidth;
	}}
/>

<nav>
	<div class="selector" style:width="{width}px" style:transform="translateX({$position}px)" />
	<a bind:this={el} class:selected={'' === $page.routeId} href="/">0</a>
	{#each paths as path}
		{#if path}
			<a href="/{path}" class:selected={path === $page.routeId}>{path}</a>
		{/if}
	{/each}
</nav>
<main>
	<h1>{header}</h1>
	<slot />
</main>
<footer>
	<button class="back" on:click={back}>👈</button>
	<a href="https://thinking-with-svelte-stores.vercel.app" class="url"
		>thinking-with-svelte-stores.vercel.app</a
	>
	<button class="forward" on:click={forward}>👉</button>
</footer>

<style>
	main {
		margin: 1rem;
	}

	h1 {
		margin: 0;
		padding: 0;
	}
	nav {
		z-index: 2;
		width: 100vw;
		display: flex;
		position: relative;
		justify-content: space-around;
		margin-bottom: 2rem;
	}

	.selector {
		z-index: -1;
		position: absolute;
		left: 0;
		background-color: #ff3e00;
		height: 100%;
	}

	.selected {
		color: white;
	}

	nav > a {
		flex: 1;
		text-align: center;
	}

	.selector,
	nav > a {
		border-radius: 0 0 40% 40%;
	}

	button {
		font-size: 1.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 100%;
		background: white;
		width: 3rem;
		height: 3rem;
		border: 1px solid rgb(164, 164, 164);
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
		cursor: pointer;
	}

	button:hover {
		border-color: #ff3e00;
	}

	footer {
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		box-sizing: border-box;
		padding: 1rem;
	}

	.url {
		text-align: center;
		font-size: 1.5rem;
	}
</style>
