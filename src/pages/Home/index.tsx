import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { APIKey } from "../../configKey/key";

import { Circles } from 'react-loader-spinner'

import * as C from "./styles";

const Home = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  if (movies.length === 0) {
    return (
      <div className="loading">
        <Circles color="#f31734"/>
      </div>
    )
  }

  return (
    <C.Container>
      <h1>Filmes Populares</h1>
      <C.MovieList>
        {movies.map((movie) => {
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

export default Home;
