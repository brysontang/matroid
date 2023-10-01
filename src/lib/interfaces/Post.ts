export interface Post {
	id: string;
	title: string;
	author: Record<string, string>;
	userHasLiked: boolean;
	likes: number;
	likeEvent?: Record<string, string>[];
	publicKey: string;
	sketch: string;
	color: string;
	seeds: number[];
	createdAt: number;
}
