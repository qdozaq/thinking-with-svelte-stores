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

/**
 * Round the given number to nearest multiple.
 * @example roundToNearestMultiple(43, 5) == 45
 */
export function roundToNearestMultiple(n, multiple) {
	const divide = multiple / (n % multiple);

	const nearest =
		divide >= 2 ? Math.floor(n / multiple) * multiple : Math.ceil(n / multiple) * multiple;

	return nearest;
}

/**
 * Round the given number down to the nearest multiple.
 * @example roundDownToMultiple(43, 5) == 40
 */
export function roundDownToMultiple(n, m) {
	return Math.floor(n / m) * m;
}
