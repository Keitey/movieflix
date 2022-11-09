import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import React,{ useState } from "react";
import { Box, Text } from "@chakra-ui/react";
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
		<Box display="flex" justifyContent="space-around">
			<Link to="/">
				<Text display="flex"
					alignItems="center"
					justifyContent="center"
					color="#f31734"
					fontSize="4xl"
				>
					<RiMovie2Fill size={40} />
					Movie Flix
				</Text>
			</Link>
			<C.SearchMovie>
				<form>
					<input
						type="search"
						name="movie"
						id="movie"
						placeholder="Buscar filme..."
						onChange={handleSubmit}
						value={search}
					/>
					<button>
						<GoSearch />
					</button>
				</form>
			</C.SearchMovie>
		</Box>
	);
};

export default Navbar;
