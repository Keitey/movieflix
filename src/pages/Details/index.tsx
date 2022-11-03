import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import * as C from "./styles";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Store } from "./store";

const Details: React.FC = () => {
  const store = useLocalObservable(() => new Store());
  const { id } = useParams();
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    store.fetch(id);
  }, [store, id]);

  return (
    <>
      <C.Container>
        <div className="movie">
          <img
            src={`${image_path}${store.movies?.poster_path}`}
            alt={store.movies?.title}
          />
          <div className="details">
            <h2>{store.movies?.title}</h2>
            <span>Sinopse: {store.movies?.overview}</span>
            <span className="release">Data de Lançamento: {store.movies?.release_date}</span>
            <div className="buttons">
              <Link to="/">
                <button>Voltar</button>
              </Link>
              <a
                target="blank"
                href={`https://www.youtube.com/results?search_query=$`}
              >
                <button>Trailer</button>
              </a>
            </div>
          </div>
        </div>
      </C.Container>
    </>
  );
};

export default observer(Details);
