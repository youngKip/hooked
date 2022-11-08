import React, { useReducer, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Movie from "./Movie";
import Search from './Search';

const MOVIE_API_URL = `https://www.omdbapi.com/?s=movies&apikey=2c4ac9e7`;

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};




const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {

    axios.get(MOVIE_API_URL)
      .then(response => response.data)
      .then(jsonResponse => {

        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search
        });
      });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.data)
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;

  return (
    <div className=" box-border m-0 p-2">
      <Header text="HOOKED" />
      <Search search={search} />
      <p className=" text-lg font-[600] mb-5 text-center">Sharing a few of our favourite movies</p>
      <div className=" flex flex-wrap gap-3 ">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie) => (
            <Movie key={movie.Id} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
