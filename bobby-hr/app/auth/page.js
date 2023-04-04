'use client'

import "../globals.css"
import pb from '../util/pocketbase';
import useLogin from '../util/hooks/useLogin';
import useLogout from '../util/hooks/useLogout';
import { useForm } from "react-hook-form";
import { Lock, User } from "react-feather";

const LoginPage = () => {
    const { register, handleSubmit, reset } = useForm();
    const { mutate: login, isLoading, isError } = useLogin();
    const logout = useLogout();

    const isLoggedIn = pb.authStore.isValid;

    async function onSubmit(data) {
        login({email: data.email, password: data.password});
        reset();
    }

    if (isLoggedIn) {
        document.cookie = pb.authStore.exportToCookie({httpOnly: false});
        return (
            <>
                <h1>Logged in : {pb.authStore.model.username}</h1>
                <button onClick={logout}>Log out</button>
            </>
        )
    } else {
        return (
            <main className="flex flex-col min-h-screen justify-center items-center bg-white_background_bobby">
                <div className="py-8">
                    <h1 className="text-7xl font-Playfair font-extrabold text-black_bobby">Connexion</h1>
                    {isError && <p>Something went wrong</p>}
                    {isLoading && <p>Loading...</p>}
                </div>
                <div className="flex-col">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-row justify-center items-center rounded-lg p-2 my-4 bg-gray_bobby">
                            <div className="pr-4 pl-2">
                                <User className="stroke-brown_bobby" />
                            </div>
                            <input className="form-input bg-gray_bobby text-black_bobby border-0" type="text" placeholder="Nom d'utilisateur/Email" {...register("email")}></input>
                        </div>
                        <div className="flex flex-row justify-center items-center rounded-lg p-2 my-4 bg-gray_bobby">
                            <div className="pr-4 pl-2">
                                <Lock className="stroke-brown_bobby" />
                            </div>
                            <input className="form-input bg-gray_bobby text-black_bobby border-0" type="password" placeholder="Mot de passe" {...register("password")}></input>
                        </div>
                        <div className="flex justify-center items-center py-4" >
                            <button className="px-24 py-2 bg-brown_bobby rounded-lg font-Playfair text-white_background_bobby text-2xl font-medium hover:scale-110" type="submit">Connexion</button>
                        </div>
                    </form>
                    <div className="flex justify-end">
                        <button className="font-Playfair text-gray_bobby/70 hover:text-black_bobby/70"> Mot de passe oublié ?</button>
                    </div>
                </div>
            </main>
        );
    }
};

export default LoginPage;