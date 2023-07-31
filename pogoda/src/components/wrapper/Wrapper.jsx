import { LeftWrapper } from "../leftWrapper/LeftWrapper";
import { RightWrapper } from "../rightWrapper/RightWrapper";
import { useEffect, useState } from "react";
import { storage } from "../helper/storage.js";
export function Wrapper({ forecastData, setCurrentCity }) {
    const list = storage.getFavoriteCities();
    const [favoriteCities, setFavoriteCities] = useState(list ? list : []);
    useEffect(() => {

        storage.saveFavoriteCities(favoriteCities);
    }, [favoriteCities]);
    return (
        <div className="wrapper">
            <LeftWrapper forecastData={forecastData} favoriteCities={favoriteCities} setFavoriteCities={setFavoriteCities} />
            <RightWrapper setCurrentCity={setCurrentCity} />
        </div>
    )
}