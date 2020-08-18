import React from "react";
import "./Detail.css";

export default function Detail({
  location: {
    state: {
      id,
      language,
      large_cover_image,
      rating,
      runtime,
      summary,
      title,
      year,
    },
  },
}) {
  return (
    <div className="detail">
      <img className="image" src={large_cover_image} alt={title} />
      <p>
        <strong>
          {title} ({year})
        </strong>
      </p>
      <p>Runtime: {runtime}</p>
      <p>Rating: {Math.round(rating)} / 10</p>
      <p>Language: {language}</p>
      <p>{summary}</p>
    </div>
  );
}
