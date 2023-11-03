import { combineReducers } from "redux";
import authLoginSlice from "./auth/authLoginSlice";
import authRatingSlice from "./rating/authRatingSlice";
import movieReducer from "./movie/movieSlice";

//combine reducer merupakan tempat set up reducer yang digunakan dalma aplikasi
const rootReducer = combineReducers({
    auth : authLoginSlice,
    movie : movieReducer,
    rating : authRatingSlice,
})
export default rootReducer;