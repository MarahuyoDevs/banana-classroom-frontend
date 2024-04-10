import type { PageServerLoad, Actions } from "./$types.js";
import { fail, redirect } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
import { getUser } from "../../database/crud/user.js";
import bcrypt from 'bcrypt'
import { jwtDecode, jwtEncode } from "$lib/utils.js";
 
export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(formSchema)),
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(formSchema));
    const dbUser = await getUser(form.data.email);
    if(!dbUser){
      return fail(400, {
        form: {
          ...form,
          errors: {
            ...form.errors,
            email: "Invalid email or password",
          },
        },
        message: "Invalid email or password",
      })
    }
    if(!(await bcrypt.compare(form.data.password,dbUser.password))){
      return fail(400, {
        form: {
          ...form,
          errors: {
            ...form.errors,
            password: "Invalid email or password",
          },
        },
        message: "Invalid email or password",
      })
    }
    const token = await jwtEncode({email:dbUser.email,role:dbUser.role})
    // convert to base 64
    const base64Token = Buffer.from(token).toString('base64')
    // save to cookie
    event.cookies.set('token',base64Token,{path:'/',maxAge:60*60*24,secure:true,
      httpOnly:true,
    })
    return redirect(307, "/home")
  },
};