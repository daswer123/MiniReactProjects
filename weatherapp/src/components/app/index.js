import React, { useState } from "react";
import WeatherInfo from "../weatherInfo";
import WeatherSearch from "../weatherSearch";

import "./app.css";

const App = () => {
    const [weatherData,setWeahterData] = useState("");

    const getWeatherData = (data) => {
        setWeahterData(data);
    }

    const view = weatherData 
    ? 
    <WeatherInfo  data={weatherData}/>
    :
    <WeatherSearch getWeatherData={getWeatherData}/>

    return(
        <main className="weather">
            {view}
        </main>
    )
}

export default App;