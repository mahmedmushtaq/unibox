export const httpResponse = (body: { [key: string]: any }, status = 200) => ({
    statusCode: status,
    body: JSON.stringify(body),
});

export const badRequestError = (message: string) => httpResponse({ message }, 400);
