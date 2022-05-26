import { writable } from 'svelte/store';

export const progress = writable(0);

export const getWindowHeight = () =>
	window.innerHeight || (document.documentElement || document.body).clientHeight;

export const getDocHeight = () =>
	Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight,
		document.body.clientHeight,
		document.documentElement.clientHeight
	);
