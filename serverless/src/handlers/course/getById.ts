import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';
import { badRequestError, httpResponse } from '../../utils/response';
import { TGenericObj } from '../../global/type';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

const tableName = process.env.COURSES_TABLE;

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getMethod only accepted, you tried: ${event.httpMethod}`);
    }

    const id = event.pathParameters?.id;

    if (!id) {
        return badRequestError('id is required');
    }

    const tableParams = {
        TableName: tableName,
        Key: { id: id },
    };

    let item: TGenericObj = {};
    try {
        const data = await ddbDocClient.send(new GetCommand(tableParams));
        item = data.Item as TGenericObj;
    } catch (err) {
        console.log('Error', err);
        throw new Error('Error in finding the item');
    }

    if (Object.keys(item).length === 0) {
        return badRequestError(`Item is not found by ${id}`);
    }

    return httpResponse({
        item,
    });
};
