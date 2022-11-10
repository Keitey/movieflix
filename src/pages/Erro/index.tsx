import { Link } from "react-router-dom";
import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Erro = () => (
	<Box
		display="flex"
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
	</Box>
);

export default Erro;
