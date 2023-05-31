import pb from '@/lib/pocketbase';

export default function useLogout() {
    function logout() {
        pb.authStore.clear();
        document.cookie = 'pb_auth=; Max-Age=-99999999;';
    }

    return logout;
}