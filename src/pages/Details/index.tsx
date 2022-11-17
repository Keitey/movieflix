import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Store } from "./store";
import { Box, Text, Image, ButtonGroup, Flex, ListItem, List } from "@chakra-ui/react";
import { Circles } from "react-loader-spinner";
import { BsPlay } from "react-icons/bs";
import StyleButton from "../../components/Button";
import { IGenre } from "../../types";

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
						md: 20,
					}}
					direction={{
						base: "column",
						md: "row",
					}}
					gap="2.2rem"
				>
					<Box>
						<Text
							color="#930e1f"
							as="b"
							fontSize="2xl"
						>
							⭐ {store.fetchShelf.fetchedModel.vote_average.toFixed(1)}
						</Text>
						<Flex
							align="center"
							gap="1rem"
						>
							<Text
								fontSize="30px"
								p="1rem 0"
								as="b"
							>
								{store.fetchShelf.fetchedModel.title}
							</Text>
							<Text
								fontSize="33px"
								color="#999090"
								as="b"
							>
								{store.fetchShelf.fetchedModel.release_date.substring(0,4)}
							</Text>
						</Flex>
						<Box>
							<List
								display="flex"
								gap="1rem"
								pb="2rem"
							>
								{store.fetchShelf.fetchedModel.genres.map((genre: IGenre)=> <ListItem key={genre.id} textTransform="uppercase">{genre.name}</ListItem>)}
							</List>
						</Box>
						<Text
							textAlign="justify"
							maxWidth="550px"
							pb="2rem"
						>
							Sinopse: {store.fetchShelf.fetchedModel.overview}
						</Text>
						<ButtonGroup
							pt="1rem"
						>
							<Box
								border="1px solid #ccc"
								borderRadius="8px"
							>
								<a
									target="blank"
									href={`https://www.youtube.com/results?search_query=${store.fetchShelf.fetchedModel.title}`}
								>
									<StyleButton text="TRAILER" icon={<BsPlay style={{marginRight: "4px"}} />} />
								</a>
							</Box>
						</ButtonGroup>
					</Box>
					<Image
						width="390px"
						src={`${image_path}${store.fetchShelf.fetchedModel.poster_path}`}
						alt={store.fetchShelf.fetchedModel.title}
					/>
				</Flex>
			)}
		</Box>
	);
};

export default observer(Details);
