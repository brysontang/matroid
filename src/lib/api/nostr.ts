import { SimplePool, validateEvent, verifySignature } from 'nostr-tools';
import type { Filter, Event } from 'nostr-tools';

declare global {
	interface Window {
		nostr: {
			getPublicKey: () => Promise<string>;
			signEvent: (event: any) => Promise<any>;
			getRelays: () => Promise<any>;
		};
	}
}

export const nostrGet = async (params: Filter[]): Promise<Event[]> => {
	let relays: any = [];
	try {
		const relayObject = await window.nostr.getRelays();
		relays = Object.keys(relayObject);
	} catch (e) {
		console.log('nostr not found');
	}

	const pool = new SimplePool();

	relays.push('wss://nostr.matroid.app');

	const events = await pool.list(relays, params);
	return events;
};

export const nostrCreate = async (
	kind: number,
	tags: string[][],
	content: string
): Promise<void> => {
	if (!window.nostr) {
		console.log('nostr not found, cannot post');
		return;
	}

	const pubkey = await window.nostr.getPublicKey();

	const event = {
		pubkey,
		created_at: Math.floor(Date.now() / 1000),
		kind,
		tags,
		content
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

interface Options {
	authors?: string[];
	'#c'?: string[];
}

export const getNostrPosts = async (options?: Options): Promise<Event[]> => {
	const feed = await nostrGet([{ kinds: [128], ...options }]);
	return feed;
};

export const getAuthorMetaData = async (pubkey: string): Promise<Event[] | string> => {
	const metadata = await nostrGet([{ kinds: [0], authors: [pubkey] }]);
	if (metadata.length === 0) return pubkey;

	const content = metadata[0].content;
	return JSON.parse(content);
};

export const getLikes = async (id: string): Promise<Event[]> => {
	const likes = await nostrGet([{ kinds: [7], '#e': [id] }]);
	return likes;
};

interface Post {
	title: string;
	sketch: string;
	seeds: number[];
}

export const createP5Post = async (body: Post, color: string) => {
	await nostrCreate(128, [['c', color]], JSON.stringify(body));
};

interface Metadata {
	name: string;
	about?: string;
	picture?: string;
}

export const updateUser = async (metadata: Metadata): Promise<void> => {
	await nostrCreate(0, [], JSON.stringify(metadata));
};

export const likePost = async (pubkey: string, likedId: string): Promise<void> => {
	const tags = [];
	tags.push(['e', likedId]);
	tags.push(['p', pubkey]);

	await nostrCreate(7, tags, '+');
};
