import React from "react";
import "./Detail.css";

class Detail extends React.Component {

  componentDidMount() {
    const { location, history } = this.props;
    if(location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location: {state} } = this.props;
    if(state) {
      return (
        <div className="movie_detail">
          <img src={state.poster}/>
          <h2>{state.title} ({state.year})</h2>
          <h4 className="movie_runtime">runtime : {state.runtime}min</h4>
          <h4 className="movie_language">language : {state.language}</h4>
          <ul>
            {state.genres.map((genre, index) => (
            <li key={index}>
              {genre}
            </li>
            ))}
          </ul>
          <br/>
          <span>{state.summary}</span>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;