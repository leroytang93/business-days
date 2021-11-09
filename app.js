const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 8080;

const logic = require('./logic');

app.get('/api/businessdays', (request, response) => {
    var days = logic.checkNumberofDays(2019);
    res.send(`${days}`);
})

app.get('/api/sgpubholidays', async (request, response) => {
    const resource_id = '04a78f5b-2d12-4695-a6cd-d2b072bc93fe';
    const publicHol_api_url = `https://data.gov.sg/api/action/datastore_search?resource_id=${resource_id}`;
    
    const fetch_response = await fetch(publicHol_api_url);
    const json = await fetch_response.json();
    console.log(json);
})

app.listen(port, () => {
    console.log(`Listening at port ${port}...`)
  })

