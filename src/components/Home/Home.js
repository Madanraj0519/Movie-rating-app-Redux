import React, { useEffect } from 'react'
// import MovieDetails from '../MovieDetails/MovieDetails'
import MovieListing from "../MovieListing/MovieListing";
import { fetchAsyncMovies, fetchAsyncShows, fetchAsyncEpisodes } from '../../features/Movies/movieSlice';
import { useDispatch } from 'react-redux';


const Home = () => {


  const dispatch = useDispatch();
  const movieText = "friends"
  const seriesText = "friends"
  const episodeText = "friends"

  useEffect( () =>{
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(seriesText));
    dispatch(fetchAsyncEpisodes(episodeText));
    }
,[dispatch])
  return (
    <div>
     <div className='banner-img'></div>
     <MovieListing />
    </div>
  )
}

export default Home