import axios from "axios";
import React, { useEffect, useState } from "react";
import apiConfig from "../api/apiConfig";
import Card from "../components/Card";
import Header from "../components/Header";

const FavList = () => {
  const [favoritesMovies, setFavoritesMovies] = useState([]);
  useEffect(() => {
    let moviesID = localStorage.movies ? localStorage.movies.split(",") : [];

    for (let i = 0; i < moviesID.length; i++) {
      axios
        .get(
          `${apiConfig.base}movie/${moviesID[i]}?api_key=${apiConfig.key}&language=fr-FR`
        )
        .then((res) =>
          setFavoritesMovies((favoritesMovies) => [
            ...favoritesMovies,
            res.data,
          ])
        );
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>Favories</h2>
      <div className="result">
        {favoritesMovies.length > 0 ? (
          favoritesMovies.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>Vous n'avez pas de films ajoutés aux favories</h2>
        )}
      </div>
    </div>
  );
};

export default FavList;
