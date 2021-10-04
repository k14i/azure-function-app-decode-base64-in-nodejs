import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const body = (req.query.Body || (req.body && req.body.Body));

    const buff = Buffer.from(body, 'base64')
    const responseMessage = buff.toString('utf-8')

    context.res = {
        body: responseMessage
    };

};

export default httpTrigger;