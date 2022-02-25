import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import apiConfig from "../api/apiConfig";
import Card from "../components/Card";
import Header from "../components/Header";
import FavoritesContext from "../store/favoritesMovies";

const FavList = () => {
  const favoritesCtx = useContext(FavoritesContext);
  const [favoritesMovies, setFavoritesMovies] = useState([]);
  useEffect(() => {
    let moviesId = favoritesCtx.favorites;
    setFavoritesMovies([]);

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `${apiConfig.base}movie/${moviesId[i]}?api_key=${apiConfig.key}&language=fr-FR`
        )
        .then((res) =>
          setFavoritesMovies((favoritesMovies) => [
            ...favoritesMovies,
            res.data,
          ])
        );
    }
  }, [favoritesCtx.favorites]);

  return (
    <div className="user-list-page">
      <Header />
      <h2>{favoritesMovies.length > 1 ? "Favoris" : "Favori"}</h2>
      <div className="result">
        {favoritesMovies.length > 0 ? (
          favoritesMovies.map((movie, index) => (
            <Card movie={movie} key={index} />
          ))
        ) : (
          <h2>Vous n'avez pas de films ajoutés aux favoris</h2>
        )}
      </div>
    </div>
  );
};

export default FavList;
