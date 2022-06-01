<svelte:head>
	<title>About Me</title>
</svelte:head>

<div>
	<ul>
		<li>Frontend Platform Engineer at Vimeo</li>
		<li>Freelance Motion Designer</li>
		<li>Using Svelte on side projects for 2.5 years</li>
		<li>In the Svelte Origins trailer</li>
	</ul>
	<div>
		<a href="https://youtu.be/OkQxx7kdZLA?t=29">https://youtu.be/OkQxx7kdZLA?t=29</a>
		<img alt="svelte origins" src="/origins-me.jpg" />
	</div>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
	li {
		line-height: 2rem;
		font-size: 1.25rem;
	}
	img {
		width: 50rem;
	}
</style>
