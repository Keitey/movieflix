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
		<h1>IDEUM</h1>
	</Flex>
);

export default TextHeader;
