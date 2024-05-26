import { getUser } from '$lib/database/crud';
import { batchReadQuizResult } from '$lib/database/crud/quizresults';
import { batchReadQuizByID } from "$lib/database/crud/quiz";
import type { AuthTokenCredentials } from '$lib/database/types';
import { jwtDecode } from '$lib/security';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
    const token: AuthTokenCredentials = await jwtDecode(atob(cookies.get('token') || ''));
    const user = await getUser(token.email)
    if (!user) {
        return
    }
    if (!user?.quizzes_result?.L?.length) {
        return
    }
    const results = await batchReadQuizResult(user?.quizzes_result?.L || []);
    if (!results) {
        return
    }
    const quizzesList = results.quizzesresult.map((value) => value.quizID)
    const quizzes = await batchReadQuizByID(quizzesList || [])
    return { results: results?.quizzesresult || [], quizzes: quizzes?.quizzes.map((value) => ({ id: value.id.S, data: { ...value } })) || [] }
}