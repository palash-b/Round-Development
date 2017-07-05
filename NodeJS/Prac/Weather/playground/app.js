const request = require('request');
const yargs = require('yargs');

const argv = yargs
.options(
  {
    address:{
              demand:true,
              describe:'Enter an Address',
              alias:'a',
              string: true
            }
  }
)
.help()
.argv;


var readyReq=encodeURIComponent(argv.address);


request(
  {
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${readyReq}`,
    json:true
  },
  (error,response,body)=>
{
  console.log(JSON.stringify(body,undefined,2));
var add = body.results[0].formatted_address;
console.log('Address: ',add);
  lat = body.results[0].geometry.location.lat;
  console.log('Latitude: ',lat);

  lng = body.results[0].geometry.location.lng;
  console.log('Longitude: ',lng);


});
//console.log(lng);

// request(
//   {
//     url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lng},${lat}&radius=50&type=restaurant&key=AIzaSyDz1ohc0DNN2aaKpgl-EKVQhgth7D_j0HE`,
//     json:true
//   },
//   (error,response,body)=>
// {
//   console.log(JSON.stringify(response,undefined,2));
// }
// );
