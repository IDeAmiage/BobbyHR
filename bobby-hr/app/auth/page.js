'use client'

import { useUser } from "../util/auth/authService"
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import useLogin from "../util/auth/useLogin";

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const { user, valid }  = useUser()
    const { login, isLoading } = useLogin();
    const router = useRouter();

    async function onSubmit(data) {
        await login({email: data.email, password: data.password})
        console.log(user);
        if (user) {
            router.push(`/internal/${user.record.username}`);
        }
    }

    if (user && valid) {
        router.push(`/internal/${user.username}`);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="email" {...register("email")}/>
            <input type="password" placeholder="password" {...register("password")}/>
            <button type="submit" disabled={isLoading}>Log in</button>
        </form>
    );
};

export default LoginPage;