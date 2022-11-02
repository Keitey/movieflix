import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { APIKey } from "../../configKey/key";

import { Circles } from "react-loader-spinner";
import axios from "axios";
import * as C from "./styles";

interface HomeItems {
  id: number;
  image_path: string;
  poster_path: string;
  title: string;
  vote_average: number;
}

const Home = () => {
  const [movies, setMovies] = useState<HomeItems[]>([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=pt-BR`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, []);

  if (movies.length === 0) {
    return (
      <div className="loading">
        <Circles color="#f31734" />
      </div>
    );
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
