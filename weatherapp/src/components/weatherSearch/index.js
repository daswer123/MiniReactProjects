import React, { useState } from "react";
import getWeatherByCity from "../../services";

import "./weatherSearch.css";

const WeatherSearch = ({getWeatherData}) => {
    const [city,setCity] = useState("");

    const onCityChange = (e) => {
        setCity(e.target.value);
    }

    const onCitySearch = async (e) => {
        e.preventDefault();

        if (city === ""){
            alert("Пожалуйтса введите название города!");
            return
        }

        const data = await getWeatherByCity(city);
        
        getWeatherData(data)
    } 

    return (
        <section>
            <h2 className="weather-search--title">Type any city</h2>
            <form action="#" className="weather-search" onSubmit={(e) => onCitySearch(e)}>
                <input onChange={(e) => onCityChange(e)} type="text" name="city"/>
                <button type="submit">Узнать погоду</button>
            </form>
        </section>
    )
}

export default WeatherSearch