import type { PageServerLoad, Actions } from './$types.js';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { formSchema } from './schema';
import { zod } from 'sveltekit-superforms/adapters';
import { UserSchema } from '../../lib/database/schemas.js';
import { createUser } from '../../lib/database/crud/user.js';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));
		if (form.data.password !== form.data.passwordConfirm) {
			return fail(400, {
				form: {
					...form,
					errors: {
						...form.errors,
						passwordConfirm: 'Passwords do not match'
					}
				},
				message: 'Passwords do not match'
			});
		}
		// send form to backend
		try {
			await createUser(
				UserSchema.parse({
					...form.data,
					role: form.data.userType === 'student' ? 'student' : 'instructor'
				})
			);
		} catch (e) {
			console.log(e)
			throw new Error('Failed to create user');
		}

		redirect(307, '/signin');
	}
};
