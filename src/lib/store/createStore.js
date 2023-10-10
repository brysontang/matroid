import { writable } from 'svelte/store';

const initialState = {
	hue: -1,
	pubKey: ''
};

const { subscribe, set, update } = writable(initialState);

(async () => {
	const key = await window.nostr.getPublicKey();
	update((/** @type {any} */ current) => {
		return {
			...current,
			pubKey: key
		};
	});
})();

export default {
	subscribe,
	set,
	update,
	reset: () => set(initialState)
};
