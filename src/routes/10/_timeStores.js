import { readable } from 'svelte/store';

export const utc = readable(new Date(), (set) => {
	const interval = setInterval(() => {
		set(new Date());
	});

	return () => clearInterval(interval);
});
