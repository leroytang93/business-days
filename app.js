const express = require('express');
const axios = require('axios');
const config = require("config");
const app = express();
const port = config.server.port;

const logic = require('./logic');

app.get('/api/businessdays', (request, response) => {
    var years= request.params.year;
    console.log(request.params.year);
    var days = logic.checkNumberofDays(years);
    if (typeof days !== 'undefined')
    {
        response.send(`Undefined number of days, please check input.`);
    }
    else
    {
        response.send(`${days}`);
    }
})

app.get('/api/sgpublicholidays', (resquest, response) => {
    axios.get(`${config.development.sgPublicHols_url}${config.development.sgPublicHols_resource_id}`)
      
    // Print data
    .then(response => {
       const { Date, Day, Holiday } = response.data
       console.log(`Post ${Date}: ${Day}: ${Holiday}\n`)
    })

    // Print error message if occur
    .catch(error => console.log(
          `Error to fetch data\n ${error}`))
})

app.listen(port, () => {
    console.log(`Listening at port ${port}...`)
    })