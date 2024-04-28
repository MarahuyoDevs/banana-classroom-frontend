import { ClassroomSchema } from '$lib/database/schemas'
import { createDynamoDbClient } from '../utils'
import { GetItemCommand, PutItemCommand, UpdateItemCommand } from '@aws-sdk/client-dynamodb'
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

export const joinClassroom = async (email: string, classroomID: string) => {
    const client = await createDynamoDbClient();

    const user = await getUser(email)


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

    if (user.role === "student") {
        await client.send(new UpdateItemCommand({
            TableName: 'classrooms',
            Key: {
                id: { S: classroomID }
            },
            ExpressionAttributeNames: {
                "#S": "students"
            },
            ExpressionAttributeValues: {
                ":v": { L: [{ S: user.email }] },
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

    const students = []

    for (let studentEmail of response.Item?.students?.SS || []) {
        students.push(await getUser(studentEmail))
    }

    return {
        id: response.Item?.id?.S || '',
        name: response.Item?.name?.S,
        description: response.Item?.description?.S,
        instructor: response.Item?.instructor.S,
        students: students.map((value) => value.role !== 'instructor') || [],
        quizzes: [],
        created_at: response.Item?.created_at?.S,
        updated_at: response.Item?.updated_at?.S
    }
}

export const deleteClassroomByID = async (id: string) => {

}