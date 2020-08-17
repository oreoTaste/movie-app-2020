import React from "react";
import "./App.css";
import axios from "axios";
import Movie from "./components/Movie";

class App extends React.Component {
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
    console.log(movies);
    this.setState({ isLoading: false, movies });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    console.log(isLoading, movies);
    return (
      <div className="container">
        {isLoading ? (
          <div>Loading...</div>
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

export default App;
