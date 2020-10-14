import React from "react";
import "./weatherSearch.css";

const WeatherInfo = ({data}) => {

    function getDate(){
        const date = new Date()
        return new Intl.DateTimeFormat("eng", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          }).format(date);
        }

      function getCelcius(foren){
          return Math.round(foren / (9 / 5 *32))
    }

    return (
    <section className="weather-info">
        <h2 className="weather-info--city">{data.name}, {data.sys.country}</h2>
        <time className="weather-info--time" dateTime={getDate()}>{getDate()}</time>
        <h2 className="weather-info--temperature"> {getCelcius(data.main.temp)}<span>c</span></h2>
        <p className="weather-info--weather-type"> <b>{data.weather[0].main}</b> is's look like {data.weather[0].description}</p>
        <p>Wind speed: {data.wind.speed} m/s</p>
    </section>
    )
}

export default WeatherInfo