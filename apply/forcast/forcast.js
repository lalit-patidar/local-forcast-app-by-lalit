const request = require('request')
let database = {
    indore: [22.7196, 75.8577],
    rau: [22.6399, 75.8033],
    bhopal: [56.25648, 26.1588],
    dhar: [22.6013, 75.3025],
    ujjain: [23.1765, 75.7885],
    delhi: [28.7041, 77.1025],
    mp: [22.9734, 78.6569],
    mumbai: [19.0760, 72.8777],

};

const forcast = (latitude, longitude, callback) => {
    let url = 'http://api.weatherstack.com/current?access_key=8c285df558eb859af082ced512890c18&query=' + latitude + ',' + longitude;
    console.log(url)
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('unable to connect weather stack, please check your network connection at once', undefined)

        } else if (response.body.error) {
            callback('somthing went wrong', undefined)

        } else {
        callback(undefined, {
            temperature: `${response.body.current.temperature}°`,
            humidity: response.body.current.humidity,
            weather: response.body.current.weather_descriptions[0],
            time: response.body.location.localtime.slice(11, 15),
            date: response.body.location.localtime.slice(0, 11),
            region: response.body.location.region,
            country: response.body.location.country
            })   
        }   
    })
}

module.exports = {
    forcast:forcast
}