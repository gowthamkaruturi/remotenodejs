const request = require('request');

request({
  url: 'http://www.mapquestapi.com/geocoding/v1/address?key=g0EaDGiBd70v5kfJyTyiFRBhX9AJgzgY&location=1301%20lombard%20street%20philadelphia',
  json: true
}, (error, response, body) => {

  let loc = body.results[0].locations[0];
  console.log(JSON.stringify(response, undefined,2));

console.log(`${loc.street}, ${loc.adminArea5}, ${loc.adminArea3}, ${loc.postalCode}`);
//  console.log(body.results[0].locations[0].latLng.lat);
//  console.log(body.results[0].locations[0].latLng.lng);

});
