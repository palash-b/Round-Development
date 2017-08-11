const request = require('request');

var input=(str,p)=>
{
request(
    {
      url:`http://restcountries.eu/rest/v1/name/${str}`,
      json:true
    },

      (error,response,body)=>
      {
        if (error)
        {
          console.log('Error');
        }
        else {



             var i =0;
             var count = 0;
             var op = JSON.stringify(body,undefined,2);

             for(i = 0;i<body.length;i++)
             {
               if (body[i].population>p)
               {
                 count++;
               }
             }

             console.log(count);

          }
        }



);
}

input('un',1000);
