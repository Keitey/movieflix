import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetail } from "../../api";
import * as C from "./styles";

const Details: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>({});
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function fetchData() {
      const data = await getMovieDetail(id);
      const movie = {
        id,
        title: data.title,
        sinopse: data.overview,
        image: `${imageUrl}${data.poster_path}`,
        release: data.release,
      };
      setMovie(movie);
    }
    fetchData();
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
