import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import { observer, useLocalObservable } from 'mobx-react-lite'
import { Store } from "./store";
import * as C from "./styles";


const Home: React.FC = () => {
  const store = useLocalObservable(() => new Store());
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    store.moviesShelf.fetchPage(0)
  }, [store]);

  if (store.moviesShelf.items.length === 0) {
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
        {store.moviesShelf.items.map((movie) => {
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

export default observer(Home);
