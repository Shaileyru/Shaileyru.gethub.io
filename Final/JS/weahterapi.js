const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=77600,mx&appid=fd8f25b1843809fa73e36be00a0574ef&units=imperial"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
        document.getElementById('current-cond').textContent = desc;
        const temp = jsObject.main.temp;
        document.getElementById('temp-max').textContent = temp;
        const humid = jsObject.main.humidity;
        document.getElementById('humid').textContent = humid;

    });
    
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=8dd97b200c8afe4ed2b4724eaee03d91&lang=en&units=imperial"
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=8dd97b200c8afe4ed2b4724eaee03d91&lang=en&units=imperial"

fetch(weatherURL) .then(response => response.json())
.then(data => {
    document.getElementById('temp').innerText = Math.round(data.main.temp);
    document.getElementById('high').innerText = Math.round(data.main.temp_max);
    document.getElementById('windSpeed').innerText = data.wind.speed;
    document.getElementById('humidity').innerText = data.main.humidity;
    let currentCondition = data.weather[0].description
    document.getElementById('condition').innerText = currentCondition.charAt(0).toUpperCase() + currentCondition.substring(1);
    })

fetch(forecastURL) .then(response => response.json())
.then(data => {
    newDate = '';
    weekTemp = {};
    days = [];

    weekTemp = Object.assign(...data.list
        .filter(el => el.dt_txt.indexOf('18:00:00') >= 0)
        .map((el, index) => {
            console.log(el)
                newDate = new Date(el.dt_txt)

                console.log(newDate.toString().substr(0,3))

                return({
                    [newDate.toString().substr(0,3)] : Math.round(el.main.temp) 
                })
            }       
        ));

        console.log(weekTemp)

        let properties =  Object.keys(weekTemp)
        let values =  Object.values(weekTemp)
        console.log(properties, values)
        for(i=0; i< properties.length; i++){
            console.log("dayName" + (i + 1))
            document.getElementById("dayName" + (i + 1)).innerText = properties[i];
            document.getElementById("dayTemp" + (i + 1)).innerText = values[i] + " °F";
        }
    })