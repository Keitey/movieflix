import { Link, useNavigate } from "react-router-dom";
import React,{ useState } from "react";
import { Input, Flex } from "@chakra-ui/react";
import TextHeader from "../HeaderText";

const Navbar: React.FC = () => {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e: React.ChangeEvent<any>): any => {
		e.preventDefault();
		setSearch(e.target.value);
		setTimeout(() => {
			// eslint-disable-next-line curly
			if (!search) return;
			navigate(`/search?q=${search}`);
			setSearch("");
		}, 2000);
	};

	return (
		<Flex
			justifyContent={{
				base: "center",
				md: "space-around",
			}}
			p="0.8rem 1rem"
			flexWrap="wrap"
		>
			<Link to="/">
				<TextHeader />
			</Link>
			<Flex
				gap="2"
				p="9.5"
			>
				<Input
					placeholder="Buscar filme..."
					onChange={handleSubmit}
					value={search}
					borderColor="#f31734"
					isInvalid
					w="330px"
				/>
			</Flex>
		</Flex>
	);
};

export default Navbar;
