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
      <div className="flex flex-row justify-center items-center rounded-lg p-2 my-4 bg-gray_bobby">
        <div className="pr-4 pl-2">
          <User className="stroke-brown_bobby" />
        </div>
        <input
          className="form-input bg-gray_bobby text-black_bobby border-0"
          type="text"
          placeholder="Nom d'utilisateur/Email"
          {...register("email")}
        ></input>
      </div>
      <div className="flex flex-row justify-center items-center rounded-lg p-2 my-4 bg-gray_bobby">
        <div className="pr-4 pl-2">
          <Lock className="stroke-brown_bobby" />
        </div>
        <input
          className="form-input bg-gray_bobby text-black_bobby border-0"
          type="password"
          placeholder="Mot de passe"
          {...register("password")}
        ></input>
      </div>
      <div className="flex justify-center items-center py-4">
        <button
          className="px-24 py-2 bg-brown_bobby rounded-lg font-Playfair text-white_background_bobby text-2xl font-medium hover:scale-110"
          type="submit"
        >
          Connexion
        </button>
      </div>
    </form>
  );
};

export default AuthUserForm;
