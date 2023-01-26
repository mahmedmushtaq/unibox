import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import { badRequestError, httpResponse } from '../../utils/response';
import { uuid } from 'uuidv4';
import { removeEmptyFieldFromObj } from '../../utils/helpers';

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
    const { id, name } = JSON.parse(event.body);

    if (!id || !name) {
        return badRequestError('id and name is required');
    }

    // fetch specific item
    const params = {
        TableName: tableName,
        Key: { id: id },
    };

    let item;

    try {
        const data = await ddbDocClient.send(new GetCommand(params));
        item = data.Item as { name: string; subCategories: string[] };
    } catch (err) {
        console.log('Error', err);
    }

    const subCategories = !!item?.subCategories ? [...item.subCategories, name] : [name];

    // update specific item
    const tableParams = {
        TableName: tableName,
        Item: { ...item, subCategories },
    };

    try {
        await ddbDocClient.send(new PutCommand(tableParams));
    } catch (err) {
        console.log('Error', err);
        throw new Error('Error in dealing with dynamo db ' + JSON.stringify(err));
    }

    return httpResponse({ message: 'Record inserted successfully', item });
};
