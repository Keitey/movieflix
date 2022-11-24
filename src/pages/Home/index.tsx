import React,{ useEffect } from "react";
import { Link } from "react-router-dom";
import { Text, Box, Image, Flex, Heading } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Store } from "./store";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import UseImageColor from "use-image-color";

const Home: React.FC = () => {
	const store = useLocalObservable(() => new Store());
	const backdrop_path = "https://image.tmdb.org/t/p/w500";
	const responsive = {
		0: {items: 1},
		568: {items: 2},
		1024: {items: 5},
	};

	const { colors } = UseImageColor(
		store.moviesShelf.items[0] ? (backdrop_path + store.moviesShelf.items[0].poster_path) : "",
		{ cors: true, colors: 3},
	);

	const bannerMostPopularMovie = (store.moviesShelf.items[0] ? (backdrop_path + store.moviesShelf.items[0].backdrop_path) : "");

	useEffect(() => {
		store.moviesShelf.fetchPage(0);
		store.topShelf.fetchPage(0);
	}, [store]);

	return (
		<Box
			bg={`linear-gradient(transparent 5%, ${colors? colors[0]: "#1b1616"})`}
		>
			<Heading
				color="#000"
				textAlign="center"
				p="1rem"
			>
				Em destaque
			</Heading>
			<Flex
				align="center"
				justify="center"
				p="1rem"
			>
				<Image
					src={bannerMostPopularMovie}
					alt=""
					w="80%"
					h="500px"
				/>
			</Flex>
			<Box>
				<Heading
					textAlign="center"
					as="h1"
					color="#000"
				>
					Filmes Populares
				</Heading>
				<Flex
					m="2rem"
				>
					{store.moviesShelf.loader.isLoading ? (
						<Flex
							m="auto"
							align="center"
							justify="center"
						>
							<Spinner color="#f31734" size="xl" />
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
												src={`${backdrop_path}${movie.poster_path}`}
												alt={movie.title}
												boxSize={300}
											/>
										</Link>
										<Box
											background="#361D1C"
											height="100px"
											maxWidth="300px"
										>
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
									</Box>
								))}
							</AliceCarousel>
						</>
					)}
				</Flex>
				<Heading
					textAlign="center"
					color="#000"
					fontSize="4xl"
				>
					Mais Votados
				</Heading>
				<Flex
					m="2rem"
				>
					{store.topShelf.loader.isLoading ? (
						<Flex
							m="auto"
							align="center"
							justify="center"
						>
							<Spinner color="#f31734" size="xl" />
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
												src={`${backdrop_path}${top.poster_path}`}
												alt={top.title}
												boxSize={300}
											/>
										</Link>
										<Box
											background="#361D1C"
											height="100px"
											maxWidth="300px"
										>
											<Text
												pt="1.3rem"
												color="#fff"
												textAlign="center"
											>
												{top.title}
											</Text>
											<Text
												color="#fff"
												textAlign="center"
											>
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
		</Box>
	);
};

export default observer(Home);
