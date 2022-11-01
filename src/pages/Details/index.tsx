import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { APIKey } from "../../configKey/key";

import * as C from "./styles";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>({});
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKey}&language=pt-BR&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const { title, overview, poster_path, release_date } = data;
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${imageUrl}${poster_path}`, 
          release: release_date,
        };
        setMovie(movie);
      })
  }, [id]);

  return (
    <C.Container>
      <div className="movie">
        <img src={movie.image} alt={movie.title} />
        <div className="details">
          <h2>{movie.title}</h2>
          <span>Sinopse: {movie.sinopse}</span>
          <span className="release">Data de Lançamento: {movie.release}</span>
          <div className="buttons">
            <Link to="/">
              <button>Voltar</button>
            </Link>
            <a
              target="blank"
              href={`https://www.youtube.com/results?search_query=${movie.title}`}
            >
              <button>Trailer</button>
            </a>
          </div>
        </div>
      </div>
    </C.Container>
  );
};



export default Details;
