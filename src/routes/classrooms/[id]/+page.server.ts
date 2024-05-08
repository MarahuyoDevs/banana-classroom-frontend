import { getUser } from "$lib/database/crud";
import { readClassroomByID } from "$lib/database/crud/classroom";
import { batchReadQuizByID } from "$lib/database/crud/quiz";
import { batchReadUserByEmail } from "$lib/database/crud/user";
import { jwtDecode } from "$lib/security";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies, params }) => {

    const user = await getUser((await jwtDecode(atob(cookies.get('token') || ''))).email)

    const classroom = await readClassroomByID(params.id)
    let students = undefined
    let quizzes = undefined
    if (classroom?.students?.L) {
        students = await batchReadUserByEmail(classroom?.students.L || [])
    }

    if (classroom?.quizzes?.L) {
        quizzes = await batchReadQuizByID(classroom?.quizzes.L || [])
    }


    return {
        user: user,
        classroom: classroom,
        quizzes: quizzes?.quizzes || [],
        students: students?.users || [],
    }

}