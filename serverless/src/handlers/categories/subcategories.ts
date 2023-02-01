import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, GetCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import { badRequestError, httpResponse } from '../../utils/response';
import { TGenericObj } from '../../global/types';
import { ICategoryType } from '../../global/types/categoryTypes';

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
    const { parentCategoryId, name, iconLink } = JSON.parse(event.body);

    if (!parentCategoryId || !name) {
        return badRequestError('parentCategoryId and name is required');
    }

    // fetch specific item
    const params = {
        TableName: tableName,
        Key: { id: parentCategoryId },
    };

    let item;

    try {
        const data = await ddbDocClient.send(new GetCommand(params));
        item = data.Item as ICategoryType;
    } catch (err) {
        console.log('Error', err);
    }

    const finalSubcategoryItem: TGenericObj = {};
    if (iconLink) {
        finalSubcategoryItem.iconLink = iconLink;
    }
    finalSubcategoryItem.name = name;

    const subCategories = !!item?.subCategories
        ? [...item.subCategories, finalSubcategoryItem]
        : [finalSubcategoryItem];

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
