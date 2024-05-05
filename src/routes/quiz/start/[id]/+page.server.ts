import type { PageServerLoad, Actions } from "./$types";
import { readQuizByID } from "$lib/database/crud/quiz";

export const load: PageServerLoad = async ({ params }) => {
    // get the quiz from path
    const quiz = await readQuizByID(params.id)
    return { quiz }
}

export const actions: Actions = {
    default: async (event) => {
        const quiz = await readQuizByID(event.params.id)

        let score = 0;

        for (let [index, answer] of (await event.request.formData()).entries()) {
            let question = quiz.questions.L?.at(parseInt(index) - 1);
            if (question.M.answer.S === answer) {
                score += 1;
            }
        }
        // save this as a quiz result.
        console.log(score);
    }
}