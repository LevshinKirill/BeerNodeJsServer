const express = require('express');
const fetch = require("node-fetch");
const Brewery = require("./Brewery");

let app = express();
app.set('view engine', 'pug');

let breweries = [];
fetch('https://api.openbrewerydb.org/breweries?page=1&per_page=50')
    .then(res => res.json())
    .then(json => {
        json.map(b => {
            breweries.push(new Brewery(b.id, b.name, b.brewery_type, b.street, b.city, b.state, b.postal_code, b.country, b.longitude, b.latitude, b.phone, b.website_url, b.updated_at, b.tag_list))
        });
    });

app.get(/.*/, function (req, res) {
    res.render('app', {
        filteredBreweries: breweries.filter(b => b.brewery_type != "micro"),
        breweriesGroupedByState: breweries.reduce((r, b) => {
            r[b.state] = r[b.state] || [];
            r[b.state].push(b);
            return r;
        }, {})
    })
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});