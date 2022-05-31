<script>
	import Section from './_Section.svelte';
	import { spring } from 'svelte/motion';
	import { roundToNearestMultiple, progress } from './_utils';

	export let winHeight;
	const sections = [
		{ title: 'Section 1', image: 'https://media.giphy.com/media/Nx0rz3jtxtEre/giphy.gif' },
		{ title: 'Section 2', image: 'https://c.tenor.com/smu7cmwm4rYAAAAd/general-kenobi-kenobi.gif' },
		{
			title: 'Section 3',
			image:
				'https://64.media.tumblr.com/6c41f19d880b5024b246c06f060b9bf1/tumblr_nopoo6Hbje1rp0vkjo1_500.gif'
		}
	];
	const titleOffsetMultiplier = 2;

	const coords = spring({ y: 0 }, { stiffness: 0.08, damping: 0.9 });

	$: {
		// get the percentage each section takes out of the total progress
		const sectionPctSize = 100 / (sections.length - 1);

		// map progress to the position of our sections
		const y = ($progress / sectionPctSize) * winHeight;

		// set percentage to beginning of nearest section after spring settles
		coords.set({ y }).then(() => {
			const nearestSection = roundToNearestMultiple($progress, sectionPctSize) / sectionPctSize;
			progress.set(nearestSection * sectionPctSize);
		});
	}
</script>

{#each sections as { title, image }, index}
	<Section
		{title}
		{image}
		{index}
		position={index * winHeight + winHeight / 2}
		tPos={-$coords.y * titleOffsetMultiplier + winHeight * index}
		cPos={-$coords.y}
	/>
{/each}
