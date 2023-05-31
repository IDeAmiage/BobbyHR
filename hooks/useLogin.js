import { useMutation } from 'react-query';
import pb from '@/lib/pocketbase';

export default function useLogin() {
    async function login({email, password}) {
        const authData = await pb.collection('users').authWithPassword(
            email,
            password,
        );
        document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
    }
    return useMutation(login);
}