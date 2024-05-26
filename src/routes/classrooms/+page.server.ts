import { getUser } from "$lib/database/crud";
import { batchReadClassrooms, readClassroomByID } from "$lib/database/crud/classroom";
import { batchReadQuizByID } from "$lib/database/crud/quiz";
import { jwtDecode } from "$lib/security";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {

    const user = await getUser((await jwtDecode(atob(cookies.get('token') || ''))).email)

    if (!user) {
        return {}
    }
    let classrooms = undefined;

    if (user.classrooms.L?.length || 0 > 1) {
        classrooms = await batchReadClassrooms(user.classrooms.L || [])
    }
    return {
        user: user,
        classrooms: classrooms?.classrooms || []
    }

}