const request = require('request');

var geocodeAddress =(address,cb)=>
{

var readyReq=encodeURIComponent(address);


request(
  {
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${readyReq}`,
    json:true
  },
  (error,response,body)=>
{
  if (error)
  {
    cb('Unable to Connect : \n ' + error ,null);
  }
  else if (body.status === "ZERO_RESULTS")
  {
    cb(null,'Address Incorrect');
  }
  else {


  //console.log(JSON.stringify(body,undefined,2));
var add = body.results[0].formatted_address;
//console.log('Address: ',add);
  lat = body.results[0].geometry.location.lat;
  //console.log('Latitude: ',lat);

  lng = body.results[0].geometry.location.lng;
  //console.log('Longitude: ',lng);

  cb(undefined,{

    add,lat,lng
  });
  //)
}
//forecast key: fcd47f675281727c82fea99f8ccef844
//gmaps: AIzaSyDz1ohc0DNN2aaKpgl-EKVQhgth7D_j0HE
});

};

module.exports={geocodeAddress};
