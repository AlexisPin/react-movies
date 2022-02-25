import React, { createContext, useEffect, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (movieId) => {},
  removeFavorite: (movieId) => {},
  movieIsFavorite: (movieId) => {},
});

export const FavoritesContextProvider = (props) => {
  const [favoritesMovies, setFavoritesMovies] = useState([]);

  const addFavoriteHandler = (movieId) => {
    setFavoritesMovies((prevFavoritesMovies) => {
      return [...prevFavoritesMovies, movieId];
    });
  };

  const removeFavoriteHandler = (movieId) => {
    setFavoritesMovies((prevFavoritesMovies) => {
      return prevFavoritesMovies.filter(
        (prevFavoritesMovie) => prevFavoritesMovie !== movieId
      );
    });
    console.log(favoritesMovies);
  };

  const movieIsFavoriteHandler = (movieId) => {
    return favoritesMovies.some((favoritesMovie) => favoritesMovie === movieId);
  };

  const context = {
    favorites: favoritesMovies,
    totalFavorites: favoritesMovies.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    movieIsFavorite: movieIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
