import { QuestionSchema, QuizSchema } from '$lib/database/schemas'
import { v4 } from "uuid";
import type { PageServerLoad, Actions } from "./$types";
import { createQuiz } from '$lib/database/crud/quiz';
import { redirect } from '@sveltejs/kit';
import { getUser } from '$lib/database/crud';
import { jwtDecode } from '$lib/security';

export const load: PageServerLoad = async () => {
    return {

    }
}


export const actions: Actions = {
    default: async (event) => {
        const form = await event.request.formData()

        const questions = []
        let question: any = {}
        let choices = []
        let index = 1

        for (let [key, values] of form.entries()) {
            if (key === 'questionDescription') {
                question = {}
                choices = []
                question.text = values
                question.index = index.toString()
                index++
            }
            if (key === 'choiceSelection') {
                question.type = values
            }
            if (key.includes('questionChoice')) {
                choices.push(values)
            }
            if (key === 'questionAnswer') {
                question.answer = values
                question = await QuestionSchema.parseAsync({
                    id: v4(), options: choices, ...question
                })
                questions.push(question)
            }
        }

        const quiz = await QuizSchema.parseAsync({
            id: v4(),
            classroomId: event.params.id,
            name: form.get('name'),
            questions: questions,
            description: form.get('description')
        })

        const user = await getUser((await jwtDecode(atob(event.cookies.get('token') || ''))).email)
        await createQuiz(user.email.S, quiz)

        redirect(303, `/quiz/${quiz.id}`)
    }
}