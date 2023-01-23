'use client'

import { useLogout, useUser } from "../../util/auth/authService";
import { useRouter } from 'next/navigation';

const InternalPage = () => {
    const { user, valid } = useUser();
    const logout = useLogout();
    const router = useRouter();
    console.log(user);
    if (!valid) {
        router.push("/auth");
    }

    return (
        <div>
            <h5>You are connected {user.username}</h5>
            <button onClick={logout}>Logout</button>
        </div>)
};

export default InternalPage