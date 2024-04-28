import type { PageServerLoad, Actions } from "./$types.js";
import { fail, redirect } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
import { getUser } from "../../lib/database/crud/user.js";
import bcrypt from 'bcrypt'
import { jwtEncode } from "$lib/security";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(formSchema)),
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(formSchema));
    try {
      const dbUser = await getUser(form.data.email);

      if (!(await bcrypt.compare(form.data.password, dbUser.password.S))) {
        throw {
          heading: 'Invalid email or password',
          message: "Please make sure you have entered the correct email and password."
        }
      }
      if (dbUser.role.S !== form.data.userType) {
        throw {
          heading: 'Invalid role',
          message: "Please make sure you have selected the right role."
        }
      }
      const token = await jwtEncode({ email: dbUser.email.S, role: dbUser.role.S })
      // convert to base 64
      const base64Token = btoa(token)
      // save to cookie
      event.cookies.set('token', base64Token, {
        path: '/', maxAge: 60 * 60 * 24, secure: true,
        httpOnly: true,
      })
    } catch (e) {
      return fail(400, {
        form: form,
        message: e,
      })
    }
    redirect(303, "/home")
  },
};