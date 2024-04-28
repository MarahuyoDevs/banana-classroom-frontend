import { getUser } from "$lib/database/crud";
import { readClassroomByID } from "$lib/database/crud/classroom";
import { readQuizByID } from "$lib/database/crud/quiz";
import { jwtDecode } from "$lib/security";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, cookies }) => {

    const quiz = await readQuizByID(params.id)

    const user = await getUser((await jwtDecode(atob(cookies.get('token') || ''))).email)

    const classroom = await readClassroomByID(quiz?.classroomId?.S)

    return {
        user: user,
        quiz: quiz,
        classroom: classroom,
    }
}