import { Link, useNavigate } from "react-router-dom";
import React,{ useState } from "react";
import { Box, Text, Input, IconButton } from "@chakra-ui/react";
import { RiMovie2Fill } from "react-icons/ri";
import { GoSearch } from "react-icons/go";

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
		<Box
			display="flex"
			justifyContent={{
				base: "center",
				md: "space-around",
			}}
			p="0.8rem 1rem"
			w="100%"
			flexWrap="wrap"
		>
			<Link to="/">
				<Text
					display="flex"
					alignItems="center"
					justifyContent="center"
					color="#f31734"
					fontSize="4xl"
					as="b"
				>
					<RiMovie2Fill size={40} />
					Movie Flix
				</Text>
			</Link>
			<Box
				display="flex"
				gap="2"
				p="9.5"
			>
				<Input
					placeholder="Buscar filme..."
					onChange={handleSubmit}
					value={search}
					border="1px solid"
					isInvalid
					borderColor="#f31734"
					focusBorderColor="#f31734"
					borderRadius="8px"
					w="280px"
				/>
				<IconButton
					color="#fff"
					css={{
						":hover":{
							background: "#fff",
							color: "#f31734",
						},
					}}
					background="#f31734"
					icon={<GoSearch />}
					aria-label=""
				/>
			</Box>
		</Box>
	);
};

export default Navbar;
