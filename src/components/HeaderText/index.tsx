import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const TextHeader = () => (
	<Flex
		color="#fff"
		css={{
			":hover":{
				color: "#930e1f",
			},
		}}
		align="center"
		transition="all 0.5s"
	>
		<Heading
			as="h6"
			fontSize="25px"
		>
			IDEUM
		</Heading>
	</Flex>
);

export default TextHeader;
