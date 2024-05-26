import { getUser } from '$lib/database/crud';
import { batchReadClassrooms } from '$lib/database/crud/classroom';
import { batchReadQuizByID } from '$lib/database/crud/quiz';
import { batchReadQuizResult } from '$lib/database/crud/quizresults';
import { jwtDecode } from '$lib/security';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {

    const user = await getUser((await jwtDecode(atob(event.cookies.get('token') || ''))).email)

    if (!user) {
        return {}
    }

    let classrooms = undefined;
    let quizzes = undefined;
    let results = undefined;
    let resultsQuiz = undefined;
    if (user.classrooms.L?.length || 0 > 1) {
        classrooms = await batchReadClassrooms(user.classrooms.L || [])
    }
    if (user.quizzes.L?.length || 0 > 1) {
        quizzes = await batchReadQuizByID(user?.quizzes?.L || [])
    }
    if (user?.quizzes_result?.L?.length || 0 > 1) {
        results = await batchReadQuizResult(user?.quizzes_result?.L || []);
    }
    const quizzesList = results?.quizzesresult.map((value) => value.quizID)
    resultsQuiz = await batchReadQuizByID(quizzesList || [])
    return {
        classrooms: classrooms?.classrooms || [],
        quizzes: quizzes?.quizzes || [],
        results: results?.quizzesresult || [],
        quizzesResult: quizzes?.quizzes.map((value) => ({ id: value.id.S, data: { ...value } })) || []
    }
}