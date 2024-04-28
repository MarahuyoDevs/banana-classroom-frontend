import type { Actions, PageServerLoad } from "./$types.js";
import { superValidate } from "sveltekit-superforms";
import { ClassroomSchema } from "$lib/database/schemas.js";
import { zod } from "sveltekit-superforms/adapters";
import { fail, redirect } from "@sveltejs/kit";
import { jwtDecode } from "$lib/security.js";
import type { AuthTokenCredentials } from "$lib/database/types.js";
import { getUser } from "$lib/database/crud/user.js";
import { createClassroom } from "$lib/database/crud/classroom.js";
import { v4 as uuidv4 } from 'uuid';

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(ClassroomSchema)),
    };
};

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, zod(ClassroomSchema));

        const token: AuthTokenCredentials = await jwtDecode(atob(event.cookies.get('token') || ''))

        if (!form.valid) {
            return fail(400, {
                form,
            });
        }

        if (!token) {
            return fail(400, {
                form
            })
        }
        if (token.role !== 'instructor') {
            return fail(403, {
                form
            })
        }

        const user = await getUser(token.email)

        await createClassroom(ClassroomSchema.parse({
            id: uuidv4(),
            name: form.data.name,
            description: form.data.description,
            instructor: user.email,
        }))

        redirect(308, '/classrooms')

    },
};