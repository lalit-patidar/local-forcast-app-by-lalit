let database = {
    // for lowercase            // for UPPERCASE               // FOR Extra name
    indore: [22.7196, 75.8577], Indore: [22.7196, 75.8577],
    rau: [22.6399, 75.8033], Rau: [22.6399, 75.8033],
    bhopal: [56.25648, 26.1588], Bhopal: [56.25648, 26.1588],
    dhar: [22.6013, 75.3025], Dhar: [22.6013, 75.3025],
    ujjain: [23.1765, 75.7885], Ujjain: [23.1765, 75.7885],
    delhi: [28.7041, 77.1025], Delhi: [28.7041, 77.1025],
    mp: [22.9734, 78.6569], Mp: [22.9734, 78.6569], MP: [22.9734, 78.6569], MadhyaPradesh: [22.9734, 78.6569],
    mumbai: [19.0760, 72.8777], mumbai: [19.0760, 72.8777],
    ladakh: [34.1526, 77.5771], Ladakh: [34.1526, 77.5771],
    jabalpur: [23.1815, 79.9864], Jabalpur: [23.1815, 79.9864],
    mhow: [22.5505, 75.7625], Mhow: [22.5505, 75.7625],
    vidisha: [23.5236, 77.8140], Vidisha: [23.5236, 77.8140],
    gwalior: [26.2183, 78.1828], Gwalior: [26.2183, 78.1828],
    neemuch: [24.4738, 74.8726], Neemuch: [24.4738, 74.8726], Nimuch: [24.4738, 74.8726], nimuch: [24.4738, 74.8726],
    mandsaur: [24.0734, 75.0679], Mandsaur: [24.0734, 75.0679], mandsor: [24.0734, 75.0679], Mandsor: [24.0734, 75.0679],
    ratlam: [23.3315, 75.0367], Ratlam: [23.3315, 75.0367], ratalam: [23.3315, 75.0367], Ratalam: [23.3315, 75.0367],
    dewas: [22.9676, 76.0534], Dewas: [22.9676, 76.0534],
    sajapur: [23.4186, 76.5951], Sajapur: [23.4186, 76.5951],
    khandwa: [21.8314, 76.3498], Khandwa: [21.8314, 76.3498], khandawa: [21.8314, 76.3498],
    jhabua: [22.7697, 74.5921], Jhabua: [22.7697, 74.5921], jhaba: [22.7697, 74.5921],
    mandav: [22.3271, 75.4053], Mandav: [22.3271, 75.4053], mandu: [22.3271, 75.4053], Mandav: [22.3271, 75.4053],
    omkareshwar: [22.2456, 76.1510], Omkareshwar: [22.2456, 76.1510],
    sehor: [23.2032, 77.0844], sehore: [23.2032, 77.0844], Sehore: [23.2032, 77.0844], Sehor: [23.2032, 77.0844],
    imgaes: [{
        haze: 'https://cdn.iconscout.com/icon/free/png-256/haze-air-mist-weather-wind-38962.png',
        partly_cloudy: 'https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-sunny-512.png',
        cloudy: 'https://cdn0.iconfinder.com/data/icons/weather-web-app-ui/100/weather-06-512.png',
        sunny: 'https://cdn3.iconfinder.com/data/icons/photography-54/64/sunny-mode-camera-photography-512.png',
        Rain: 'https://cdn3.iconfinder.com/data/icons/parks-and-rec/400/parks-06-512.png',
        over_cast: 'https://cdn2.iconfinder.com/data/icons/forecast/100/forecast_weather_cloud_rain_snow_wind_thunder_sun_moon_day_night-03-512.png',
        mist: 'https://www.shareicon.net/data/2016/07/18/797763_weather_512x512.png',


    }]

};

const valueByUser = document.getElementById("inp3");
const form = document.querySelector("form");
const showLocation = document.getElementById("show-location");
const showforcat = document.getElementById("show-forcast");
const temperature = document.getElementById("temperature");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = valueByUser.value;
    if (location === '') {
        console.log('give your location')
        showLocation.textContent = 'please provide location';

    } else {
         
        try {
            const latitude = database[location][0];
            const longitude = database[location][1];

            showLocation.textContent = 'loading...';
            showforcat.textContent = 'welocome'



            fetch('/forcast?latitude=' + latitude + '&longitude=' + longitude).then((response) => {
                response.json().then((data) => {
                    if (data.error) {
                        showLocation.textContent = data.error;
                    } else {
                        let img = document.createElement('img');  // FOR creating img tag in html
                    document.querySelector("#imge1").appendChild(img); // for apply img tage in html at specific target

                        temperature.textContent = data.temp;
                        showforcat.textContent = `weather is ${data.weather}`;
                        showLocation.textContent = `Region-${data.region}, country-${data.country} `;
                        console.log(data.temp, data.weather, data.humidity);
        
                        switch (data.weather) {
                            case "Partly cloudy":
                                console.log('sunny is is working')
                                img.src = database.imgaes[0].partly_cloudy
                                document.getElementById("temperature").style.color = 'black'
                                break;
                            case "Haze":
                                console.log('hazee is working')
                                img.src = database.imgaes[0].haze;
                                document.getElementById("temperature").style.color = 'lightgreen'
                                break;
                            case "cloudy":
                                console.log('cloud is working')
                                img.src = database.imgaes[0].cloudy;
                                document.getElementById("temperature").style.color = 'seagreen'
                                break;
        
                            case "Overcast":
                                img.src = database.imgaes[0].over_cast;
                                document.getElementById("temperature").style.color = 'blue'
                                break;
        
                            case "Mist":
                                console.log("mist is there")
                                img.src = database.imgaes[0].mist;
                                document.getElementById("temperature").style.color = 'smog'
                                break;
        
                            case "Sunny":
                                console.log('suuny is raunning');
                                img.src = database.imgaes[0].sunny;
                                document.getElementById("temperature").style.color = 'yellow'
                                break;
                            case "Rain": 
                                console.log("rain is here") 
                                img.src = database.imgaes[0].sunny;
                                document.getElementById("temperature").style.color = 'green'
                                
        
                            default: console.log('something went wrong with weathe in switch') 
        
                        }
                    }
                })
            })        
            
    
        } 
        catch {
               console.log('this location is not exist')
               showLocation.textContent = 'this location is not exist';
        } 
    } 
})

// hash of that code is here

// function creatImg(take) {
//     let img = document.createElement('img');
//     document.querySelector("#imge1").appendChild(img);
//     console.log('image is added')
//     console.log(take);
//     let given = take
//     img.src = database.imgaes[0];
// }

// const latitude = database[location][0];
//     const longitude = database[location][1];
//     console.log(longitude);
//     showLocation.textContent = 'loading...';
//     showforcat.textContent = 'hello';

/*fetch('/forcast?latitude=' + latitude + '&longitude=' + longitude).then((response) => {
        response.json().then((data) => {
            let img = document.createElement('img');  // FOR creating img tag in html
            document.querySelector("#imge1").appendChild(img); // for apply img tage in html at specific target
            if (data.error) {
                showLocation.textContent = data.error;
            } else {
                temperature.textContent = data.temp;
                showforcat.textContent = `weather is ${data.weather}`;
                showLocation.textContent = `Region-${data.region}, country-${data.country} `;
                console.log(data.temp, data.weather, data.humidity);

                switch (data.weather) {
                    case "Partly cloudy":
                        console.log('sunny is is working')
                        img.src = database.imgaes[0].partly_cloudy
                        break;
                    case "Haze":
                        console.log('hazee is working')
                        img.src = database.imgaes[0].haze;
                        document.getElementById("temperature").style.color = 'black'
                        break;
                    case "cloudy":
                        console.log('cloud is working')
                        img.src = database.imgaes[0].cloudy;
                        break;

                    case "Overcast":
                        img.src = database.imgaes[0].over_cast;
                        break;

                    case "Mist":
                        console.log("mist is there")
                        img.src = database.imgaes[0].over_cast;
                        break;

                    case "Sunny":
                        console.log('suuny is raunning');
                        img.src = database.imgaes[0].sunny;
                        break;

                    default: console.log('something went wrong with weathe in switch') 

                }
            }
        })
    })
 */

