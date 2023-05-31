"use client";

import pb from "@/lib/pocketbase";
import {useForm} from "react-hook-form";

function FormsDemandeRole({ demande }) {
  const {register, handleSubmit, reset, watch } = useForm();

  const watchVoeux0 = watch("0-projet", Object.entries(JSON.parse(demande))[0][0]);
  const watchVoeux1 = watch("1-projet", Object.entries(JSON.parse(demande))[0][0]);
  const watchVoeux2 = watch("2-projet", Object.entries(JSON.parse(demande))[0][0]);

  const watchVoeux = [watchVoeux0, watchVoeux1, watchVoeux2];

  async function onSubmit(data) {

    const res = [];
    for (const [key, value] of Object.entries(data)) {
      const index = parseInt(key.split("-")[0]);
      const val = key.split("-")[1];
      res[index] = res[index] || {};
      res[index][val] = value;
    }

    for (const [key, value] of Object.entries(res)) {
      const data = {
        "id_personne": pb.authStore.model.id,
        "id_demande": value["demande"],
        "numeroChoix": key
      };
      try {
        const record = await pb.collection('choix').create(data);
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex min-h-screen flex-col items-center justify-start gap-2 bg-white_background_bobby"
    >
      <div className="py-8">
        <h1 className="font-Playfair text-4xl font-extrabold text-black_bobby md:text-7xl">
          Demande de rôle
        </h1>
      </div>
      <ul className="flex flex-col">
        {[...Array(3).keys()].map((i) => (
          <li key={i} className="border-b-2 border-gray-100">
            <div className={`flex items-center justify-start gap-4 border-transparent bg-transparent px-4 py-5`}>
              <div className={`grow pr-4`}>Vœux {i+1}</div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Projet
                </label>
                <div className="mt-2">
                  <select {...register(i + "-projet", {required: true})}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    {Object.entries(JSON.parse(demande)).map((projet) => (
                      <option key={projet[0]} value={projet[0]}>
                        {projet[1]["nom"]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Rôle
                </label>
                <div className="mt-2">
                  <select {...register(i + "-demande", {required: true})}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    {JSON.parse(demande)[watchVoeux[i]]["roles"].map((role) => (
                      <option key={role.id} value={role.demande}>
                        {role["type_role"]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="rounded-lg bg-brown_bobby px-12 py-2 font-Playfair text-lg font-medium text-white_background_bobby hover:scale-105"
        type="submit"
      >
        Envoyer
      </button>
    </form>
  );
}

export default FormsDemandeRole;
