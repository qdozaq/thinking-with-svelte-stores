<script>
	import S1 from './_sections/1.svelte';
	import S2 from './_sections/2.svelte';
	import { spring } from 'svelte/motion';
	import { roundDownToMultiple, roundToNearestMultiple, progress } from './_utils';

	export let winHeight;
	const sections = [S1, S2];
	const titleOffsetMultiplier = 2;

	const coords = spring({ y: 0 }, { stiffness: 0.08, damping: 0.9 });

	$: {
		// get the percentage each section takes out of the total progress
		const sectionPctSize = 100 / (sections.length - 1);

		const currentSection = roundDownToMultiple($progress, sectionPctSize) / sectionPctSize;

		const sectionProgress = ($progress % sectionPctSize) / sectionPctSize;

		const mappedProgress = sectionProgress * sectionPctSize + sectionPctSize * currentSection;

		const y = (mappedProgress / sectionPctSize) * winHeight;

		// set percentage to beginning of nearest section after spring settles
		coords.set({ y }).then(() => {
			const nearestSection = roundToNearestMultiple($progress, sectionPctSize) / sectionPctSize;
			progress.set(nearestSection * sectionPctSize);
		});
	}
</script>

{#each sections as section, index}
	<svelte:component
		this={section}
		position={index * winHeight + winHeight / 2}
		{index}
		tPos={-$coords.y * titleOffsetMultiplier + winHeight * index}
		cPos={-$coords.y}
	/>
{/each}
