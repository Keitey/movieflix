import { useParams, Link } from "react-router-dom";
import React, { useEffect } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Store } from "./store";
import { Box, Text, Image, ButtonGroup, Flex } from "@chakra-ui/react";
import { Circles } from "react-loader-spinner";
import { ImBackward } from "react-icons/im";
import { BiMoviePlay } from "react-icons/bi";
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
				<Flex
					m="auto"
					align="center"
					justify="center"
				>
					<Circles color="#f31734" />
				</Flex>
			) : !store.fetchShelf.hasModel ? (
				<Flex
					justify="center"
				>
					Movie not found 😥
				</Flex>
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
					gap="3rem"
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
								<StyleButton text="Voltar" icon={<ImBackward style={{marginRight: "4px"}} />} />
							</Link>
							<a
								target="blank"
								href={`https://www.youtube.com/results?search_query=${store.fetchShelf.fetchedModel.title}`}
							>
								<StyleButton text="Trailer" icon={<BiMoviePlay style={{marginRight: "4px"}} />} />
							</a>
						</ButtonGroup>
					</Box>
				</Flex>
			)}
		</Box>
	);
};

export default observer(Details);
