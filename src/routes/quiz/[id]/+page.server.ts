import { getUser } from "$lib/database/crud";
import { readClassroomByID } from "$lib/database/crud/classroom";
import { readQuizByID } from "$lib/database/crud/quiz";
import { batchReadQuizResult } from "$lib/database/crud/quizresults";
import { jwtDecode } from "$lib/security";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, cookies }) => {

    const quiz = await readQuizByID(params.id)
    if (!quiz) {
        return
    }
    const user = await getUser((await jwtDecode(atob(cookies.get('token') || ''))).email)
    if (!user) {
        return
    }
    const classroom = await readClassroomByID(quiz?.classroomId?.S || '')
    const results = await batchReadQuizResult(user?.quizzes_result?.L || []);

    if (!results) {
        return
    }
    return {
        user: user,
        quiz: quiz,
        classroom: classroom,
        results: results.quizzesresult
    }
}