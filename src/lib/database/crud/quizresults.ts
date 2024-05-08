import { GetItemCommand, PutItemCommand } from "@aws-sdk/client-dynamodb"
import { QuizResultSchema } from "../schemas"
import { createDynamoDbClient } from "../utils"
import type { z } from "zod"

export const submitQuiz = async (data: z.infer<typeof QuizResultSchema>) => {
    const client = await createDynamoDbClient()

    const item = new PutItemCommand({
        TableName: "quizzesresult",
        Item: {
            id: { S: data.id },
            quizID: { S: data.quizID },
            userEmail: { S: data.userEmail },
            answers: {
                L: data.answers.map(value => ({
                    M: {
                        index: { S: value.index.toString() },
                        correctAnswer: { S: value.correctAnswer },
                        answer: { S: value.answer }
                    }
                })
                )
            },
            updatedAt: { S: data.updatedAt },
            score: { S: data.score }
        }
    })
    await client.send(item)

    return data.id
}

export const readQuizResult = async (id: string) => {
    const client = await createDynamoDbClient()

    const item = new GetItemCommand({
        TableName: "quizzesresult",
        Key: {
            id: { S: id }
        }
    })
    
    const response = await client.send(item)

    return response.Item
}
