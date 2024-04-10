import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().min(2).max(50),
	email: z.string().min(2).max(50),
	password: z.string().min(8).max(50),
	passwordConfirm: z.string().min(8).max(50),
	userType: z.enum(['student', 'instructor'])
});

export type FormSchema = typeof formSchema;
