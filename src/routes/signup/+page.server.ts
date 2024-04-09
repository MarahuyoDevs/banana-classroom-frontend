import type { PageServerLoad, Actions } from "./$types.js";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
 
export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(formSchema)),
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(formSchema));
    if(form.data.password !== form.data.passwordConfirm) {
      return fail(400, {
        form: {
          ...form,
          errors: {
            ...form.errors,
            passwordConfirm: "Passwords do not match",
          },
        },
        message: "Passwords do not match",
        
      })      
    }

    return {
      form,
    };
  },
};