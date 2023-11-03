import { combineReducers } from "redux";
import authLoginSlice from "./auth/authLoginSlice";
import movieReducer from "./movie/movieSlice";
import moviesDetail from "./movie/movieDetail";

//combine reducer merupakan tempat set up reducer yang digunakan dalma aplikasi
const rootReducer = combineReducers({
    auth : authLoginSlice,
    movie : movieReducer,
    detail : moviesDetail,
})
export default rootReducer;