import { combineReducers } from "redux";
import { currentCityReducer } from "./currentCity.js";
import { favoriteCitiesReducer } from "./favoriteCities.js";
export const rootReducer = combineReducers({
    currentCityReducer, favoriteCitiesReducer
})