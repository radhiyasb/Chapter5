import { getSearch } from "../../../services/data-movie/get-data-search-movie";
import { searchMovie } from "../../reducers/movie/movieSearch";

export const getActSearch = () => async (dispatch)=> {
    return getSearch()
    .then((response) => {
        const movie = response.data.data;
        dispatch(searchMovie(movie));
    })
    .catch((err) => {});
}