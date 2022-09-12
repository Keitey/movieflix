import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from "./pages/Search";
import Erro from "./pages/Erro";
import Navbar from "./components/Navbar";
import Global from "./global";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details/>} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<Erro />} />
    </Routes>
    <Global />
  </BrowserRouter>
);
