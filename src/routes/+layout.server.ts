import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'
import { getUser } from '../database/crud'
import { jwtDecode } from '$lib/security'

interface returnType {
    isLoggedIn: boolean
    userType: 'instructor' | 'student'
}

export const load: LayoutServerLoad = async ({ cookies }) => {
    const token = atob(cookies.get("token") || "")
    let returnResponse: returnType = {
        isLoggedIn: false,
        userType: 'student'
    }
    if (token) {
        const user = await getUser((await jwtDecode(token)).email)
        returnResponse.isLoggedIn = true
        returnResponse.userType = user.role
    } else {
        returnResponse.isLoggedIn = false
    }
    return returnResponse
}