import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { httpResponse } from '../../utils/response';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { IUniversityType } from '../../global/types/universityTypes';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

const tableName = process.env.UNIVERSITY_TABLE;

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
        items = data.Items?.map((item) => unmarshall(item) as IUniversityType);
    } catch (err) {
        console.log('Error', err);
        throw new Error('[univerity] Error in retrieving all the universities');
    }

    return httpResponse({
        items,
    });
};
