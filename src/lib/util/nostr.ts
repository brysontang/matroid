export function getTag(tags: string[][], tag: string): string {
	for (const t of tags) {
		if (t[0] === tag) {
			return t[1];
		}
	}
	return '';
}
