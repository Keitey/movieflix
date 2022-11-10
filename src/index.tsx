import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from "./pages/Search";
import Erro from "./pages/Erro";
import Navbar from "./components/Header/Header";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: "#1b1616",
				color: "#fff",
			},
		},
	},
});

root.render(
	<ChakraProvider theme={theme}>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details/:id" element={<Details />} />
				<Route path="/search" element={<Search />} />
				<Route path="*" element={<Erro />} />
			</Routes>
		</BrowserRouter>
	</ChakraProvider>,
);
