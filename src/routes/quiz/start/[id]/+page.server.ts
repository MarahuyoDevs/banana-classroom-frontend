import type { PageServerLoad, Actions } from "./$types";
import { readQuizByID } from "$lib/database/crud/quiz";
import { submitQuiz } from "$lib/database/crud/quizresults";
import { QuizResultSchema } from "$lib/database/schemas";
import { getUser, saveQuizResultIdUserById } from "$lib/database/crud/user";
import { jwtDecode } from "$lib/security";
import { v4 } from "uuid";
import { redirect } from "@sveltejs/kit";
import type { QuizAnswer } from "$lib/database/types";

export const load: PageServerLoad = async ({ params }) => {
    // get the quiz from path
    const quiz = await readQuizByID(params.id)
    return { quiz }
}

export const actions: Actions = {
    default: async (event) => {
        const quiz = await readQuizByID(event.params.id);
        const user = await getUser((await jwtDecode(atob(event.cookies.get('token') || ''))).email)
        let score = 0;
        let quizAnswerArray: QuizAnswer[] = []
        if (quiz) {
            for (let [index, answer] of (await event.request.formData()).entries()) {
                let question = quiz.questions.L?.at(parseInt(index) - 1);
                if (question && question.M && question.M.answer.S) {
                    if (question.M.answer.S.toLowerCase().trim() === answer.toString().toLowerCase().trim()) {
                        score += 1;
                    }
                    quizAnswerArray.push({
                        index: parseInt(index),
                        answer: answer.toString(),
                        correctAnswer: question.M.answer.S
                    })
                }
            }
        }
        if (user) {
            let results = QuizResultSchema.parse({
                id: v4(),
                userEmail: user.email.S,
                quizID: event.params.id,
                score: score.toString(),
                answers: quizAnswerArray
            })
            let id = await submitQuiz(results)
            if (await saveQuizResultIdUserById(user.email.S || '', id)) {
                redirect(303, `/results/${id}`)
            }
        }
    }
}