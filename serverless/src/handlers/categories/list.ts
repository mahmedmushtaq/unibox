/* eslint-disable @typescript-eslint/ban-ts-comment */
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { httpResponse } from '../../utils/response';
import { unmarshall } from '@aws-sdk/util-dynamodb';

const client = new DynamoDBClient({});

const tableName = process.env.CATEGORIES_TABLE;
const ddbDocClient = DynamoDBDocumentClient.from(client);

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getMethod only accepted, you tried: ${event.httpMethod}`);
    }

    const tableParams = {
        TableName: tableName,
    };
    let items;
    try {
        const data = await ddbDocClient.send(new ScanCommand(tableParams));
        items = data.Items?.map((item) => unmarshall(item));
    } catch (err) {
        console.log('Error', err);
        throw new Error('[categories] Error in retrieving all the categories');
    }

    return httpResponse({ items });
};
