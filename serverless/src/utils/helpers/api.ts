import { DynamoDBDocumentClient, GetCommand } from '@aws-sdk/lib-dynamodb';

const universityTable = process.env.UNIVERSITY_TABLE;

/**
 * please make you have set the proper IAM permission in your template.yaml file
 */
export const getUniversityById = async (id: string, ddbDocClient: DynamoDBDocumentClient) => {
    const universityTableParams = {
        TableName: universityTable,
        Key: { id },
    };

    let universityItem: any = {};
    try {
        const data = await ddbDocClient.send(new GetCommand(universityTableParams));
        universityItem = data.Item;
    } catch (err) {
        console.log('[apiHelper] Error in finding the universityItem', err);
    }

    return universityItem;
};
