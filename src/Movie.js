import React from "react";
import ProTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((gener, index) => (
            <li key={index} className="geners__genre">
              {gener}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.proTypes = {
  id: ProTypes.number.isRequired,
  year: ProTypes.number.isRequired,
  title: ProTypes.string.isRequired,
  summary: ProTypes.string.isRequired,
  poster: ProTypes.string.isRequired,
  genres: ProTypes.arrayOf(ProTypes.string).isRequired,
};

export default Movie;
