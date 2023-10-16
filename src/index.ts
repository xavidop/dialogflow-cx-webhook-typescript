/* eslint-disable max-len */
import {http, Request, Response} from "@google-cloud/functions-framework";
import {protos as dftypes} from "@google-cloud/dialogflow-cx";

http("HandleWebhookRequest", (req: Request, res: Response) => {
  type WebhookRequest = dftypes.google.cloud.dialogflow.cx.v3beta1.WebhookRequest;
  type WebhookResponse = dftypes.google.cloud.dialogflow.cx.v3beta1.WebhookResponse;

  const body = <WebhookRequest>req.body;
  console.log(body.languageCode);

  const response: WebhookResponse = new dftypes.google.cloud.dialogflow.cx.v3beta1.WebhookResponse();

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
