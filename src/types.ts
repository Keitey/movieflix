export interface HomeItems {
	id: string;
	image_path: string;
	poster_path: string;
	title: string;
	vote_average: number;
	image: string;
	name: string;
}

export interface IDetails {
	title: string;
	overview: string;
	release_date: string;
	image_path: string;
	poster_path: string;
	image: string;
	id: string;
	vote_average: number;
	genres: IGenre[];
}

export interface IGenre {
	name: string;
	id: string;
}
