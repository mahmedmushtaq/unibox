import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';
import { badRequestError, httpResponse } from '../../utils/response';
import { unmarshall } from '@aws-sdk/util-dynamodb';
import { getUniversityById } from '../../utils/helpers/api';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

const tableName = process.env.COURSES_TABLE;

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`getMethod only accepted, you tried: ${event.httpMethod}`);
    }

    const id = event.pathParameters?.id; // id may be a unique id or slug

    if (!id) {
        return badRequestError('id is required');
    }

    const params = {
        TableName: tableName,
        FilterExpression: 'id = :id OR slug=:id',
        ExpressionAttributeValues: {
            ':id': { S: id },
        },
    };

    let item: any = {};
    try {
        const data = await ddbDocClient.send(new ScanCommand(params));
        item = data.Items?.[0];
    } catch (err) {
        console.log('Error', err);
        throw new Error('Error in finding the item');
    }

    const unmarshalItem = item ? unmarshall(item) : {};
    const uniId = unmarshalItem.universityId;

    const universityData = await getUniversityById(uniId, ddbDocClient);

    delete unmarshalItem.universityId;

    return httpResponse({
        item:
            Object.keys(unmarshalItem).length > 0
                ? {
                      ...unmarshalItem,
                      university: universityData,
                  }
                : {},
    });
};
