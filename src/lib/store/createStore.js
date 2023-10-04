import { writable } from 'svelte/store';

const initialState = {
	hue: -1
};

const { subscribe, set, update } = writable(initialState);

export default {
	subscribe,
	set,
	update,
	reset: () => set(initialState)
};
