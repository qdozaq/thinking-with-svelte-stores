const data = {
	id: 'efdb5cc665f34e8d8d570bcb7840778d',
	name: 'Progress Bar',
	owner: 11082,
	relaxed: false,
	components: [
		{
			name: 'App',
			type: 'svelte',
			source:
				"<script>\n\timport { spring } from 'svelte/motion';\n\timport { writable} from 'svelte/store';\n\tlet boxes = Array.from(Array(10).keys());\n\n\t//let progress = spring(0, { damping: 0.9, stiffness: 0.1 });\n\tlet progress = writable(0);\n\n\tfunction handleScroll(e) {\n\t\tconst pct =\n\t\t\t((document.documentElement.scrollTop + document.body.scrollTop) /\n\t\t\t\t(document.documentElement.scrollHeight - document.documentElement.clientHeight)) *\n\t\t\t100;\n\n\t\tprogress.set(pct);\n\t}\n</script>\n\n<svelte:window on:scroll={handleScroll} />\n\n<progress value={$progress} max=\"100\" />\n{#each boxes as box}\n\t{@const color = `rgb(150, 150, ${255 / (1 + box)})`}\n\t<section style:background-color={color} />\n{/each}\n\n<style>\n\tprogress {\n\t\tposition: fixed;\n\t\twidth: calc(100% - 2rem);\n\t}\n\tsection {\n\t\tmargin: 1rem;\n\t\twidth: auto;\n\t\theight: 20rem;\n\t}\n</style>"
		}
	]
};

const { description, files } = data;
let name = description;

console.log({ name, files });

const components = Object.keys(files).map((file) => {
	const dot = file.lastIndexOf('.');
	if (!~dot) return;
	const source = files[file].content;
	return {
		name: file.slice(0, dot),
		type: file.slice(dot + 1),
		source
	};
});

console.log({ components, name, files });
