import { Link } from "react-router-dom";
import * as C from "./styles";
import React from "react";

const Erro = () => (
	<C.Error>
		<h1>404</h1>
		<h2>Página não localizada</h2>
		<Link to='/'>Voltar para página principal</Link>
	</C.Error>
);

export default Erro;
