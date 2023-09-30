export interface Post {
	id: string;
	title: string;
	author: Record<string, string>;
	likes: number;
	publicKey: string;
	sketch: string;
	color: string;
	seeds: number[];
	createdAt: number;
}
