import { createSlice } from "@reduxjs/toolkit";

const movieSearch = createSlice({
    name: "Movie Search",
    initialState: {
        movies: [],
    },
    reducers: {
        searchMovie(state, action) {
            state.movies = action.payload;
        },
    },
});

const movieesearch = movieSearch.reducer;
const {searchMovie} = movieSearch.actions;

export {searchMovie};
export default movieesearch;