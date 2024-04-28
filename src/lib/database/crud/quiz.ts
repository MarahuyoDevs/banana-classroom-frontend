import { AttributeValue, BatchGetItemCommand, GetItemCommand, PutItemCommand, UpdateItemCommand } from "@aws-sdk/client-dynamodb"
import { createDynamoDbClient } from "../utils"
import { z } from 'zod'
import type { QuizSchema } from "../schemas"
export const createQuiz = async (userEmail: string, data: z.infer<typeof QuizSchema>) => {
    const client = await createDynamoDbClient()

    const quizResponse = new PutItemCommand({
        TableName: "quizzes",
        Item: {
            id: { S: data.id },
            classroomId: { S: data.classroomId },
            name: { S: data.name },
            description: { S: data.description },
            questions: {
                L: data.questions.map(question => ({
                    M: {
                        id: { S: question.id },
                        type: { S: question.type },
                        text: { S: question.text },
                        index: { S: question.index },
                        answer: { S: question.answer },
                        options: { L: question.options ? question.options?.map(option => ({ S: option })) : [] },
                        createdAt: { S: question.createdAt },
                        updatedAt: { S: question.updatedAt }
                    }
                }))
            },
            createdAt: { S: data.createdAt },
            updatedAt: { S: data.updatedAt }
        }
    })

    await client.send(quizResponse)
    await addQuizToClassroom(data.id, data.classroomId)
    await addQuizToUser(userEmail, data.id)
}

export const addQuizToClassroom = async (quizId: string, classroomID: string) => {
    const client = await createDynamoDbClient()

    const response = new UpdateItemCommand({
        TableName: 'classrooms',
        Key: {
            id: { S: classroomID }
        },
        ExpressionAttributeNames: {
            "#Q": "quizzes"
        },
        ExpressionAttributeValues: {
            ":v": { L: [{ S: quizId }] },
        },
        UpdateExpression: "SET #Q = list_append(#Q,:v)"
    })

    await client.send(response)
}

export const addQuizToUser = async (userEmail: string, quizId: string) => {
    const client = await createDynamoDbClient()

    const response = new UpdateItemCommand({
        TableName: 'users',
        Key: {
            email: { S: userEmail }
        },
        ExpressionAttributeNames: {
            "#Q": "quizzes"
        },
        ExpressionAttributeValues: {
            ":v": { L: [{ S: quizId }] },
        },
        UpdateExpression: "SET #Q = list_append(#Q,:v)",
        ReturnValues: "UPDATED_NEW",
    })

    await client.send(response)
}

export const batchReadQuizByID = async (keyList: AttributeValue[]) => {

    const ids = keyList.map((values) => ({ id: { S: values.S } }))

    const client = await createDynamoDbClient()

    const items = await client.send(new BatchGetItemCommand({
        RequestItems: {
            quizzes: {
                Keys: ids
            }
        }
    }))

    return items.Responses

}

export const readQuizByID = async (quizID: string) => {
    const client = await createDynamoDbClient()

    const response = await client.send(new GetItemCommand({
        TableName: "quizzes",
        Key: {
            id: { S: quizID }
        }
    }))

    return response.Item

}

export const deleteQuizByID = async () => {

}