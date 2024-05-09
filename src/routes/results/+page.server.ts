import { getUser } from '$lib/database/crud';
import type { AuthTokenCredentials } from '$lib/database/types';
import { jwtDecode } from '$lib/security';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
    const token: AuthTokenCredentials = await jwtDecode(atob(cookies.get('token') || ''));
    const user = await getUser(token.email)
    console.log(user)

}