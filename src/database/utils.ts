import { DynamoDBClient, ListTablesCommand,CreateTableCommand } from "@aws-sdk/client-dynamodb";
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

export async function createTable(tableName:string,hashKey:string){
    const client = await createDynamoDbClient()
    const tables = await listTables() || []
    if(tables.includes(tableName)){
        return
    }
    const command = new CreateTableCommand({
        TableName: tableName,
        AttributeDefinitions: [
            {
                AttributeName: "id",
                AttributeType: "S",
            },
        ],
        KeySchema: [
            {
                AttributeName: "id",
                KeyType: "HASH",
            },
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5,
        },
    });
    const response = await client.send(command);
    return response;
}