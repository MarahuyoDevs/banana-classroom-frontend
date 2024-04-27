import { ClassroomSchema } from '$lib/database/schemas'
import { zod } from 'sveltekit-superforms/adapters'
import { type SuperValidated, type Infer } from 'sveltekit-superforms'
import { createDynamoDbClient } from '../utils'
import { GetItemCommand, PutItemCommand } from '@aws-sdk/client-dynamodb'
import { getUser, getUserByID } from './user'

export const createClassroom = async (input: SuperValidated<Infer<typeof ClassroomSchema>>) => {
    const client = await createDynamoDbClient();
    const item = new PutItemCommand({
        TableName: 'classrooms',
        Item: {
            id: { S: input.data.id },
            name: { S: input.data.name },
            description: { S: input.data.description },
            students: { SS: input.data.students },
            quizzes: { SS: input.data.quizzes },
            created_at: { S: input.data.createdAt },
            updated_at: { S: input.data.updatedAt }
        }
    })
    return await client.send(item)
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

    for (let studentID of response.Item?.students?.SS || []) {
        students.push(await getUserByID(studentID))
    }

    return {
        id: response.Item?.id?.S || '',
        name: response.Item?.name?.S,
        description: response.Item?.description?.S,
        students: students,
        quizzes: [],
        created_at: response.Item?.created_at?.S,
        updated_at: response.Item?.updated_at?.S
    }
}

export const deleteClassroomByID = async (id: string) => {

}