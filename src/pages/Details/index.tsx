import { useParams, Link } from "react-router-dom";
import React, { useEffect } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Store } from "./store";
import { Box, Text, Image, ButtonGroup, Button } from "@chakra-ui/react";

const Details: React.FC = () => {
	const { id } = useParams();
	const store = useLocalObservable(() => new Store(id));
	const image_path = "https://image.tmdb.org/t/p/w500";

	useEffect(() => {
		store.fetchShelf.fetchModel();
	}, [store.fetchShelf]);

	return (
		<Box
			p="3"
		>
			{store.fetchShelf.loader.isLoading ? (
				<Text>
					carregando...
				</Text>
			) : !store.fetchShelf.hasModel ? (
				<Text>Movie not found 😥</Text>
			) : (
				<Box
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<Image
						boxSize="440px"
						borderRadius="1rem"
						src={`${image_path}${store.fetchShelf.fetchedModel.poster_path}`}
						alt={store.fetchShelf.fetchedModel.title}
					/>
					<Box
						display="flex"
						flexDirection="column"
						alignItems="flex-start"
						marginLeft="4rem"
						maxWidth="50%"
					>
						<Text
							fontSize="30px"
							pb="2rem"
						>
							{store.fetchShelf.fetchedModel.title}
						</Text>
						<Text
							textAlign="justify"
							lineHeight="160%"
						>
							Sinopse: {store.fetchShelf.fetchedModel.overview}
						</Text>
						<Text className="release">Data de Lançamento: {store.fetchShelf.fetchedModel.release_date}</Text>
						<ButtonGroup
							pt="1rem"
						>
							<Link to="/">
								<Button
									background="#f31734"
									css={{
										":hover":{
											background: "#930e1f",
										},
									}}
								>
									Voltar
								</Button>
							</Link>
							<a
								target="blank"
								href={`https://www.youtube.com/results?search_query=${store.fetchShelf.fetchedModel.title}`}
							>
								<Button
									background="#f31734"
									css={{
										":hover":{
											background: "#930e1f",
										},
									}}
								>
									Trailer
								</Button>
							</a>
						</ButtonGroup>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default observer(Details);
