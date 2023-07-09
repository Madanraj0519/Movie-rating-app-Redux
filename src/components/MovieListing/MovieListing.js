import React from 'react'
import Slider from 'react-slick'
import { Settings } from '../../common/Setting'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows, getAllEpisodes } from '../../features/Movies/movieSlice'
import {MovieCard} from "../MovieCard/MovieCard"
import "./MovieListing.scss";


const MovieListing = () => {

  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const episodes = useSelector(getAllEpisodes);

  let renderMovies, renderShows, renderEpisodes = "";

  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className='movies-error'>
      <h3>{movies.Error}</h3>
    </div>
  )


  renderShows = shows.Response === "True" ? (
    shows.Search.map((show, index) => (
      <MovieCard key={index} data={show} />
    ))
  ) : (
    <div className='movies-error'>
      <h3>{shows.Error}</h3>
    </div>
  )

  renderEpisodes = episodes.Response === "True" ? (
    episodes.Search.map((episode, index) => (
      <MovieCard key={index} data={episode} />
    ))
  ) : (
    <div className='movies-error'>
      <h3>{episodes.Error}</h3>
    </div>
  )
  

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          <Slider {...Settings}>
          {renderMovies}
          </Slider>
        </div>
      </div>

      <div className='show-list'>
        <h2>Shows</h2>
        <div className='movie-container'>
        <Slider {...Settings}>
          {renderShows}
          </Slider>
        </div>
      </div>

      <div className='show-list'>
        <h2>Episodes</h2>
        <div className='movie-container'>
        <Slider {...Settings}>
          {renderEpisodes}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default MovieListing