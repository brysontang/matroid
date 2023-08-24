import { writable } from 'svelte/store';

const intitalState = {
	hue: -1
};

const { subscribe, set, update } = writable(intitalState);

export default {
	subscribe,
	set,
	update,
	reset: () => set(intitalState)
};
