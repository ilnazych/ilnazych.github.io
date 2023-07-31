import { MONTH } from "../helper/element.js";
export function ForecastCard({ date }) {
    const dateText = new Date(date.dt * 1000);
    const number = dateText.getMonth();
    return (
        <div className="page_three__info__card">
            <img className="page_three__card__sign" src={`http://openweathermap.org/img/wn/${date.weather[0].icon}.png`}></img>
            <p className="page_three__time">{dateText.getHours()}:00</p>
            <p className="page_three__info__date">{dateText.getDate()} {MONTH[number]}</p>
            <p className="page_three__info__temperature">Temperature: {Math.round(
                date.main.temp - 273.15
            )}° Feels like: {Math.round(date.main.feels_like - 273.15)}°</p>
            <p className="page_three__weather">{date.weather[0].main}</p>
        </div>
    )
}