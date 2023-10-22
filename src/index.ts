/* eslint-disable max-len */
import {http, Request, Response} from "@google-cloud/functions-framework";
import {protos as dftypes} from "@google-cloud/dialogflow-cx";

http("HandleWebhookRequest", (req: Request, res: Response) => {

  const body = <dftypes.google.cloud.dialogflow.cx.v3beta1.IWebhookRequest>req.body;
  console.log(body.languageCode);

  const response: dftypes.google.cloud.dialogflow.cx.v3beta1.IWebhookResponse = {};

  response.fulfillmentResponse = {
    messages: [{
      text: {
        text: [
          "Hello from Typescript",
        ],
      },
    }],
  };
  res.status(200).send(response);
});
