const apiKey = "7d3f8a8045f9104f8ddf1d488dee21e9"
const city = "Ahmedabad"

async function getWeather(){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // Metric units for Celsius

    try {
        const response = await fetch(url);
	if(!response.ok){throw new Error(`Cannot fetch the api : ${response.statusText}`)}
	const data = await response.json();
	
	const {name,main,weather} = data;
	const t = main.temp;
	const weatherDescription = weather[0].description
	console.log(`Weather :- Name: ${name} ,Temperature ${t} ,Description: ${weatherDescription}`)
    }
    catch(error){
		console.log(`failed to fetch the data: ${error.message}`);
}
}

getWeather();

setInterval(() => {
console.log("Fetching new data");
getWeather();
},30*60*1000);
