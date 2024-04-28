import { getUser } from "$lib/database/crud";
import { joinClassroom } from "$lib/database/crud/classroom";
import { jwtDecode } from "$lib/security";
import type { Actions } from "./$types";

export const actions: Actions = {
    default: async (event) => {
        const form = await event.request.formData()
        const user = await getUser((await jwtDecode(atob(event.cookies.get('token') || ''))).email)
        console.log(user)
        await joinClassroom(user.email.S, form.get('classroomID')?.toString())

    }
}