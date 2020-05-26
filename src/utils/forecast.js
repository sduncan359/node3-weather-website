const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=55efda68c0cb6a3679df2635dd778f97&query=' + latitude + ',' + longitude + '&units=f'    
        request({ url, json: true }, (error, { body }) => {  
            if (error) {
                callback('Unable to connect to weather service!', undefined)   
            } else if (body.error) {
                callback('Unable to find location', undefined)                
            } else {
                callback(undefined, {
                    temperature: body.current.temperature,
                    feelslike: body.current.feelslike,
                    description: body.current.weather_descriptions[0],
                    humidity: body.current.humidity
                })                               
            }
        })
}

module.exports = forecast