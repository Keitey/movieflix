import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

import * as C from "./styles";

import { APIKey } from "../../configKey/key";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState<any[]>([]);
  const query = searchParams.get("q");
  const image_path = `https://image.tmdb.org/t/p/w500/`;

  useEffect(() => {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${query}`
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
    }, [query]);
      
  return (
    <C.Container>
      <C.MovieList>
        {movies.length === 0 ? <Link to="/">Filme não localizado.<br/>Voltar para a home</Link> : movies.map((movie) => {
          return (
            <C.Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`${image_path}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <span>{movie.title}</span>
              <span>Média: {movie.vote_average}</span>
            </C.Movie>
          );
        })}
      </C.MovieList>
    </C.Container>
  );
};

export default Search;
