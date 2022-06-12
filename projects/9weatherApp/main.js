'use strict';

const city = document.querySelector('.city'),
wind = document.querySelector('.wind .value'),
humidity = document.querySelector('.humidity .value');

document.querySelector('.location').addEventListener('click' , ()=>{
    const geolocation = navigator.geolocation.getCurrentPosition(showposition);
});

async function showposition(locationdata) {
    console.log(locationdata);
    let latitude = locationdata.coords.latitude;
    let longitude = locationdata.coords.longitude;
    console.log(latitude , longitude);
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=de5f3c726f96d8d5af62ae5017f72c99`).then(response =>  response.json()).then(json => showdata(json)).catch(e => console.log(e))
}
// https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={API key}
 

// showdata in html
function showdata(data) {
    console.log(data);
    city.textContent =  data.name;
    humidity.textContent = data.main.humidity + '%';
    wind.textContent = data.wind.speed + 'km/h';

}
 
// image from icon
//         var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

// http://openweathermap.org/img/w/50n.png
const getdayDate = () =>  {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    console.log(date);
    console.log(month);
    console.log(year);
    let day = weekday[d.getDay()];
    document.querySelector('.day').textContent = day;
}

getdayDate();

