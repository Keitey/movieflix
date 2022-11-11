import React from "react";
import { Flex } from "@chakra-ui/react";
import { RiMovie2Fill } from "react-icons/ri";

const TextHeader = () => (
	<Flex
		color="#f31734"
		css={{
			":hover":{
				color: "#930e1f",
			},
		}}
		fontSize="4xl"
		as="b"
		align="center"
		transition="all 0.5s"
	>
		<RiMovie2Fill size={40} />
		Movie Flix
	</Flex>
);

export default TextHeader;
