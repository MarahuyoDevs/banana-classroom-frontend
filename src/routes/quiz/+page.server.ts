import { getUser } from "$lib/database/crud";
import { batchReadQuizByID } from "$lib/database/crud/quiz";
import { jwtDecode } from "$lib/security";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {

    const user = await getUser((await jwtDecode(atob(cookies.get('token') || ''))).email)

    const quizzes = await batchReadQuizByID(user.quizzes.L)

    return {
        user: user,
        quizzes: quizzes.quizzes
    }
}