'use client'

import { useLogin, useUser } from "../util/auth/authService"
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const { register, handleSubmit } = useForm();
    const { user, valid }  = useUser()
    const router = useRouter();

    async function useLogUser(data) {
        const user = await useLogin({email: data.email, password: data.password}, false);
        console.log(user);
        if (user) {
            router.push(`/internal/${user.record.username}`);
            //router.push(`/internal`);
        }
    }

    if (user && valid) {
        router.push(`/internal/${user.username}`);
    }

    return (
        <form onSubmit={handleSubmit(useLogUser)}>
            <input placeholder="email" {...register("email")}/>
            <input type="password" placeholder="password" {...register("password")}/>
            <button type="submit">Log in</button>
        </form>
    );
};

export default LoginPage;