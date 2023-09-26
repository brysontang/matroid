export const load = ({ params }) => {
	console.log(params.pubKey);
	return {
		pubKey: params.pubKey
	};
};

/** @type {import('./$types').EntryGenerator} */
export const entries = () => {
	return [{ pubKey: '3ef05d3c7554f1be9a1427861e2c2b5461ead905337af85c9b2ae48ceebdcd98' }];
};

export const prerender = true;
