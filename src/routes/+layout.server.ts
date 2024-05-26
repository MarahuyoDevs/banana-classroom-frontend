import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'
import { getUser } from '../lib/database/crud'
import { jwtDecode } from '$lib/security'
import type { User } from '$lib/database/types'

interface returnType {
    isLoggedIn: boolean
    userType: 'instructor' | 'student' | string
    userData: any
}

export const load: LayoutServerLoad = async ({ cookies }) => {
    const token = atob(cookies.get("token") || "")
    let returnResponse: returnType = {
        isLoggedIn: false,
        userType: 'student',
        userData: undefined
    }
    if (token) {

        const user = await getUser((await jwtDecode(token)).email)
        returnResponse.isLoggedIn = true
        if (user?.role.S) {
            returnResponse.userType = user.role.S
        }
        if (user) {
            returnResponse.userData = user
        }
    } else {
        returnResponse.isLoggedIn = false
    }
    return returnResponse
}