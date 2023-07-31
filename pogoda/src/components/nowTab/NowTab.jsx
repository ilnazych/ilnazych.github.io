import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../helper/storage";
import { NowDataContext } from "../helper/element";
export function NowTab() {
    const nowData = useContext(NowDataContext);
    const dispatch = useDispatch();
    const list = useSelector(state => state.favoriteCitiesReducer);
    if (nowData) {
        const city = nowData.name;
        const temp = Math.round(nowData.main.temp - 273.15);
        const img = nowData.weather[0].icon;
        const addCity = () => {
            let index = list.findIndex(
                (item) => item.name === city
            );
            if (index === -1) {
                dispatch({ type: "ADD_FAVORITE_CITY", payload: city })
                return;
            }
            return dispatch({ type: "DELETE_FAVORITE_CITY", payload: city })
        }
        storage.saveFavoriteCities(list);
        return (
            <div className="now tabs" id="now">
                <h2 className="info-degree">{temp}</h2>
                <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} className="info-img" />
                <footer className="info-footer">
                    <p className="city-name">{city}</p>
                    <img src="img/heart.svg" alt="" className="info-footer__img" onClick={addCity} />
                </footer>
            </div>
        )
    }
}