import { useParams, Link } from "react-router-dom";
import React, { useEffect } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Store } from "./store";
import { Box, Text, Image, ButtonGroup, Flex } from "@chakra-ui/react";
import StyleButton from "../../components/Button";

const Details: React.FC = () => {
	const { id } = useParams();
	const store = useLocalObservable(() => new Store(id));
	const image_path = "https://image.tmdb.org/t/p/w500";

	useEffect(() => {
		store.fetchShelf.fetchModel();
	}, [store.fetchShelf]);

	return (
		<Box
			display="flex"
		>
			{store.fetchShelf.loader.isLoading ? (
				<Text
					textAlign="center"
				>
					carregando...
				</Text>
			) : !store.fetchShelf.hasModel ? (
				<Text
					textAlign="center"
				>
					Movie not found 😥
				</Text>
			) : (
				<Flex
					p={{
						base: 4,
						md: 14,
					}}
					direction={{
						base: "column",
						md: "row",
					}}
					align="center"
					gap="3rem"
					m="1rem 3rem"
				>
					<Image
						boxSize="440px"
						borderRadius="1rem"
						src={`${image_path}${store.fetchShelf.fetchedModel.poster_path}`}
						alt={store.fetchShelf.fetchedModel.title}
					/>
					<Box>
						<Text
							fontSize="30px"
							pb="1rem"
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
								<StyleButton text="Voltar" />
							</Link>
							<a
								target="blank"
								href={`https://www.youtube.com/results?search_query=${store.fetchShelf.fetchedModel.title}`}
							>
								<StyleButton text="Trailer" />
							</a>
						</ButtonGroup>
					</Box>
				</Flex>
			)}
		</Box>
	);
};

export default observer(Details);
