'use client'

import pb from "../util/pocketbase"
import logout from "../util/auth/authService"
import { useForm } from "react-hook-form";
import { redirect } from "next/navigation";
import { useRouter } from 'next/router'

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const router = useRouter()

    async function login({ email, password }, isAdmin) {
        if (isAdmin) {
            const user = await pb.admins.authWithPassword(email, password);
            pb.authStore.exportToCookie();
            return user;
        } else {
            const user = await pb.collection('users').authWithPassword(email, password);
            pb.authStore.exportToCookie();
            return user;
        }
    }

    async function logout() {
        pb.authStore.clear();
        window.location.reload();
    }
    async function logUser(data) {
        const user = await login({ email: data.email, password: data.password }, false);
        // console.log(user);
        window.location.reload();
    }

    if (pb.authStore.isValid) {
        return (<div><h1>Already logged in</h1><button onClick={logout}>Log out</button></div>);
    } else {
        return (
            <form onSubmit={handleSubmit(logUser)}>
                <input placeholder="email" {...register("email")} />
                <input type="password" placeholder="password" {...register("password")} />
                <button type="submit">Log in</button>
            </form>
        );
    }
};

export default LoginPage;