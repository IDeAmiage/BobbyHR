import { cookies } from 'next/headers';
import PocketBase from 'pocketbase';

export async function initPocketBaseSSR(req) {
    const pb = new PocketBase('https://pocketbase.idea-student.works');

    const cookie = req ? req.cookies : cookies();

    if (!cookie.has('pb_auth')) {
        return pb;
    }
    
    const cookieString = JSON.parse(cookie.get('pb_auth').value);

    pb.authStore.save(cookieString.token, cookieString.model);

    try {
        pb.authStore.isValid && await pb.collection('users').authRefresh();
    } catch (_) {
        pb.authStore.clear();
    }
    return pb
}