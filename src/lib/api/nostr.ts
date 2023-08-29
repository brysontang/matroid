import { SimplePool, validateEvent, verifySignature } from 'nostr-tools';

export const nostrGet = async (params) => {
	const relayObject = await window.nostr.getRelays();
	const relays = Object.keys(relayObject);

	const pool = new SimplePool();

	const events = await pool.list(relays, params);
	return events;
};

export const nostrCreate = async (kind, content, tags) => {
	// @ts-ignore
	const pubkey = await window.nostr.getPublicKey();

	const event = {
		kind,
		created_at: Math.floor(Date.now() / 1000),
		content,
		tags,
		pubkey
	};

	const signedEvent = await window.nostr.signEvent(event);

	const valid = validateEvent(signedEvent);
	const verified = verifySignature(signedEvent);

	if (!valid || !verified) {
		console.log('invalid event');
		return;
	}

	// @ts-ignore
	const relayObject = await window.nostr.getRelays();
	const relays = Object.keys(relayObject);

	const pool = new SimplePool();

	pool.publish(relays, signedEvent);
};
