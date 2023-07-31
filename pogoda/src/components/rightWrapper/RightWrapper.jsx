import { useDispatch, useSelector } from "react-redux";
import { storage } from "../helper/storage.js";
export function RightWrapper({ setCurrentCity }) {
    const dispatch = useDispatch();
    const favoriteCities = useSelector(state => state.favoriteCitiesReducer);
    function handleChange(event) {
        let cityName = event.target.textContent;
        dispatch({ type: "CURRENT_CITY", payload: cityName });
        storage.saveCurrentCity(cityName);
        setCurrentCity(cityName);
    }
    return (
        <div className="wrapper-right">
            <div className="wrapper-right__header">
                <p className="wrapper-right__title">Added Locations:</p>
            </div>
            <div className="city-select">
                <ul className="citys">
                    {favoriteCities && favoriteCities.map(city => (
                        <li className="city" key={city.name} onClick={handleChange} >{city.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}