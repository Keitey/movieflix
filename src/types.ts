export interface HomeItems {
	id: string;
	poster_path: string;
	backdrop_path: string;
	title: string;
	vote_average: number;
	image: string;
	name: string;
}

export interface IDetails {
	title: string;
	overview: string;
	release_date: string;
	backdrop_path: string;
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
