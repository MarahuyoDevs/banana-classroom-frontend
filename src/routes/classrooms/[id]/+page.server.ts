import { getUser } from "$lib/database/crud";
import { readClassroomByID } from "$lib/database/crud/classroom";
import { jwtDecode } from "$lib/security";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies, params }) => {

    const user = await getUser((await jwtDecode(atob(cookies.get('token') || ''))).email)

    const classroom = await readClassroomByID(params.id)

    const students = []
    for (let student in classroom.students) {
        students.push(student)
    }

    return {
        user: user,
        classroom: classroom,
        students: students,
    }

}