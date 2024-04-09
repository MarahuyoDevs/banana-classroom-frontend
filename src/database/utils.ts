import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { SECRET_AWS_SECRET_KEY,SECRET_AWS_ACCESS_KEY } from "$env/static/private";

export async function createDynamoDbClient(){
    return new DynamoDBClient({
        region: "ap-southeast-1",
        credentials: {
            accessKeyId: SECRET_AWS_ACCESS_KEY!,
            secretAccessKey: SECRET_AWS_SECRET_KEY!,
        },
    });
}

export async function listTables() {
    const client = await createDynamoDbClient()
    const command = new ListTablesCommand({});
    const response = await client.send(command);
    return response.TableNames;
}