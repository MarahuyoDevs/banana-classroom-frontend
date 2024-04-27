import type { Actions, PageServerLoad } from "./$types.js";
import { superValidate } from "sveltekit-superforms";
import { ClassroomSchema } from "$lib/database/schemas.js";
import { zod } from "sveltekit-superforms/adapters";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
    return {
        form: await superValidate(zod(ClassroomSchema)),
        dataType: 'form',
        resetForm: false
    };
};

export const actions: Actions = {
    default: async (event) => {
        const form = await superValidate(event, zod(ClassroomSchema));
        if (!form.valid) {
            return fail(400, {
                form,
            });
        }
        return {
            form,
        };
    },
};