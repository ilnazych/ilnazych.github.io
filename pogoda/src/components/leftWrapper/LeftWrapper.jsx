import { Buttons } from "../buttons/Buttons";
import { DetailsTab } from "../detailsTab/DetailsTab";
import { ForecastTab } from "../forecastTab/ForecastTab";
import { NowTab } from "../nowTab/NowTab";

export function LeftWrapper({ forecastData, favoriteCities, setFavoriteCities, addCity }) {
    return (
        <div className="wrapper-left">
            <NowTab favoriteCities={favoriteCities} setFavoriteCities={setFavoriteCities} addCity={addCity} />
            <DetailsTab />
            <ForecastTab forecastData={forecastData} />
            <div className="buttons">
                <Buttons href="#now" className="btn btn-active" title="Now" />
                <Buttons href="#details" title="Details" />
                <Buttons href="#forecast" title="Forecast" />
            </div>
        </div>
    )
}