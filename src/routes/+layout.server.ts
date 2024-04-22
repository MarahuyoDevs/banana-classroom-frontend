import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ cookies }) => {
    const token = cookies.get('token')

    return {
        isLoggedIn: token ? true : false
    }
}