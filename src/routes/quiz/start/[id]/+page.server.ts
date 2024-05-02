import type { PageServerLoad } from "./$types";
import { readQuizByID } from "$lib/database/crud/quiz";

export const load: PageServerLoad = async ({ params }) => {
    // get the quiz from path
    const quiz = await readQuizByID(params.id)
    console.log(quiz)
    console.log(quiz.questions.L)
    return { quiz }
}