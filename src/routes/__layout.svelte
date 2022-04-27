<script>
	let examples = ['1-1', '2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7'];
</script>

<nav>
	{#each examples as example}
		<a href="/{example}">{example}</a>
	{/each}
</nav>
<slot />

<style>
	nav {
		display: flex;
		justify-content: space-around;
		margin-bottom: 2rem;
	}
</style>
