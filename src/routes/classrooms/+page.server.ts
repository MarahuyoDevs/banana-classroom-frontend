import { getUser } from "$lib/database/crud";
import { readClassroomByID } from "$lib/database/crud/classroom";
import { jwtDecode } from "$lib/security";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {

    const user = await getUser((await jwtDecode(atob(cookies.get('token') || ''))).email)

    user.classrooms = user.classrooms.filter((value) => value !== '<empty>')
    user.quizzes = user.quizzes.filter((value) => value !== '<empty>')
    user.quizzesResults = user.quizzesResults.filter((value) => value !== '<empty>')
    const classrooms = []
    for (let classroom of user.classrooms) {
        classrooms.push(await readClassroomByID(classroom.S))
    }

    return {
        user: user,
        classrooms: classrooms
    }

}