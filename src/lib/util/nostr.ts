export function getTag(tags: string[][], tag: string) {
	for (let t of tags) {
		if (t[0] === tag) {
			return t[1];
		}
	}
	return '';
}
