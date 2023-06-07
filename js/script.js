 let dt = new Date();
    document.getElementById("date").innerHTML = dt;

let fetching=()=>{ 
    let searchCity = document.getElementById("search").value;
    let city = document.getElementById("city");
    let condition = document.getElementById("condition");
    let temperatur= document.getElementById("temperature");
    let windspeed = document.getElementById("wind");
    let descTemp =  document.getElementById("descTemp");
    let descCity =  document.getElementById("descCity");

 fetch('https://api.openweathermap.org/data/2.5/weather?q=' +searchCity+ '&appid=2e36fc3b6204c0f93edd75990f00cf48&units=metric') 
    .then(response => response.json())            
    .then(response =>{
     let data = response;                     
     console.log(data);
     city.innerHTML = response.name;
     descCity.innerHTML = response.name;
     condition.innerHTML =response.weather[0].description;
     windspeed.innerHTML =response.wind.speed + 'm/s';
     temperatur.innerHTML = response.main.temp + "°С";
     descTemp.innerHTML = response.main.temp + "°С";
    })
    .catch(err => console.error(err));
}
