const request = require('http');
const path = require('path');
const express = require('express');
const emport = require('./forcast/forcast')

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));
app.set('view engine', 'views')
app.get('/', (req, res) => {

})

app.get('/forcast', (req, res) => {

    emport.forcast(req.query.latitude, req.query.longitude, (error, data) => {
        if (error) {
            res.send({ error })
        } else {
            res.send({
                temp: data.temperature,
                weather: data.weather,
                humidity: data.humidity,
                date: data.date,
                time: data.time,
                region: data.region,
                country: data.country
            })
        }

    })

})

app.listen(9000, () => { console.log('server running...') })