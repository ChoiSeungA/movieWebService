//https://nomadcoders.co/react-fundamentals/lobby
import React from 'react';
import axios from "axios";
import PropTypes from "prop-types";
import Movie from './Movie';
import "./App.css"

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
    // 미래에 사용할 변수를 굳이 처음부터 여기에 선언할 필요는 없음!
  };

  getMovies = async () => {
    // async, await 너는 이거 끝날때까지 기다려야해
    // const movies = await axios.get("https://yts-proxy.now.sh/list_moives.json");
    // console.log(movies.data.data.movies);
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({movies: movies, isLoading:false});
  };

  async componentDidMount(){
    // axios는 시간이 좀 걸림, 끝나는거 기다려야해!! = async or function
    this.getMovies();
  };

  render(){
    const { isLoading, movies } = this.state;
    return (
    <section className="container">
      {isLoading ? 
      (
        <div className="loader">
          <span className="loader_text">Loading...</span>
        </div>
      ): 
      (
        <div className="movies">
          {movies.map(movie => {
            return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image } genres={movie.genres} />
          })}
        </div>
      )
      }</section>
    )
  }
}

export default App;
