import { useContext } from "react";
import { Detail } from "./Detail";
import { NowDataContext } from "../helper/element";
export function DetailsTab() {
    const nowData = useContext(NowDataContext);
    if (nowData) {
        const city = nowData.name;
        const temperature = Math.round(nowData.main.temp - 273.15);
        const feels = Math.round(nowData.main.feels_like - 273.15);
        const weather = nowData.weather[0].main;
        const sunrise = new Date(nowData.sys.sunrise * 1000);
        const sunset = new Date(nowData.sys.sunset * 1000);
        return (
            <div className="details tabs" id="details">
                <p className="details-title">{city}</p>
                <div className="details-info">
                    <Detail title="Temperature:" value={temperature} />
                    <Detail title="Feels like:" value={feels} />
                    <Detail title="Weather:" value={weather} />
                    <Detail title="Sunrise:" value={`${sunrise.getHours()}:${sunrise.getMinutes()}`} />
                    <Detail title="Sunset:" value={`${sunset.getHours()}:${sunset.getMinutes()}`} />
                </div>
            </div>
        )
    }
}