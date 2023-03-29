'use client';

import {useForm} from "react-hook-form";
import "../../globals.css";

function RoleForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    async function onSubmit(data) {
        //login({email: data.email, password: data.password});
        console.log(data);
        reset();
    }

    const users = [
        {
            role: "Développeur"
        },
        {
            role: "Scrum Master"
        }
    ];

    const project = [
        {
            name: "EMC"
        },
        {
            name: "Bobby"
        }
    ];

    return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col min-h-screen justify-start items-center bg-white_background_bobby gap-2">
            <div className="py-8">
                <h1 className="text-7xl font-Playfair font-extrabold text-black_bobby">Choix rôles</h1>
            </div>
            <select {...register("projet", { required: true })}>
                {project.map(project => (
                    <option key={project.name} value={project.name}>{project.name}</option>
                ))}
            </select>
            <ul className="flex flex-col">
                {users.map(user => (
                    <li key={user.role} className="border-b-2 border-gray-100">
                        <div className={`py-5 px-4 flex justify-start border-transparent bg-transparent gap-4 items-center`}>
                            <div className={`pr-4 grow`}>
                                {user.role}
                            </div>
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Nombre de M1
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="city"
                                        {...register(user.role + "M1", {})}
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
                                        name="city"
                                        {...register(user.role + "M2", {})}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                ))
                }
            </ul>
            <button className="px-12 py-2 bg-brown_bobby rounded-lg font-Playfair text-white_background_bobby text-lg font-medium hover:scale-105" type="submit">Envoyer</button>
        </form>
    </>);
}

export default RoleForm;