import {useState,useEffect} from "react";

function App(){
    const id = '....'; // 7d3f8a8045f9104f8ddf1d488dee21e9
    const city = 'Ahmedabad';
    const [weatherData,setWeather] = useState(null);
    
    async function getWeatherData(){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}&units=metric`; 
        try {
                const resp = await fetch(url);
                if(!resp.ok){ throw new Error(`Url is unmatched ${resp.statusText}`) }
                const data = await resp.json();
                const {name,main,weather} = data ;
                const t = main.temp;
                const description = weather[0].description;
            console.log('Weather');
            setWeather({
                city: name, 
                temperature : t ,description : description
            });
        }
        catch(error){
            console.log(`Error : ${error.message}`);
        }
    }
useEffect (() => {
    getWeatherData();
    const intervalId = setInterval (()=> {
        console.log("fetching data");
        getWeatherData();
    },30*60*1000);
    return () => clearInterval(intervalId); 
    },[]);
    
    return(
        <>
            { weatherData ? (
       <div>
    <p>City: {weatherData.city}</p>
    <h1>Weather: {weatherData.temperature}°C</h1>
    <p>Description: {weatherData.description}</p>
</div>
            ) : (
                <h1>Loading.... </h1>
            )}
        </>
    );
}
export default App;