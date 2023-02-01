import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';
import { httpResponse } from '../../utils/response';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { getUniversityById } from '../../utils/helpers/api';
import { ICourseType } from '../../global/types/courseTypes';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

const tableName = process.env.COURSES_TABLE;

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
        items = data.Items?.map((item) => unmarshall(item) as ICourseType);
    } catch (err) {
        console.log('Error', err);
        throw new Error('[course] Error in retrieving all the courses');
    }

    // now fetch university record by id

    const itemsAsyncMap = items?.map(async (item) => {
        const universityItem = await getUniversityById(item.universityId, ddbDocClient);

        return {
            ...item,
            universityId: undefined,
            university: universityItem,
        };
    });

    const itemsMap = await Promise.all(itemsAsyncMap!);
    return httpResponse({
        items: itemsMap,
    });
};
