import pb from '../pocketbase';
import { useState } from 'react';

export default function useLogout() {
    const [dummy, setDummy] = useState(0);

    function logout() {
        pb.authStore.clear();
        setDummy(Math.random());
    }

    return logout;
}