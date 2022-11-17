export interface HomeItems {
	id: string;
	image_path: string;
	poster_path: string;
	title: string;
	vote_average: number;
	image: string;
}

export interface movieDetails {
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


