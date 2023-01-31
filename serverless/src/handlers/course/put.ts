import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { badRequestError, httpResponse } from '../../utils/response';
import { uuid } from 'uuidv4';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

const tableName = process.env.COURSES_TABLE;

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    if (event.httpMethod !== 'POST') {
        throw new Error(`postMethod only accepts POST method, you tried: ${event.httpMethod} method.`);
    }

    if (!event.body) {
        return badRequestError('body is required');
    }
    const body = JSON.parse(event.body);

    const { name, description, websiteLink, universityId, startDate, location, discipline, degreeType, fee, duration } =
        body;

    // categories required the following datapoints
    // location, discripline, degreeType, fee, duration

    if (
        !name ||
        !description ||
        !websiteLink ||
        !universityId ||
        !startDate ||
        !location ||
        !discipline ||
        !degreeType ||
        !fee ||
        !duration
    ) {
        return badRequestError(
            'name, description,  websiteLink, universityId, startDate,  location, discipline, degreeType,  fee,  duration, all Fields are required',
        );
    }

    const item = { id: uuid(), slug: name.toLowerCase().replace(/ /g, '-'), ...body };
    const tableParams = {
        TableName: tableName,
        Item: item,
    };

    try {
        await ddbDocClient.send(new PutCommand(tableParams));
    } catch (err) {
        console.log('Error', err);
        throw new Error('Error in dealing with dynamo db ' + JSON.stringify(err));
    }

    return httpResponse({ message: 'Record inserted successfully', item });
};
