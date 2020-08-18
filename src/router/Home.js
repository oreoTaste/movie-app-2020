import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ isLoading: false, movies });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="container">
        {isLoading ? (
          <span className="loading">Loading...</span>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                rating={movie.rating}
                large_cover_image={movie.large_cover_image}
                runtime={movie.runtime}
                summary={movie.summary}
                language={movie.language}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
