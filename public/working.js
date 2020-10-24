let database = {
    indore: [22.7196, 75.8577],
    rau: [22.6399, 75.8033],
    bhopal: [56.25648, 26.1588],
    dhar: [22.6013, 75.3025],
    ujjain: [23.1765, 75.7885],
    delhi: [28.7041, 77.1025],
    mp: [22.9734, 78.6569],
    mumbai: [19.0760, 72.8777],
    imgaes: [{
        haze: 'https://cdn.iconscout.com/icon/free/png-256/haze-air-mist-weather-wind-38962.png',
        partly_cloudy: 'https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-sunny-512.png',
        cloudy: 'https://cdn1.iconfinder.com/data/icons/weather-icons-6/512/clouds-512.png',
        sunny: 'https://cdn3.iconfinder.com/data/icons/photography-54/64/sunny-mode-camera-photography-512.png',
        rain: 'https://cdn3.iconfinder.com/data/icons/parks-and-rec/400/parks-06-512.png'
    }]

};

const valueByUser = document.getElementById("inp3");
const form = document.querySelector("form");
const showLocation = document.getElementById("show-location");
const showforcat = document.getElementById("show-forcast");
const temperature = document.getElementById("temperature");


// function creatImg(take) {
//     let img = document.createElement('img');
//     document.querySelector("#imge1").appendChild(img);
//     console.log('image is added')
//     console.log(take);
//     let given = take
//     img.src = database.imgaes[0];
// }



form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = valueByUser.value;
    const latitude = database[location][0];
    const longitude =database[location][1];
    console.log(longitude);
    showLocation.textContent = 'loading...';
    showforcat.textContent = 'hello';
    


   fetch('http://localhost:9000/forcast?latitude='+ latitude +'&longitude='+ longitude).then((response) => {
       response.json().then((data) => {
         var b = "sunny"
        function creatImg() {
            let img = document.createElement('img');
            document.querySelector("#imge1").appendChild(img);
            console.log('image is added')
            console.log(b);
            img.src = database.imgaes[0][b];
        }
           if (data.error) {
               showLocation.textContent = data.error;
           } else {
               let a = JSON.stringify(data.weather)
            creatImg(a);  
           temperature.textContent = data.temp;
              showforcat.textContent = `weather is ${data.weather}`;
           showLocation.textContent = `Region-${data.region}, country-${data.country} `;
           console.log(data.temp,data.weather, data.humidity);
           }
       })
   })
    
    
})



