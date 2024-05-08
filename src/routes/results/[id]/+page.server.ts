import { readQuizByID } from "$lib/database/crud/quiz";
import { readQuizResult } from "$lib/database/crud/quizresults";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async (event) => {
    const result = await readQuizResult(event.params.id);
    if (result) {
        return {
            result: result,
            quiz: await readQuizByID(result?.quizID?.S || '') || {}
        }
    }
}