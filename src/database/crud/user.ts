import { UserSchema } from "../schemas";
import { z } from 'zod'
import { createDynamoDbClient } from "../utils";
import bcrypt from 'bcrypt'
import { PutItemCommand,GetItemCommand } from "@aws-sdk/client-dynamodb";

export async function createUser(user: z.infer<typeof UserSchema>) {
  const client = await createDynamoDbClient()
  const hashedPassword = await bcrypt.hash(user.password,10)
  const createUser = new PutItemCommand({
    TableName: 'users',
    Item: {
      id: { S: user.id },
      name: { S: user.name },
      email: { S: user.email },
      password: { S:hashedPassword},
      role: { S: user.role },
      classrooms: { SS: ["<empty>"]  },
      quizzes: { SS: ["<empty>"]  },
      quizzes_result: { SS: ["<empty>"]  },
      created_at: { S: user.createAt },
      updated_at: { S: user.updatedAt }
    }
  })
  const response = await client.send(createUser)
  if(response.$metadata.httpStatusCode !== 200){
    throw new Error('Failed to create user')
  }
  return user
}

export async function getUser(email: z.infer<typeof UserSchema>['email']):Promise<z.infer<typeof UserSchema>>{
    const client = await createDynamoDbClient()
    const getUser = new GetItemCommand({
      TableName: 'users',
      Key: {
        email: { S: email }
      }
    })
    const response = await client.send(getUser)
    if(response.$metadata.httpStatusCode !== 200){
      throw new Error('Failed to get user')
    }
    return {
        id: response.Item?.id.S!,
        name: response.Item?.name.S!,
        email: response.Item?.email.S!,
        password: response.Item?.password.S!,
        role: response.Item?.role.S! === "student" ? "student" : "instructor",
        classrooms: response.Item?.classrooms.SS! || [],
        quizzes: response.Item?.quizzes.SS! || [],
        quizzesResults: response.Item?.quizzes_result.SS! || [],
        createAt: response.Item?.created_at.S!,
        updatedAt: response.Item?.updated_at.S!
    }
}

export async function updateUser(id: string, user: z.infer<typeof UserSchema>) {
  // update user in database
}