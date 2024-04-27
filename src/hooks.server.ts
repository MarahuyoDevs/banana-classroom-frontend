import { jwtDecode } from '$lib/security';
import { redirect, type Handle } from '@sveltejs/kit';

const UNPROTECTED_PATHS = ['/', '/signin', '/signup'];

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.searchParams.get('signout') === 'true') {
		console.log("logging out")
		event.cookies.set('token', "", {
			path: '/',
			maxAge: 0
		});
		return await resolve(event);
	}
	if (!UNPROTECTED_PATHS.includes(event.url.pathname)) {
		try {
			const token = event.cookies.get('token');
			if (!token) {
				throw new Error('No token found');
			}
			const decodedBase64Token = atob(token);
			const decodedToken = await jwtDecode(decodedBase64Token);
			return await resolve(event);
		} catch (e) {
			return new Response('Forbidden access', {
				status: 308,
				headers: {
					Location: '/signin'
				}
			});
		}
	} else if (UNPROTECTED_PATHS.includes(event.url.pathname) && event.cookies.get('token')) {
		return new Response('Already logged in', {
			status: 308,
			headers: {
				Location: '/home'
			}
		});
	}
	return await resolve(event);
};
