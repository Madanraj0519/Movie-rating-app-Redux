import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import movieApi from '../../common/apis/MovieApi';
import {APIKey} from "../../common/apis/MovieApiKey"


export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async(term) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`);
        return response.data
    }
)

export const fetchAsyncShows = createAsyncThunk(
    "shows/fetchAsyncMovies",
    async(term) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`);
        return response.data
    }
)

export const fetchAsyncEpisodes = createAsyncThunk(
    "episodes/fetchAsyncEpisodes",
    async(term) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=episode`);
        return response.data
    }
)

export const fetchAsyncDetail = createAsyncThunk(
    "movies/fetchAsyncDetail",
    async(id) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
        return response.data
    }
)

const initialState = {
    movies:{},
    shows:{},
    episodes:{},
    details: {},
}

const movieSlice = createSlice({
    name: 'Movies',
    initialState,
    reducers:{
        addMovies: (state, {payload}) => {
            state.movies = payload;
        },
        removeSelectedDetail:(state) => {
            state.details = {};
        },
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:() =>{
            console.log("Movies pending")
        },
        [fetchAsyncMovies.fulfilled]:(state, {payload}) => {
            console.log("Fetched successfully");
            return {...state,movies: payload}
        },
        [fetchAsyncMovies.rejected]:() => {
            console.log("Rejected")
        },
        [fetchAsyncShows.fulfilled]:(state, {payload}) => {
            console.log("Fetched successfully");
            return {...state,shows: payload}
        },
        [fetchAsyncDetail.fulfilled]:(state, {payload}) => {
            console.log("detail Fetched successfully");
            return {...state,details: payload}
        },
        [fetchAsyncEpisodes.fulfilled]:(state, {payload}) => {
            console.log("Episode Fetched successfully");
            return {...state,episodes: payload}
        },
    }
})



export const { removeSelectedDetail } = movieSlice.actions;
export default movieSlice.reducer;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getAllEpisodes = (state) => state.movies.episodes
export const getAllDetail = (state) => state.movies.details