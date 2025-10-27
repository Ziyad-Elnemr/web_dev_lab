import React, { useState } from "react";
import Display from "./display";

const Movie = () => {
  const [state, setState] = useState([
    { id: 1, title: "Inception", year: 2010, rating: "", comments: [] },
    { id: 2, title: "The Dark Knight", year: 2008, rating: "", comments: [] },
    { id: 3, title: "Interstellar", year: 2014, rating: "", comments: [] },
    { id: 4, title: "Parasite", year: 2019, rating: "", comments: [] },
    {
      id: 5,
      title: "The Shawshank Redemption",
      year: 1994,
      rating: "",
      comments: [],
    },
  ]);

  function add_movie() {
    const id = parseInt(prompt("Enter movie ID:"));

    const title = prompt("Enter movie Title:");
    const year = parseInt(prompt("Enter movie Year:"));
    const rating = prompt("Enter movie Rating:");
    const comments = [];
    setState([...state, { id, title, year, rating, comments }]);
  }

  function remove_movie(id) {
    setState(state.filter((m) => m.id !== id));
  }

  function add_rating([id, rating]) {
    setState(state.map((m) => (m.id === id ? { ...m, rating } : m)));
  }
  function add_comments([id, comment]) {
    setState(
      state.map((m) =>
        m.id === id ? { ...m, comments: [...m.comments, comment] } : m
      )
    );
  }

  return (
    <>
      <h1 className="section-title">Add Movie</h1>
      <button className="btn btn-primary add-movie-btn" onClick={add_movie}>
        Add Movie
      </button>
      <h1 className="section-title">Movie List</h1>
      <div className="movie-list">
        {state.map((m) => (
          <Display
            key={m.id}
            {...m}
            onRemove={() => remove_movie(m.id)}
            onAddRating={() => add_rating([m.id, prompt("Enter new rating:")])}
            onCommenting={() =>
              add_comments([m.id, prompt("Enter new comment:")])
            }
          />
        ))}
      </div>
    </>
  );
};

export default Movie;
