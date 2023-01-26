/* eslint-disable @typescript-eslint/ban-ts-comment */
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DeleteItemCommand, DeleteItemCommandInput, DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { badRequestError, httpResponse } from '../../utils/response';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

const tableName = process.env.CATEGORIES_TABLE;

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    if (event.httpMethod !== 'DELETE') {
        throw new Error(`deleteMethod only accepts DELETE method, you tried: ${event.httpMethod} method.`);
    }

    if (!event.body) {
        return badRequestError('body is required');
    }
    const id = event.pathParameters?.id;

    if (!id) {
        return badRequestError('id is required');
    }

    const tableParams: DeleteItemCommandInput = {
        TableName: tableName,
        Key: {
            id: { S: id },
        },
    };

    try {
        await ddbDocClient.send(new DeleteItemCommand(tableParams));
    } catch (err) {
        console.log('Error', err);
        throw new Error('Error in dealing with dynamo db ' + JSON.stringify(err));
    }

    return httpResponse({ message: 'Record deleted successfully' });
};
