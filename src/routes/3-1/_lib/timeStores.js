import { readable, derived } from 'svelte/store';

export const utc = readable({ hour: 0, minute: 0, second: 0 }, (set) => {
	const date = new Date();
	set({ hour: date.getUTCHours(), minute: date.getUTCMinutes(), second: date.getUTCSeconds() });

	const interval = setInterval(() => {
		const date = new Date();
		set({ hour: date.getUTCHours(), minute: date.getUTCMinutes(), second: date.getUTCSeconds() });
	}, 1000);

	return () => clearInterval(interval);
});

const shift = (hours) =>
	derived(utc, ($time, set) => {
		let hour = (24 + $time.hour + hours) % 24;
		set({ ...$time, hour });
	});

export const utc1 = shift(1);

export const edt = shift(-4);
