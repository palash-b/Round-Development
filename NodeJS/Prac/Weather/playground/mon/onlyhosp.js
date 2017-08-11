
'use strict';

    exports.handler=function(event,context)
    {
        try
        {
          var request = event.request;

          if (request.type === "LaunchRequest")
          {
            let options={};
            options.speechText="Hi! I welcome you to A.D.P. Shops";
            options.repromptText="Whom do you want me to say Hi to?";
            options.endSession= false;

            context.succeed(buildResponse(options));
          }

          else if (request.type === "IntentRequest")
          {
            let options = {};

            if (request.intent.name==="AIntent")
            {
              options.speechText="ADP shops is a modern user experience enabling ADP associates to find and shop with small businesses."+
                                  "We use the M.E.R.N. stack i.e. MongoDB , Express, React and NodeJS. for our implementation"+
                                  "We are a Special Projects Next Generation Team";
              options.endSession= true;
              context.succeed(buildResponse(options));

            }

            else if (request.intent.name==="BIntent")
            {
              options.speechText="Hi! I am Alexa the Amazon Voice Assistant "+
                                  "My Creator gave me the name SHOPS, you should call me that "+
                                  "I have a Skill development S.D.K. over which you can program me for various tasks "+
                                  "Palash      why dont you explain more about it?";
              options.endSession= true;
              context.succeed(buildResponse(options));

            }


            else if (request.intent.name==="GeoIntent")
            {

                console.log(JSON.stringify(request.intent.slots))
                let ip1 = request.intent.slots.FirstInput.value;
                let ip2 = request.intent.slots.SecondInput.value;
                let ip3 = request.intent.slots.ThirdInput.value;


                const hospRaw =
{"data": [{
    //"_id" : ObjectId("57aabf9a2d35da6ffc803d90"),
    "BUSINESS_NAME" : "PEER GROUP FOR PLASTIC",
    "LEGAL_NAME" : "PEER GROUP FOR PLASTIC SURGERY P A",
    "ADDR1" : "124 COLUMBIA TURNPIKE",
    "CITY" : "FLORHAM PARK",
    "STATE" : "NJ",
    "ZIP" : "07932",
    "COUNTRY" : "US",
    "META" : {
        "INDUSTRY_CODE" : "621111",
        "TYPES" : [
            "hospital",
            "doctor",
            "health",
            "point_of_interest",
            "establishment"
        ]
    },
    "GEO_STATUS" : "PLACE_OK",
    //"GEO_DATE" : ISODate("2016-09-09T17:46:00.963Z"),
    "GOOGLE_NAME" : "Peer Group for Plastic Surgery",
    "TYPE" : "hospital",
    "PLACE_loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.3847545,
            40.7860587
        ]
    },
    "NAME" : "Peer Group for Plastic Surgery",
    "GEO_addr" : "124 Columbia Turnpike, Florham Park, NJ 07932",
    "GEO_loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.3847497,
            40.7860542
        ]
    },
    "loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.3847545,
            40.7860587
        ]
    },
    "place_id" : "ChIJjQCK3riow4kRdYSdG7_SGvk",
    "GEO_DISTANCE" : 1,
    "hashId" : "KbePjpakEdj2",
    "source" : {
        "type" : "RUN",
        "branchCode" : "RX",
        "companyCode" : "UJ8",
        "startDate" : "5/12/2003"
    }
},


{
    //"_id" : ObjectId("57aabf9f2d35da6ffc808c0a"),
    "BUSINESS_NAME" : "OMNI-MED",
    "LEGAL_NAME" : "ROGER DIRUGGIERO",
    "ADDR1" : "URGENT MEDICAL CARE",
    "ADDR2" : "131 COLUMBIA TURNPIKE",
    "CITY" : "FLORHAM PARK",
    "STATE" : "NJ",
    "ZIP" : "07932",
    "COUNTRY" : "US",
    "META" : {
        "INDUSTRY_CODE" : "621111",
        "TYPES" : [
            "hospital",
            "doctor",
            "health",
            "point_of_interest",
            "establishment"
        ]
    },
    "GEO_STATUS" : "PLACE_OK",
    //"GEO_DATE" : ISODate("2016-09-09T18:00:32.003Z"),
    "GOOGLE_NAME" : "Omni-Med",
    "TYPE" : "hospital",
    "PLACE_loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.3867692,
            40.7863193
        ]
    },
    "NAME" : "Omni-Med",
    "GEO_addr" : "131 Columbia Turnpike, Florham Park, NJ 07932",
    "GEO_loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.3867903,
            40.7863329
        ]
    },
    "loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.3867692,
            40.7863193
        ]
    },
    "place_id" : "ChIJAajTILmow4kRTyikFBVoPeo",
    "GEO_DISTANCE" : 2,
    "hashId" : "BEe2kmbQlR21",
    "source" : {
        "type" : "RUN",
        "branchCode" : "RX",
        "companyCode" : "PR6",
        "startDate" : "10/17/2005"
    }
},


/* 4 */
{
    //"_id" : ObjectId("57aabf9d2d35da6ffc80641e"),
    "BUSINESS_NAME" : "Sphere Eyecare PC",
    "LEGAL_NAME" : "Sphere Eyecare PC",
    "ADDR1" : "112 Eisenhower Pkwy",
    "CITY" : "Livingston",
    "STATE" : "NJ",
    "ZIP" : "07039",
    "COUNTRY" : "US",
    "META" : {
        "INDUSTRY_CODE" : "null",
        "TYPES" : []
    },
    "GEO_STATUS" : "PLACE_OK",
    //"GEO_DATE" : ISODate("2016-09-09T17:53:09.880Z"),
    "GOOGLE_NAME" : "Sphere EyeCare",
    "TYPE" : "hospital",
    "PLACE_loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.353456,
            40.7765921
        ]
    },
    "NAME" : "Sphere Eyecare PC",
    "GEO_addr" : "112 Eisenhower Pkwy, Livingston, NJ 07039",
    "GEO_loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.3538538,
            40.7769144
        ]
    },
    "loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.353456,
            40.7765921
        ]
    },
    "place_id" : "ChIJ88Yc_YCpw4kRFSVJOed4jRA",
    "GEO_DISTANCE" : 49,
    "hashId" : "8kDm4Z7zxdrL",
    "source" : {
        "type" : "RUN",
        "branchCode" : "RK",
        "companyCode" : "6M3",
        "startDate" : "08/28/2014"
    },
    "ADDR2" : null
},

/* 5 */
{
    //"_id" : ObjectId("57aabfa02d35da6ffc809bfd"),
    "BUSINESS_NAME" : "PLASTIC SURGERY OF SHORT HILLS PC",
    "LEGAL_NAME" : "PLASTIC SURGERY OF SHORT HILLS PC",
    "ADDR1" : "1046 S Orange Ave",
    "CITY" : "Short Hills",
    "STATE" : "NJ",
    "ZIP" : "07078",
    "COUNTRY" : "US",
    "META" : {
        "INDUSTRY_CODE" : "",
        "TYPES" : [
            "hospital",
            "spa",
            "health",
            "point_of_interest",
            "establishment"
        ]
    },
    "GEO_STATUS" : "PLACE_OK",
    //"GEO_DATE" : ISODate("2017-04-28T01:01:57.328Z"),
    "GOOGLE_NAME" : "Plastic Surgery of Short Hills",
    "TYPE" : "hospital",
    "PLACE_loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.3140218,
            40.7563202
        ]
    },
    "NAME" : "Plastic Surgery of Short Hills",
    "GEO_addr" : "1046 S Orange Ave, Short Hills, NJ 07078",
    "GEO_loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.3140121,
            40.7563403
        ]
    },
    "place_id" : "ChIJRQaDmqmuw4kRYW39skyf914",
    "GEO_DISTANCE" : 2,
    "hashId" : "9beJE9g3gDXJ",
    "source" : {
        "type" : "RUN",
        "branchCode" : "R6",
        "companyCode" : "NNI",
        "startDate" : "5/11/2016"
    },
    "loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.3140218,
            40.7563202
        ]
    }
},

/* 6 */
{
    //"_id" : ObjectId("57aabf9c2d35da6ffc805bd7"),
    "BUSINESS_NAME" : "Madison Internal Medicine Assoc, PA",
    "LEGAL_NAME" : "Madison Internal Medicine",
    "ADDR1" : "95 Madison Ave",
    "ADDR2" : "Suite 405",
    "CITY" : "Morristown",
    "STATE" : "NJ",
    "ZIP" : "07960",
    "COUNTRY" : "US",
    "META" : {
        "INDUSTRY_CODE" : "621999",
        "TYPES" : [
            "hospital",
            "doctor",
            "health",
            "point_of_interest",
            "establishment"
        ]
    },
    "GEO_STATUS" : "PLACE_OK",
    //"GEO_DATE" : ISODate("2016-12-27T16:36:18.398Z"),
    "GOOGLE_NAME" : "Madison Internal Medicine",
    "TYPE" : "hospital",
    "PLACE_loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.4646143,
            40.7869879
        ]
    },
    "NAME" : "Madison Internal Medicine",
    "GEO_addr" : "95 Madison Ave #405, Morristown, NJ 07960",
    "GEO_loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.4645608,
            40.7869062
        ]
    },
    "place_id" : "ChIJK7iRWJumw4kRaNhwh3WcxT8",
    "GEO_DISTANCE" : 0,
    "hashId" : "BEe2kqq70R21",
    "loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.4645608,
            40.7869062
        ]
    },
    "source" : {
        "type" : "RUN",
        "branchCode" : "RF",
        "companyCode" : "ZDH",
        "startDate" : "1/7/2013"
    }
},

/* 7 */
{
    //"_id" : ObjectId("57aabf9b2d35da6ffc804de6"),
    "BUSINESS_NAME" : "NATHAN C SABIN D P M",
    "LEGAL_NAME" : "NATHAN C SABIN D P M",
    "ADDR1" : "MEDICAL & SURGICAL PODIATRY",
    "ADDR2" : "39 SOUTH STREET",
    "CITY" : "MORRISTOWN",
    "STATE" : "NJ",
    "ZIP" : "07960",
    "COUNTRY" : "US",
    "META" : {
        "INDUSTRY_CODE" : "621391",
        "TYPES" : [
            "hospital",
            "doctor",
            "health",
            "point_of_interest",
            "establishment"
        ]
    },
    "GEO_STATUS" : "PLACE_OK",
    //"GEO_DATE" : ISODate("2016-09-09T17:49:01.423Z"),
    "GOOGLE_NAME" : "Morristown Foot Care (morris county, NJ): Nathan Sabin DPM",
    "TYPE" : "hospital",
    "PLACE_loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.4800552,
            40.7951204
        ]
    },
    "NAME" : "Morristown Foot Care (morris county, NJ): Nathan Sabin DPM",
    "GEO_addr" : "39 South St, Morristown, NJ 07960",
    "GEO_loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.4800552,
            40.7951204
        ]
    },
    "loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.4800552,
            40.7951204
        ]
    },
    "place_id" : "ChIJVUgGy7ymw4kRBl0aZ1LZXd4",
    "GEO_DISTANCE" : 0,
    "hashId" : "NgD3q1aMZRZ5",
    "source" : {
        "type" : "RUN",
        "branchCode" : "RK",
        "companyCode" : "VRX",
        "startDate" : "4/16/2008"
    }
},

/* 8 */
{
    //"_id" : ObjectId("57aabf9b2d35da6ffc804863"),
    "BUSINESS_NAME" : "The Stone Center of New Jersey LLC",
    "LEGAL_NAME" : "Stone Center of New Jersey LLC",
    "ADDR1" : "830 Morris Tnpk",
    "ADDR2" : "Suite 303",
    "CITY" : "Short Hills",
    "STATE" : "NJ",
    "ZIP" : "07078",
    "COUNTRY" : "US",
    "META" : {
        "INDUSTRY_CODE" : "622110",
        "TYPES" : [
            "hospital",
            "point_of_interest",
            "establishment"
        ]
    },
    "GEO_STATUS" : "PLACE_OK",
    //"GEO_DATE" : ISODate("2016-09-09T17:47:58.348Z"),
    "NAME" : "Stone Center of New Jersey",
    "TYPE" : "hospital",
    "GEO_addr" : "830 Morris Turnpike #303, Short Hills, NJ 07078",
    "GEO_loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.3368025,
            40.7232304
        ]
    },
    "loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.3367785,
            40.72318
        ]
    },
    "GOOGLE_NAME" : "Stone Center of New Jersey",
    "place_id" : "ChIJ2xCfYGSuw4kRyd0qpPK1CJk",
    "GEO_DISTANCE" : 6,
    "hashId" : "roeX3bpm0DNM",
    "source" : {
        "type" : "RUN",
        "branchCode" : "RF",
        "companyCode" : "3KZ",
        "startDate" : "3/27/2013"
    }
},

/* 9 */
{
    //"_id" : ObjectId("57aabf9f2d35da6ffc808694"),
    "BUSINESS_NAME" : "ACOHA",
    "LEGAL_NAME" : "Advanced Care Oncology and Hem",
    "ADDR1" : "385 Morris Ave Ste 100",
    "CITY" : "Springfield",
    "STATE" : "NJ",
    "ZIP" : "07081",
    "COUNTRY" : "US",
    "META" : {
        "INDUSTRY_CODE" : "621111",
        "TYPES" : [
            "hospital",
            "health",
            "point_of_interest",
            "establishment"
        ]
    },
    "GEO_STATUS" : "PLACE_OK",
    //"GEO_DATE" : ISODate("2016-09-09T17:59:31.154Z"),
    "GOOGLE_NAME" : "Advanced Care Oncology & Hematology Associates LLC",
    "TYPE" : "hospital",
    "PLACE_loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.3174179,
            40.7133811
        ]
    },
    "NAME" : "Advanced Care Oncology & Hematology Associates LLC",
    "GEO_addr" : "385 Morris Ave #100, Springfield Township, NJ 07081",
    "GEO_loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.3173964,
            40.7133656
        ]
    },
    "loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.3173964,
            40.7133657
        ]
    },
    "place_id" : "ChIJ4dRx_3muw4kR_C3GQvJwqEk",
    "GEO_DISTANCE" : 0,
    "hashId" : "PMen8rbg6dgy",
    "source" : {
        "type" : "RUN",
        "branchCode" : "RF",
        "companyCode" : "WPY",
        "startDate" : "9/20/2012"
    }
},

/* 10 */
{
    //"_id" : ObjectId("57aabf9e2d35da6ffc807f2b"),
    "BUSINESS_NAME" : "ROUTE 53 MEDICAL ASSOCIATES LLC",
    "LEGAL_NAME" : "ROUTE 53 MEDICAL ASSOCIATES LLC",
    "ADDR1" : "891 TABOR ROAD",
    "CITY" : "MORRIS PLAINS",
    "STATE" : "NJ",
    "ZIP" : "07950",
    "COUNTRY" : "US",
    "META" : {
        "INDUSTRY_CODE" : "621493",
        "TYPES" : [
            "hospital",
            "doctor",
            "health",
            "point_of_interest",
            "establishment"
        ]
    },
    "GEO_STATUS" : "PLACE_OK",
    //"GEO_DATE" : ISODate("2016-09-09T17:58:10.606Z"),
    "GOOGLE_NAME" : "Route 53 Medical Associates, LLC",
    "TYPE" : "hospital",
    "PLACE_loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.469655,
            40.860931
        ]
    },
    "NAME" : "Route 53 Medical Associates, LLC",
    "GEO_addr" : "891 Tabor Rd, Morris Plains, NJ 07950",
    "GEO_loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.469687,
            40.860921
        ]
    },
    "loc" : {
        "type" : "Point",
        "coordinates" : [
            -74.469655,
            40.860931
        ]
    },
    "place_id" : "ChIJodRNJGKnw4kR1qBQ99LE26c",
    "GEO_DISTANCE" : 3,
    "hashId" : "BEe2xnaWGd21",
    "source" : {
        "type" : "RUN",
        "branchCode" : "RG",
        "companyCode" : "BTD",
        "startDate" : "10/7/2009"
    }
}



]
};
var hospString = JSON.stringify(hospRaw);
var hosp = JSON.parse(hospString);
var hospName = [];
var geoAdd = [];
var geoDist = [];
var resultant = [];
var temp = [];
//var input =1;
var i=0;
for(i=0;i<ip1;i++)
{
  hospName[i] = hosp.data[i].NAME;
  geoAdd[i] = hosp.data[i].GEO_addr;
  geoDist[i] = hosp.data[i].GEO_DISTANCE;

  temp[i] = `Hospital Number ${i+1} is ${hospName[i]} and the Address is ${geoAdd[i]}`;
}

  resultant = temp;


//console.log(resultant);








                //http://26.24.67.23:5678/apps/adpshops/service/getsampledata
                var responseString="";
                var http = require('http');
                var addressline = ip3;
                var readyReqAddress=encodeURIComponent(addressline);
                  var url = "http://maps.googleapis.com/maps/api/geocode/json?address="+readyReqAddress;
                  http.get(url, function(res) {
                    console.log("Got response: " + res.statusCode);
                    res.on('data', function (data) {
                    responseString += data;
                    });
                    res.on('end', function () {
                        var responseJ = JSON.parse(responseString);
                        var add = responseJ.results[0].formatted_address;
                        var lat = responseJ.results[0].geometry.location.lat;
                        var lng = responseJ.results[0].geometry.location.lng;

                    var geoSpeech=`Your Input Parameter Number is ${ip1} Where as the category is : ${ip2}  and the location is : ${ip3},  The Google Maps validated Address is ${add} while the Latitude is ${lat} and the longitude is ${lng}`;
                    var dataSpeech = resultant;
                    var finalSpeech = geoSpeech + dataSpeech;
                    options.speechText = finalSpeech;
                    options.endSession= true;
                    context.succeed(buildResponse(options));
                    });

                }).on('error', function(e) {
                  console.log("Got error: " + e.message);
                    options.speechText="This place is not registered " + e.message;
                    options.endSession= false;
                    context.succeed(buildResponse(options));
                });


            }

            else
            {
              context.fail("Unknown Error Found: IntentRequest");
            }
          }

          else if (request.type === "SessionEndedRequest")
          {

          }

          else
          {
            context.fail("Unknown Error Found: Handler Function");
          }

        }

        catch(e)
        {
          context.fail("Unknown Error Found: Try and catch "+e);
        }
    }

function buildResponse(options)
{
  var response =
  {
    version: "1.0",
    response:
    {
      outputSpeech:
      {
        type: "PlainText",
        text: options.speechText
      },

      shouldEndSession: options.endSession
    }
  };

    if(options.repromptText)
    {
      response.response.repromptText=
      {
        outputSpeech:
        {
          type: "PlainText",
          text: options.repromptText
        }
      };
    }
    return response;

}
