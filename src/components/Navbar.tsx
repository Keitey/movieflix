import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { RiMovie2Fill } from "react-icons/ri";
import { GoSearch } from "react-icons/go";


const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.ChangeEvent<any>): void => {
    e.preventDefault();
    
    setSearch(e.target.value);
    setTimeout(() => {
      if (!search) return;
      navigate(`/search?q=${search}`);
      setSearch("");
    }, 2000);
  };

  return (
    <C.Nav>
      <Link to="/">
        <h1>
          <RiMovie2Fill size={40} />
          Movie Flix
        </h1>
      </Link>
      <C.SearchMovie>
        <form>
          <input
            type="search"
            name="movie"
            id="movie"
            placeholder="Buscar filme..."
            onChange={handleSubmit}
            value={search}
          />
          <button>
            <GoSearch />
          </button>
        </form>
      </C.SearchMovie>
    </C.Nav>
  );
};

export default Navbar;
