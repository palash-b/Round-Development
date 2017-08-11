const request = require('request');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var getWeather= (lat,lng,cb) =>
{
  request(
    {
      url: `https://api.darksky.net/forecast/fcd47f675281727c82fea99f8ccef844/${lat},${lng}`,

      json:true
    },
    (error,response,body)=>
    {
      if (error)
      {

        cb(error);
      }
      else
      {
        var currentTemp = body.currently.temperature;
        var apparentTemperature = body.currently.apparentTemperature;
        var sum = body.currently.summary;
        cb(undefined,{

          currentTemp,apparentTemperature,sum
        });
      }
    }


  );
}


module.exports={getWeather};
