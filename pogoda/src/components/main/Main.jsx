import { useState, useEffect } from "react";
import { SearchForm } from "../searchForm/SearchForm";
import { Wrapper } from "../wrapper/Wrapper";
import { serverUrl, apiKey, NowDataContext } from "../helper/element.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
export function Main() {
    const [nowData, setNowData] = useState();
    const [forecastData, setForecastData] = useState();
    const currentCityName = useSelector(state => state.currentCityReducer);
    const [currentCity, setCurrentCity] = useState(currentCityName);
    function handleSubmit(event) {
        event.preventDefault();
    }
    async function searchCity() {
        let cityName = currentCity;
        const url = `${serverUrl}data/2.5/weather?q=${cityName}&appid=${apiKey}`;
        const forecastUrl = `${serverUrl}data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
        try {
            let response = await fetch(url);
            if (response.ok) {
                let data = await response.json();
                setNowData(data);
            }

        } catch (err) {
            alert(`Ошибка ${err.message}`);
        }
        try {
            let response = await fetch(forecastUrl);
            if (response.ok) {
                let data = await response.json();
                setForecastData(data);
            }
        } catch (err) {
            alert(`Ошибка ${err.message}`);
        }
    }
    useEffect(() => {
        searchCity();
    }, [currentCityName])
    return (
        <NowDataContext.Provider value={nowData}>
            <Link to="/help">Помощь</Link>
            <Link to="/stats">Статистика</Link>
            <div className="container">
                <SearchForm onSubmit={handleSubmit} onClick={searchCity} setCurrentCity={setCurrentCity} />
                <Wrapper forecastData={forecastData} setCurrentCity={setCurrentCity} />
            </div>
        </NowDataContext.Provider>
    )
}