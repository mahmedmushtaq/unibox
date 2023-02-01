import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { badRequestError, httpResponse } from '../../utils/response';
import { removeEmptyFieldFromObj } from '../../utils/helpers';
import { randomUUID } from 'crypto';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

const tableName = process.env.CATEGORIES_TABLE;

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    if (event.httpMethod !== 'POST') {
        throw new Error(`postMethod only accepts POST method, you tried: ${event.httpMethod} method.`);
    }

    if (!event.body) {
        return badRequestError('body is required');
    }
    const { name, iconLink } = JSON.parse(event.body);

    if (!name) {
        return badRequestError('name is required');
    }

    const item = { id: randomUUID(), name, iconLink };
    const tableParams = {
        TableName: tableName,
        Item: removeEmptyFieldFromObj(item),
    };

    try {
        await ddbDocClient.send(new PutCommand(tableParams));
    } catch (err) {
        console.log('Error', err);
        throw new Error('Error in dealing with dynamo db ' + JSON.stringify(err));
    }

    return httpResponse({ message: 'Record inserted successfully', item });
};
