import React,{ useEffect } from "react";
import { Link } from "react-router-dom";
import { GridItem, Grid, Text, Box, Image, Flex } from "@chakra-ui/react";
import { Circles } from "react-loader-spinner";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Store } from "./store";

const Home: React.FC = () => {
	const store = useLocalObservable(() => new Store());
	const image_path = "https://image.tmdb.org/t/p/w500";

	useEffect(() => {
		store.moviesShelf.fetchPage(0);
	}, [store]);

	return (
		<Box>
			<Text
				textAlign="center"
				p="1rem"
				fontSize="4xl"
			>
				Filmes Populares
			</Text>
			<Grid
				templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
				gap="2rem"
				m="3rem"
			>
				{store.moviesShelf.loader.isLoading ? (
					<Flex
						m="auto"
						align="center"
						justify="center"
					>
						<Circles color="#f31734" />
					</Flex>
				): (
					<>
						{store.moviesShelf.items.map((movie) => (
							<GridItem
								key={movie.id}
							>
								<Link to={`/details/${movie.id}`}>
									<Image
										rounded="11%"
										src={`${image_path}${movie.poster_path}`}
										alt={movie.title}
									/>
								</Link>
								<Text
									pt="1.3rem"
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
					</>
				)}
			</Grid>
		</Box>
	);
};

export default observer(Home);
