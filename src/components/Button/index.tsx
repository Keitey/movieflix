import React from "react";
import { Button } from "@chakra-ui/react";

interface Ibtn {
	text: string;
}
const StyleButton=({ text }: Ibtn) => (
	<Button
		background="#f31734"
		css={{
			":hover":{
				background: "#930e1f",
			},
		}}
	>
		{text}
	</Button>
);

export default StyleButton;
