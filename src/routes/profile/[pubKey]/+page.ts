export const load = ({ params }) => {
	console.log(params.pubKey);
	return {
		pubKey: params.pubKey
	};
};
