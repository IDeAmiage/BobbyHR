"use client";

import pb from "@/lib/pocketbase";
import { useForm } from "react-hook-form";
import useLogin from "@/hooks/useLogin";
import { Lock, User } from "react-feather";

const AuthUserForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { mutate: login, isLoading, isError } = useLogin();

  async function onSubmit(data) {
    login({ email: data.email, password: data.password });

    if (pb.authStore.isValid) {
      document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
    }

    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-4 flex flex-row items-center justify-center rounded-lg bg-gray_bobby p-2">
        <div className="pl-2 pr-4">
          <User className="stroke-brown_bobby" />
        </div>
        <input
          className="form-input border-0 bg-gray_bobby text-black_bobby"
          type="text"
          placeholder="Nom d'utilisateur/Email"
          {...register("email")}
        ></input>
      </div>
      <div className="my-4 flex flex-row items-center justify-center rounded-lg bg-gray_bobby p-2">
        <div className="pl-2 pr-4">
          <Lock className="stroke-brown_bobby" />
        </div>
        <input
          className="form-input border-0 bg-gray_bobby text-black_bobby"
          type="password"
          placeholder="Mot de passe"
          {...register("password")}
        ></input>
      </div>
      <div className="flex items-center justify-center py-4">
        <button
          className="rounded-lg bg-brown_bobby px-24 py-2 font-Playfair text-2xl font-medium text-white_background_bobby hover:scale-110"
          type="submit"
        >
          Connexion
        </button>
      </div>
    </form>
  );
};

export default AuthUserForm;
