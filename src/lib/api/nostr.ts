import { SimplePool, validateEvent, verifySignature } from 'nostr-tools';

export const nostrGet = async (params) => {
	const relayObject = await window.nostr.getRelays();
	const relays = Object.keys(relayObject);

	const pool = new SimplePool();

	const events = await pool.list(relays, params);
	return events;
};

export const nostrCreate = async (kind: number, content: string, tags: string[][]) => {
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

	const relayObject = await window.nostr.getRelays();
	const relays = Object.keys(relayObject);

	const pool = new SimplePool();

	pool.publish(relays, signedEvent);
};

export const getNostrPosts = async () => {
	const feed = await nostrGet([{ kinds: [128] }]);
	return feed;
};

export const getAuthorMetaData = async (pubkey: string) => {
	const metadata = await nostrGet([{ kinds: [0], authors: [pubkey] }]);
	if (metadata.length === 0) return pubkey;

	const content = metadata[0].content;
	return JSON.parse(content);
};

interface Post {
	title: string;
	sketch: string;
}

export const createP5Post = async (body: Post, color: string) => {
	await nostrCreate(128, JSON.stringify(body), [['c', color]]);
};

interface Metadata {
	name: string;
	about?: string;
	picture?: string;
}

export const updateUser = async (metadata: Metadata) => {
	await nostrCreate(0, JSON.stringify(metadata), []);
};
