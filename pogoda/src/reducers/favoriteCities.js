import { storage } from "../components/helper/storage";
const dafaultFavoriteCity = storage.getFavoriteCities();
export const favoriteCitiesReducer = (state = dafaultFavoriteCity, action) => {
    switch (action.type) {
        case "ADD_FAVORITE_CITY":
            return [...state, { name: action.payload }]
        case "DELETE_FAVORITE_CITY":
            return state.filter((item) => item.name !== action.payload)
        default:
            return state;
    }
}