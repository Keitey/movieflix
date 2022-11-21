import React,{ useEffect } from "react";
import { Link } from "react-router-dom";
import { Text, Box, Image, Flex } from "@chakra-ui/react";
import { Circles } from "react-loader-spinner";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Store } from "./store";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Home: React.FC = () => {
	const store = useLocalObservable(() => new Store());
	const image_path = "https://image.tmdb.org/t/p/w500";

	useEffect(() => {
		store.moviesShelf.fetchPage(0);
		store.topShelf.fetchPage(0);
	}, [store]);

	const responsive = {
		0: {items: 1},
		568: {items: 2},
		1024: {items: 5},
	};

	return (
		<>
			<Box>
				<Text
					textAlign="center"
					p="1rem"
					fontSize="4xl"
				>
					Filmes Populares
				</Text>
				<Flex
					m="2rem"
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
							<AliceCarousel
								responsive={responsive}
								keyboardNavigation
								disableDotsControls
							>
								{store.moviesShelf.items.map((movie) => (
									<Box
										key={movie.id}
										p="1rem"
									>
										<Link to={`/details/${movie.id}`}>
											<Image
												src={`${image_path}${movie.poster_path}`}
												alt={movie.title}
												transition="1s"
												css={{
													":hover": {
														transform: "scale(1.1)",
													},
												}}
												boxSize="380px"
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
											Média: {movie.vote_average} ⭐
										</Text>
									</Box>
								))}
							</AliceCarousel>
						</>
					)}
				</Flex>
				<Text
					textAlign="center"
					p="1rem"
					fontSize="4xl"
				>
					Mais Votados
				</Text>
				<Flex
					m="2rem"
				>
					{store.topShelf.loader.isLoading ? (
						<Flex
							m="auto"
							align="center"
							justify="center"
						>
							<Circles color="#f31734" />
						</Flex>
					): (
						<>
							<AliceCarousel
								responsive={responsive}
								keyboardNavigation
								disableDotsControls
							>
								{store.topShelf.items.map((top) => (
									<Box
										key={top.id}
										p="1rem"
									>
										<Link to={`/details/${top.id}`}>
											<Image
												src={`${image_path}${top.poster_path}`}
												alt={top.title}
												transition="1s"
												css={{
													":hover": {
														transform: "scale(1.1)",
													},
												}}
												boxSize="380px"
											/>
										</Link>
										<Text
											pt="1.3rem"
											textAlign="center"
										>
											{top.title}
										</Text>
										<Text
											textAlign="center"
										>
											Média: {top.vote_average} ⭐
										</Text>
									</Box>
								))}
							</AliceCarousel>
						</>
					)}
				</Flex>
			</Box>
		</>
	);
};

export default observer(Home);
