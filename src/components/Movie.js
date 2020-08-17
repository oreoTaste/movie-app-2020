import React from "react";
import "./Movie.css";
import { Router, Link } from "react-router-dom";

export default function Movie({
  id,
  title,
  year,
  rating,
  large_cover_image,
  runtime,
  summary,
  language,
}) {
  return (
    <div className="movie">
      <div className="movie_top">
        <img className="movie_image" src={large_cover_image} alt={title} />
      </div>
      <div className="movie_content">
        <ul>
          <li className="movie_title">
            [{title} ({year})]
          </li>
          <li>
            <span className="movie_rating">
              Rating : {Math.round(rating)} / 10
            </span>
          </li>
          <li>
            <span className="movie_runtime">Runtime : {runtime} min.</span>
          </li>
          <li>
            <span className="movie_language">Language : {language}</span>
          </li>
          <li>
            <span className="movie_summary">
              Summary : {summary.slice(0, 120)}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
