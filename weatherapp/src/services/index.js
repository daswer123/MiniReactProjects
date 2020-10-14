async function getWeatherByCity(name){
    const request = await fetch("https://rapidapi.p.rapidapi.com/weather?q="+name,
     {
        method: "GET",
        headers: {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "2cf164efabmshd4efd2085d57281p108bd6jsn4ea89aedc68a"
        }
    })

    if (!request.ok){
        alert("You wrongly type the city's name, please try again");
        return
    }

    return await request.json();
}
export default getWeatherByCity