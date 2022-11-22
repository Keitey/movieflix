import React,{ useEffect } from "react";
import { Link } from "react-router-dom";
import { Text, Box, Image, Flex, Heading } from "@chakra-ui/react";
import { Circles } from "react-loader-spinner";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Store } from "./store";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Home: React.FC = () => {
	const store = useLocalObservable(() => new Store());
	const image_path = "https://image.tmdb.org/t/p/w500";
	const responsive = {
		0: {items: 1},
		568: {items: 2},
		1024: {items: 5},
	};

	useEffect(() => {
		store.moviesShelf.fetchPage(0);
		store.topShelf.fetchPage(0);
	}, [store]);

	return (
		<>
			<Flex
				backgroundImage="https://www.themoviedb.org/assets/2/v4/marketing/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png"
				backgroundRepeat="no-repeat"
				height="300px"
				align="center"
				justify="center"
				m="auto"
				width="80%"
				flexDirection="column"
			>
				<Box
					background="#fff"
					borderRadius="50%"
					width="140px"
					height="140px"
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Heading
						color="#7e1818"
						as="h1"
						fontSize="24px"
					>
						MOVIEFLIX
					</Heading>
				</Box>
				<Box
					textAlign="center"
					pt="0.9rem"
					lineHeight="1.7em"
				>
					<Text>
						MovieFlix
					</Text>
					<Text>Assista milhares de filmes online ou na sua Smart TV, game console, PC, Mac, mobile, tablet e mais. Comece seu teste gratuito hoje.</Text>
				</Box>
			</Flex>
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
								infinite
							>
								{store.moviesShelf.items.map((movie) => (
									<Box
										key={movie.id}
										p="1rem"
										transition="1s"
										css={{
											":hover": {
												transform: "scale(1.1)",
											},
										}}
									>
										<Link to={`/details/${movie.id}`}>
											<Image
												src={`${image_path}${movie.poster_path}`}
												alt={movie.title}
											/>
										</Link>
										<Box
											background="#361D1C"
											height="100px"
											textAlign="center"
										>
											<Text
												pt="1.3rem"
											>
												{movie.title}
											</Text>
											<Text>
												Média: {movie.vote_average} ⭐
											</Text>
										</Box>
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
								infinite
							>
								{store.topShelf.items.map((top) => (
									<Box
										key={top.id}
										p="1rem"
										transition="1s"
										css={{
											":hover": {
												transform: "scale(1.1)",
											},
										}}
									>
										<Link to={`/details/${top.id}`}>
											<Image
												src={`${image_path}${top.poster_path}`}
												alt={top.title}
											/>
										</Link>
										<Box
											background="#361D1C"
											height="100px"
											textAlign="center"
										>
											<Text
												pt="1.3rem"
											>
												{top.title}
											</Text>
											<Text>
												Média: {top.vote_average} ⭐
											</Text>
										</Box>
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
