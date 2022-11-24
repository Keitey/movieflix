import { Link } from "react-router-dom";
import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

const Erro = () => (
	<Box
		bg="#1b1616"
		height="100vh"
	>
		<Flex
			alignItems="center"
			justifyContent="center"
			flexDirection="column"
		>
			<Text
				fontSize="130px"
				textAlign="center"
				pt="3rem"
			>
				404
			</Text>
			<Text
				fontSize="50px"
				textAlign="center"
			>
				Página não localizada
			</Text>
			<Box
				color="#f31734"
				pt="2rem"
				fontSize="20px"
			>
				<Link to='/'>
					Voltar para página principal
				</Link>
			</Box>
		</Flex>
	</Box>
);

export default Erro;
