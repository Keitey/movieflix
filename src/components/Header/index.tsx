import { Link, useNavigate } from "react-router-dom";
import React,{ useState } from "react";
import { Flex, Input } from "@chakra-ui/react";
import TextHeader from "../HeaderText";
import { GoSearch } from "react-icons/go";
import StyleButton from "../Button";

const Header: React.FC = () => {
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e: React.ChangeEvent<any>): any => {
		e.preventDefault();
		setSearch(e.target.value);
	};

	setTimeout(() => {
		if (!search) {
			return;
		}
		navigate(`/search?q=${search}`);
		setSearch("");
	}, 2000);

	return (
		<Flex
			justifyContent={{
				base: "center",
				md: "space-between",
			}}
			p="0.8rem 1rem"
			flexWrap="wrap"
			align="center"
			bg="#1b1616"
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
					value={search}
					variant="unstyled"
					onChange={handleSubmit}
				/>
				<StyleButton text="" icon={<GoSearch size={28} color="#fff" />} />
			</Flex>
		</Flex>
	);
};

export default Header;
