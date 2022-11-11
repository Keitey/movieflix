import React from "react";
import { Button } from "@chakra-ui/react";

interface Ibtn {
	text: string;
	icon: JSX.Element;
}
const StyleButton=({ text, icon }: Ibtn) => (
	<Button
		background="#f31734"
		css={{
			":hover":{
				background: "#930e1f",
			},
		}}
	>
		{icon}
		{text}
	</Button>
);

export default StyleButton;