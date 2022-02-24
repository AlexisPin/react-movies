import axios from "axios";
import React, { useEffect, useState } from "react";
import apiConfig from "../api/apiConfig";
import Card from "./Card";

const Form = () => {
  const [query, setQuery] = useState("marvel");
  const [movies, setMovies] = useState([]);
  const [sortType, setSortType] = useState("");
  useEffect(() => {
    axios
      .get(
        `${apiConfig.base}search/movie?api_key=${apiConfig.key}&query=${query}&language=fr-FR`
      )
      .then((res) => setMovies(res.data.results));
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const sortBadToGood = () => {
    setSortType("badToGood");
  };
  const sortGoodToBad = () => {
    setSortType("goodToBad");
  };

  return (
    <div className="form-component">
      <div className="form-container">
        <form action="">
          <input
            type="text"
            placeholder="Saisir le titre d'un film"
            id="search-input"
            onChange={handleChange}
          />
          <input type="submit" value="Rechercher" />
        </form>
        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad" onClick={sortGoodToBad}>
            Top<span>➙</span>
          </div>
          <div className="btn-sort" id="badToGood" onClick={sortBadToGood}>
            Flop<span>➙</span>
          </div>
        </div>
      </div>
      <div className="result">
        {movies
          .sort((a, b) => {
            if (sortType == "goodToBad") {
              return b.vote_average - a.vote_average;
            } else if (sortType == "badToGood") {
              return a.vote_average - b.vote_average;
            }
          })
          .map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
};

export default Form;
