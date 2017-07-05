'use strict';

    exports.handler=function(event,context)

    {
        try
        {
          var request = event.request;

          if (request.type === "LaunchRequest")
          {
            let options={};
            options.speechText="Hi! I welcome you to Palash's Greeting Skill, Who are you or with?";
            options.repromptText="Whom do you want me to say Hi to?";
            options.endSession= false;
            context.succeed(buildResponse(options));
          }

          else if (request.type === "IntentRequest")
          {
            let options = {};
            if (request.intent.name="TestIntent")
            {
              let name = request.intent.slots.FirstName.value;
              options.speechText="Hey there " + name + " Have a nice day!"+".";
              options.endSession= true;
              context.succeed(buildResponse(options));
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
