import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Grid, Box, Image, Text, Heading } from "@chakra-ui/react";
import { APIKey } from "../../configKey/key";

const Search = () => {
	const [searchParams] = useSearchParams();
	const [movies, setMovies] = useState<any[]>([]);
	const query = searchParams.get("q");
	const image_path ="https://image.tmdb.org/t/p/w500/";

	const getSearchMovies = async (url: string) =>{
		const res = await fetch(url);
		const data = await res.json();
		setMovies(data.results);
	};

	useEffect(()=> {
		const searchWithQuery = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${query}`;
		getSearchMovies(searchWithQuery);
	}, [query]);

	return (
		<Box
			bg="#1b1616"
			textAlign="center"
		>
			<Heading
				textAlign="center"
				size="md"
				pt="1.3rem"
			>
				Resultado para: {query}
			</Heading>
			<Grid
				templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
				gap="4rem"
			>
				{movies.length === 0 ?
					<Heading
						color="#F31734"
						pt="4rem"
					>
						<Link to="/">
							<Heading
								h="100vh"
								size="lg"
							>
								Filme não localizado.<br />Voltar para a home
							</Heading>
						</Link>
					</Heading>
					: movies.map((movie) => (
						<Box key={movie.id}>
							<Link to={`/details/${movie.id}`}>
								<Image
									src={`${image_path}${movie.poster_path}`}
									alt={movie.title}
									pb="1.3rem"
								/>
							</Link>
							<Text
								as="b"
							>
								{movie.title}
							</Text>
							<Text>
								Média: {movie.vote_average}
							</Text>
						</Box>
					))}
			</Grid>
		</Box>
	);
};

export default Search;
