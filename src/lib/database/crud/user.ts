import { UserSchema } from '../schemas';
import { z } from 'zod';
import { createDynamoDbClient } from '../utils';
import bcrypt from 'bcrypt';
import { PutItemCommand, GetItemCommand, AttributeValue, BatchGetItemCommand, UpdateItemCommand } from '@aws-sdk/client-dynamodb';

export async function createUser(user: z.infer<typeof UserSchema>) {
	const client = await createDynamoDbClient();
	const hashedPassword = await bcrypt.hash(user.password, 10);
	const createUser = new PutItemCommand({
		TableName: 'users',
		Item: {
			id: { S: user.id },
			name: { S: user.name },
			email: { S: user.email },
			password: { S: hashedPassword },
			role: { S: user.role },
			classrooms: { L: [] },
			quizzes: { L: [] },
			quizzes_result: { L: [] },
			created_at: { S: user.createAt },
			updated_at: { S: user.updatedAt }
		}
	});
	const response = await client.send(createUser);
	if (response.$metadata.httpStatusCode !== 200) {
		throw new Error('Failed to create user');
	}
	return user;
}

export async function getUser(
	email: z.infer<typeof UserSchema>['email']
) {
	const client = await createDynamoDbClient();
	const getUser = new GetItemCommand({
		TableName: 'users',
		Key: {
			email: { S: email }
		}
	});
	const response = await client.send(getUser);
	if (response.$metadata.httpStatusCode !== 200) {
		throw new Error('Failed to get user');
	}

	return response.Item;
}

export const batchReadUserByEmail = async (keyList: AttributeValue[]) => {
	if (keyList === undefined || keyList.length === 0) {
		return
	}
	const ids = Array.from(new Set(keyList.map((values) => values.S))).map((value) => ({ email: { S: value } }))

	const client = await createDynamoDbClient()

	const items = await client.send(new BatchGetItemCommand({
		RequestItems: {
			users: {
				Keys: ids
			}
		}
	}))

	return items.Responses

}

export async function getUserByID(id: string) {
	const client = await createDynamoDbClient()

	const getUser = new GetItemCommand({
		TableName: 'users',
		Key: {
			id: { S: id }
		}
	});

	const response = await client.send(getUser)

	if (response.$metadata.httpStatusCode !== 200) {
		throw new Error('Failed to get user');
	}

	return {
		id: response.Item?.id.S!,
		name: response.Item?.name.S!,
		email: response.Item?.email.S!,
		password: response.Item?.password.S!,
		role: response.Item?.role.S! === 'student' ? 'student' : 'instructor',
		classrooms: response.Item?.classrooms.L! || [],
		quizzes: response.Item?.quizzes.L! || [],
		quizzesResults: response.Item?.quizzes_result.L! || [],
		createAt: response.Item?.created_at.S!,
		updatedAt: response.Item?.updated_at.S!
	};
}

export async function updateUser(id: string, user: z.infer<typeof UserSchema>) {
	// update user in database
}

export async function saveQuizResultIdUserById(userEmail: string, resultID: string) {
	const client = await createDynamoDbClient();

	const user = await getUser(userEmail);

	if (!user) {
		return
	}

	user.quizzes_result.L?.push({ S: resultID })
	console.log(user.quizzes_result.L);
	const item = new UpdateItemCommand({
		TableName: 'users',
		Key: {
			email: { S: userEmail }
		},
		ExpressionAttributeNames: {
			"#Q": "quizzes_result"
		},
		ExpressionAttributeValues: {
			":v": { L: [{ S: resultID }] },
		},
		UpdateExpression: "SET #Q = list_append(#Q,:v)"
	})

	const response = await client.send(item)

	return resultID;
}
