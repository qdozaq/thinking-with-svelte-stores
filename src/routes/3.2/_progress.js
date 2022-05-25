import { spring } from 'svelte/motion';
import { writable } from 'svelte/store';

export const progress = spring(0, { damping: 0.9, stiffness: 0.1 });

export const activeSlider = writable(-1);
