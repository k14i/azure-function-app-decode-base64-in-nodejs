import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const name = (req.query.name || (req.body && req.body.name));

    const buff = Buffer.from(name, 'base64')
    const responseMessage = buff.toString('utf-8')

    context.res = {
        body: responseMessage
    };

};

export default httpTrigger;