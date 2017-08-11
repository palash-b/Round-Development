const request = require('request');
const distance = require('./distance.js');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
var getRest = (lat,lng,cb1)=>
{

  request(
      {
        url:`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=100000&type=restaurant&key=AIzaSyDz1ohc0DNN2aaKpgl-EKVQhgth7D_j0HE`,
        json:true
      },

        (error,response,body)=>
        {
          if (error)
          {
            cb1(error);
          }
          else
          {


            var rest=[];
            var lati=[];
            var long=[];
            var dis=[];
            var open=[];
            var rat = [];

            for (i=0;i<3;i++)
            {
              rest[i] = body.results[i].name;
              lati[i] = body.results[i].geometry.location.lat;
              long[i] = body.results[i].geometry.location.lng;
              //open[i] = body.results[i].opening_hours.open_now;
              rat[i] = body.results[i].rating;
              //console.log(open[i]);
              // if (open[i]==='true')
              // {
              //   open[i]="Open";
              // }
              // else
              // {
              //     open[i]="Close";
              // }
              //console.log(open[i]);
              dis[i]=distance.distance(lat,lng,lati[i],long[i]);


            }

            cb1(undefined,{v1: rest[0], v2: rest[1],v3: rest[2],d1: dis[0],d2: dis[1],d3: dis[2],r1: rat[0],r2: rat[1],r3: rat[2]});

          }
        }

  );
}

module.exports={getRest};
