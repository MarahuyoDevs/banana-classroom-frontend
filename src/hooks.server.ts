import { jwtDecode } from "$lib/utils"
import { redirect, type Handle } from "@sveltejs/kit"

const UNPROTECTED_PATHS = [
    "/",
    "/signin",
    "/signup",
]

export const handle: Handle = async ({ event,resolve }) => {
        
    if(!UNPROTECTED_PATHS.includes(event.url.pathname)){
        try{
            const token = event.cookies.get('token')
            if(!token){
                throw new Error('No token found')
            }
            const decodedBase64Token = Buffer.from(token, 'base64').toString('utf-8');
            const decodedToken = await jwtDecode(decodedBase64Token)
            return await resolve(event)
        }catch(e){
            return new Response('Forbidden access',{
                'status':308,
                headers:{
                    'Location':'/signin'
                }
            })
        }
    }else if (UNPROTECTED_PATHS.includes(event.url.pathname) && event.cookies.get('token')){
        return new Response('Already logged in',{
            'status':308,
            'headers':{
                'Location':'/home'
            }
        })
    }
    return await resolve(event)
}