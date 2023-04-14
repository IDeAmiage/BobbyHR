"use client";

import pb from "@/lib/pocketbase";
import { useForm } from "react-hook-form";

function FormsDemandeRole({ roles, projects, sprint }) {
  const { register, handleSubmit, reset } = useForm();

  async function onSubmit(data) {
    const project = data.projet;
    delete data.projet;
    const res = {};
    for (const [key, value] of Object.entries(data)) {
      const role = key.split("-")[0];
      const promo = key.split("-")[1];

      res[role] = res[role] || {};
      res[role][promo] = value;
    }

    for (const [key, value] of Object.entries(res)) {
      try {
        const record = await pb.collection("demande").create({
          nbPlaceM1: value.M1,
          nbPlaceM2: value.M2,
          id_role: key,
          id_projet: project,
          id_sprint: "9jn3owq12h8c4i0",
        });
      } catch (e) {
        console.log(e);
      }
    }
    reset();
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col min-h-screen justify-start items-center bg-white_background_bobby gap-2"
      >
        <div className="py-8">
          <h1 className="text-7xl font-Playfair font-extrabold text-black_bobby">
            Choix rôles
          </h1>
        </div>
        <select {...register("projet", { required: true })}>
          {JSON.parse(projects).map((project) => (
            <option key={project.id} value={project.id}>
              {project.nom}
            </option>
          ))}
        </select>
        <ul className="flex flex-col">
          {JSON.parse(roles).map((role) => (
            <li key={role.type_role} className="border-b-2 border-gray-100">
              <div
                className={`py-5 px-4 flex justify-start border-transparent bg-transparent gap-4 items-center`}
              >
                <div className={`pr-4 grow`}>{role.type_role}</div>
                <div className="sm:col-span-2 sm:col-start-1">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Nombre de M1
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      {...register(role.id + "-M1", {})}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Nombre de M2
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      {...register(role.id + "-M2", {})}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button
          className="px-12 py-2 bg-brown_bobby rounded-lg font-Playfair text-white_background_bobby text-lg font-medium hover:scale-105"
          type="submit"
        >
          Envoyer
        </button>
      </form>
      <div className="py-4"></div>
    </>
  );
}

export default FormsDemandeRole;
