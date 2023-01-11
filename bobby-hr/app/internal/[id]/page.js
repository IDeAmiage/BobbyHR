'use client'

import { useLogout, useUser } from "../../util/auth/authService";
import { useRouter } from 'next/navigation';

const InternalPage = () => {
    const { user, valid } = useUser();
    const router = useRouter();
    const useLog = () => {
        useLogout().then(_ => router.push("/"));
    }

    if (!user || !valid) {
        router.push("/auth");
    }

    return (
        <div>
            <h5>You are connected {user.username}</h5>
            <button onClick={useLog}>Logout</button>
        </div>)
};

export default InternalPage