import { getUser } from "$lib/database/crud";
import { readClassroomByID } from "$lib/database/crud/classroom";
import { batchReadQuizByID } from "$lib/database/crud/quiz";
import { batchReadUserByEmail } from "$lib/database/crud/user";
import { jwtDecode } from "$lib/security";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies, params }) => {

    const user = await getUser((await jwtDecode(atob(cookies.get('token') || ''))).email)

    const classroom = await readClassroomByID(params.id)

    const students = await batchReadUserByEmail(classroom?.students.L)

    const quizzes = await batchReadQuizByID(classroom?.quizzes.L)
    return {
        user: user,
        classroom: classroom,
        quizzes: quizzes?.quizzes,
        students: students?.users,
    }

}