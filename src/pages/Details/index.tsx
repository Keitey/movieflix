import { useParams, Link } from "react-router-dom";
import React, { useEffect } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Store } from "./store";
import { Box } from "@chakra-ui/react";

const Details: React.FC = () => {
	const { id } = useParams();
	const store = useLocalObservable(() => new Store(id));
	const image_path = "https://image.tmdb.org/t/p/w500";

	useEffect(() => {
		store.fetchShelf.fetchModel();
	}, [store.fetchShelf]);

	return (
		<Box>
			{store.fetchShelf.loader.isLoading ? (
				<span>carregando...</span>
			) : !store.fetchShelf.hasModel ? (
				<span>Movie not found 😥</span>
			) : (
				<div className="movie">
					<img
						src={`${image_path}${store.fetchShelf.fetchedModel.poster_path}`}
						alt={store.fetchShelf.fetchedModel.title}
					/>
					<div className="details">
						<h2>{store.fetchShelf.fetchedModel.title}</h2>
						<span>Sinopse: {store.fetchShelf.fetchedModel.overview}</span>
						<span className="release">Data de Lançamento: {store.fetchShelf.fetchedModel.release_date}</span>
						<div className="buttons">
							<Link to="/">
								<button>Voltar</button>
							</Link>
							<a
								target="blank"
								href={`https://www.youtube.com/results?search_query=${store.fetchShelf.fetchedModel.title}`}
							>
								<button>Trailer</button>
							</a>
						</div>
					</div>
				</div>
			)}
		</Box>
	);
};

export default observer(Details);
