import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavList from "./pages/FavList";
import Home from "./pages/Home";
import FavoritesContext from "./store/favoritesMovies";

function App() {
  const favoritesCtx = useContext(FavoritesContext);

  useEffect(() => {
    let favoriteMovieId = localStorage.movies
      ? localStorage.movies.split(",").map((item) => parseInt(item, 10))
      : [];
    favoriteMovieId.map((movieId) => favoritesCtx.addFavorite(movieId));
    favoritesCtx.totalFavorites = favoritesCtx.favorites.length;
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
