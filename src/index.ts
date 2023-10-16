/* eslint-disable max-len */
import {http, Request, Response} from "@google-cloud/functions-framework";
import * as dialogflow from "@google-cloud/dialogflow-cx";

http("HandleWebhookRequest", (req: Request, res: Response) => {
  type WebhookRequest = dialogflow.protos.google.cloud.dialogflow.cx.v3beta1.WebhookRequest;
  type WebhookResponse = dialogflow.protos.google.cloud.dialogflow.cx.v3beta1.WebhookResponse;

  const body = <WebhookRequest><unknown>req.body;
  console.log(body.languageCode);

  const response: WebhookResponse = new dialogflow.protos.google.cloud.dialogflow.cx.v3beta1.WebhookResponse();

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
