import { ClassroomSchema } from '$lib/database/schemas'
import { createDynamoDbClient } from '../utils'
import { AttributeValue, BatchGetItemCommand, GetItemCommand, PutItemCommand, UpdateItemCommand } from '@aws-sdk/client-dynamodb'
import { getUser, getUserByID } from './user'
import { z } from "zod";

export const createClassroom = async (input: z.infer<typeof ClassroomSchema>) => {
    const client = await createDynamoDbClient();
    const item = new PutItemCommand({
        TableName: 'classrooms',
        Item: {
            id: { S: input.id },
            instructor: { S: input.instructor },
            name: { S: input.name },
            description: { S: input.description },
            students: { L: [] },
            quizzes: { L: [] },
            created_at: { S: input.createdAt },
            updated_at: { S: input.updatedAt }
        }
    })
    const response = await client.send(item)

    if (response.$metadata.httpStatusCode !== 200) {
        throw new Error('Failed to create classroom');
    }

    await joinClassroom(input.instructor, input.id)

}

interface DynamodbKeyType {
    S: string
}

export const batchReadClassrooms = async (keyList: AttributeValue[]) => {

    const ids = keyList.map((value) => ({ id: { S: value.S } }))

    const client = await createDynamoDbClient();

    const items = await client.send(new BatchGetItemCommand({
        RequestItems: {
            classrooms: {
                Keys: ids
            }
        }
    }))

    return items.Responses


}

export const joinClassroom = async (email: string, classroomID: string) => {
    const client = await createDynamoDbClient();

    const user = await getUser(email)

    const classroom = await readClassroomByID(classroomID)

    console.log(user)
    console.log(classroom)
    console.log(classroom?.quizzes.L)

    await client.send(new UpdateItemCommand({
        TableName: 'users',
        Key: {
            email: { S: email }
        },
        ExpressionAttributeNames: {
            "#Q": "quizzes"
        },
        ExpressionAttributeValues: {
            ":v": { L: classroom?.quizzes.L || [] },
            ":e": { L: [] }
        },
        UpdateExpression: "SET #Q = list_append(if_not_exists(#Q,:e),:v)"
    }))

    console.log('passed to')

    await client.send(new UpdateItemCommand({
        TableName: 'users',
        Key: {
            email: { S: email }
        },
        ExpressionAttributeNames: {
            "#C": "classrooms"
        },
        ExpressionAttributeValues: {
            ":v": {
                L: [{ S: classroomID }]
            },
        },
        UpdateExpression: "SET #C = list_append(#C,:v)"
    }))

    if (user.role.S === "student") {
        await client.send(new UpdateItemCommand({
            TableName: 'classrooms',
            Key: {
                id: { S: classroomID }
            },
            ExpressionAttributeNames: {
                "#S": "students"
            },
            ExpressionAttributeValues: {
                ":v": { L: [{ S: email }] },
            },
            UpdateExpression: "SET #S = list_append(#S, :v)"
        }))
    }

    return true

}

export const readClassroomByID = async (id: string) => {
    const client = await createDynamoDbClient();
    const item = new GetItemCommand({
        TableName: 'classrooms',
        Key: {
            id: { S: id }
        }
    })

    const response = await client.send(item);

    if (response.$metadata.httpStatusCode !== 200) {
        throw new Error('Failed to get classroom');
    }

    return response.Item
}

export const deleteClassroomByID = async (id: string) => {

}