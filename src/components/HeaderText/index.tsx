import React from "react";
import { Flex } from "@chakra-ui/react";
import { RiMovie2Fill } from "react-icons/ri";

const TextHeader = () => (
	<Flex
		color="#f31734"
		fontSize="4xl"
		as="b"
		align="center"
	>
		<RiMovie2Fill size={40} />
		Movie Flix
	</Flex>
);

export default TextHeader;
