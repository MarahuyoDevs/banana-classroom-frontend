import { createDynamoDbClient } from './utils';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';

export const UserSchema = z.object({
	id: z.string().default(uuidv4()),
	name: z.string(),
	email: z.string().email(),
	password: z.string(),
	role: z.enum(['student', 'instructor']),
	classrooms: z.array(z.string()).default([]),
	quizzes: z.array(z.string()).default([]),
	quizzesResults: z.array(z.string()).default([]),
	createAt: z.string().default(new Date().toISOString()),
	updatedAt: z.string().default(new Date().toISOString())
});

export const ClassroomSchema = z.object({
	id: z.string().default(uuidv4()),
	name: z.string(),
	description: z.string(),
	instructor: z.string(),
	students: z.array(z.string()).default([]),
	quizzes: z.array(z.string()).default([]),
	createdAt: z.string().default(new Date().toISOString()),
	updatedAt: z.string().default(new Date().toISOString())
});

const QuestionSchema = z.object({
	id: z.string().default(uuidv4()),
	type: z.enum(['multiple', 'identification']),
	text: z.string(),
	index: z.string(),
	options: z.array(z.string()),
	answer: z.string(),
	createdAt: z.string().default(new Date().toISOString()),
	updatedAt: z.string().default(new Date().toISOString())
});

export const QuizSchema = z.object({
	id: z.string().default(uuidv4()),
	classroomId: z.string(),
	name: z.string(),
	description: z.string(),
	questions: z.array(QuestionSchema),
	createdAt: z.string().default(new Date().toISOString()),
	updatedAt: z.string().default(new Date().toISOString())
});

export const QuizAnswerSchema = z.object({
	index: z.number(),
	answer: z.string(),
	correctAnswer: z.string()
});

export const QuizResultSchema = z.object({
	id: z.string().default(uuidv4()),
	userEmail: z.string(),
	quizID: z.string(),
	score: z.string(),
	answers: z.array(QuizAnswerSchema),
	createdAt: z.string().default(new Date().toISOString()),
	updatedAt: z.string().default(new Date().toISOString())
});
