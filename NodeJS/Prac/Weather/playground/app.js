const yargs = require('yargs');
const geo= require('./geocode.js')
const weather = require('./weather.js');
const restaurants = require('./rest.js');
const argv = yargs
.options(
  {
    address:{
              demand:true,
              describe:'Enter an Address',
              alias:'a',
              string: true
            },
     number:{
              demand:true,
              descibe:'Enter the Number',
              alias:'n',
              string: true
            },
      typeOfService:{
                      demand:true,
                      descibe:'Enter the Type of Service',
                      alias:'t',
                      string: true
                    }


  }
)
.help()
.argv;

console.log(argv.number);
console.log(argv.typeOfService);
geo.geocodeAddress(argv.address,(errorMsg,results)=>
{
  if (errorMsg)
  {
    console.log(errorMsg);
  }
  else {
    //console.log(JSON.stringify(results,undefined,2));
    console.log(`The Address is ${results.add}, while the Latitude is ${results.lat} and the longitude is ${results.lng}`);
    var lat1 = results.lat;
    var lng1 = results.lng;
    //console.log(lat1,lng1);
    // weather.getWeather(lat1,lng1,(errorMsgW,resultsW)=>
    // {
    //   if (errorMsgW)
    //   {
    //     console.log('There is an Error');
    //     console.log(errorMsgW);
    //   }
    //   else
    //   {
    //     // console.log(JSON.stringify(resultsW,undefined,2));
    //     console.log(`Its currently ${resultsW.currentTemp} whereas it feels like ${resultsW.apparentTemperature} and the forecast is ${resultsW.sum}`);
    //   }
    // });

    restaurants.getRest(lat1,lng1,(errorMsgR,resultsR)=>
    {
      if(errorMsgR)
      {
        console.log("There is an Error in restaurants: ")
        console.log(error);
      }
      else
      {
        console.log(`The info for restaurants is as follows: \n1.${resultsR.v1} at a distance of ${resultsR.d1} miles with rating of ${resultsR.r1}\n2.${resultsR.v2} at a distance of miles ${resultsR.d2} with rating of ${resultsR.r2} \n3.${resultsR.v3} at a distance of ${resultsR.d3} miles with rating of ${resultsR.r3}`);

      }
    });




  }
});


//restaurants.getRestaurants();
