import { useContext } from "react";
import { NowDataContext } from "../helper/element";
import { ForecastCard } from "../forecastCard/ForecastCard";
export function ForecastTab({ forecastData }) {
    const nowData = useContext(NowDataContext);
    if (forecastData) {
        const dates = forecastData.list;
        return (
            <div className="forecast tabs" id="forecast">
                <p className="forecast-title">{forecastData.city.name}</p>
                <div className="forecast__card_list">
                    {dates && dates.map(date => (
                        <ForecastCard date={date} key={date.dt} />
                    ))}
                </div>
            </div>
        )
    }
}