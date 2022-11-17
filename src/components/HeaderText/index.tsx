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
		fontSize="2xl"
		as="b"
		align="center"
		transition="all 0.5s"
	>
		IDEUM
	</Flex>
);

export default TextHeader;
