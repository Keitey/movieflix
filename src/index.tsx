import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from "./pages/Search";
import Erro from "./pages/Erro";
import Header from "./components/Header";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/lato/300.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

const theme = extendTheme({
	styles: {
		global: {
			body: {
				color: "#fff",
				fontFamily: "'Lato', sans-serif",
				height: "100%",
			},
			html: {
				height: "100%",
			},
		},
	},
});

root.render(
	<ChakraProvider theme={theme}>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details/:id" element={<Details />} />
				<Route path="/search" element={<Search />} />
				<Route path="*" element={<Erro />} />
			</Routes>
		</BrowserRouter>
	</ChakraProvider>,
);
