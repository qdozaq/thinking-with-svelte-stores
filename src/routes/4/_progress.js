import { spring } from 'svelte/motion';
export const progress = spring(0, { damping: 0.9, stiffness: 0.1 });
