import React,{ useEffect } from "react";
import { Link } from "react-router-dom";
import { GridItem, Grid, Text, Box, Image } from "@chakra-ui/react";
// import { Circles } from "react-loader-spinner";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Store } from "./store";

const Home: React.FC = () => {
	const store = useLocalObservable(() => new Store());
	const image_path = "https://image.tmdb.org/t/p/w500";

	useEffect(() => {
		store.moviesShelf.fetchPage(0);
	}, [store]);

	// if (store.moviesShelf.items.length === 0) {
	// 	return (
	// 		<div className="loading">
	// 			<Circles color="#f31734" />
	// 		</div>
	// 	);
	// }

	return (
		<Box>
			<Text
				textAlign="center"
				p="2rem"
				fontSize="4xl"
			>
				Filmes Populares
			</Text>
			<Grid
				templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
				gap="4rem"
				m="3rem"
			>
				{store.moviesShelf.items.map((movie) => (
					<GridItem
						key={movie.id}
					>
						<Link to={`/details/${movie.id}`}>
							<Image
								boxSize="400px"
								borderRadius="5px"
								src={`${image_path}${movie.poster_path}`}
								alt={movie.title}
							/>
						</Link>
						<Text
							textAlign="center"
						>
							{movie.title}
						</Text>
						<Text
							textAlign="center"
						>
							Média:
							{movie.vote_average}
						</Text>
					</GridItem>
				))}
			</Grid>
		</Box>
	);
};

export default observer(Home);
