import React from "react";
import { Flex } from "@chakra-ui/react";

const TextHeader = () => (
	<Flex
		color="#fff"
		css={{
			":hover":{
				color: "#930e1f",
			},
		}}
		fontSize="3xl"
		as="b"
		align="center"
		transition="all 0.5s"
	>
		MovieFlix
	</Flex>
);

export default TextHeader;
