export const httpResponse = (body: { [key: string]: any }, status = 200) => ({
    statusCode: status,
    headers: {
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
    },
    body: JSON.stringify(body),
});

export const badRequestError = (message: string) => httpResponse({ message }, 400);
