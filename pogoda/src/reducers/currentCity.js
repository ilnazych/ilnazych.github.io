import { storage } from "../components/helper/storage";
const dafaultCurrentCity = storage.getCurrentCity();
export const currentCityReducer = (state = dafaultCurrentCity, action) => {
    switch (action.type) {
        case "CURRENT_CITY":
            return action.payload;
        default:
            return state;
    }
}
