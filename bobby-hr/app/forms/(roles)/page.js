'use client';

import {useForm} from "react-hook-form";
import "../../globals.css";

function RoleForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    console.log(errors);
    async function onSubmit(data) {
        //login({email: data.email, password: data.password});
        console.log(data);
        reset();
    }

    const users = [
        {
            name: "Eddie DePetbro",
            picture: "https://fancytailwind.com/static/profile10-9e05bd5638c669c34c11cb0462d95aa9.jpg",
            role: "Développeur",
            online: true,
            link: "#userProfile1"
        },
        {
            name: "Eddie DePetbro",
            picture: "https://fancytailwind.com/static/profile10-9e05bd5638c669c34c11cb0462d95aa9.jpg",
            role: "Scrum Master",
            online: true,
            link: "#userProfile1"
        }
    ]

    return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col min-h-screen justify-start items-center bg-white_background_bobby">
            <div className="py-8">
                <h1 className="text-7xl font-Playfair font-extrabold text-black_bobby">Choix rôles</h1>
            </div>
            <select {...register("Projet", { required: true })}>
                <option value="EMC">EMC</option>
            </select>
            <ul className="flex flex-col">
                {users.map(user => (
                    <li key={user.role} className="border-b-2 border-gray-100">
                        <div className={`py-5 px-4 flex justify-start border-transparent bg-transparent gap-4 items-center`}>
                            <div className={``}>
                                {user.role}
                            </div>
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
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
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
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
            <button type="submit">Envoyer</button>
        </form>
    </>);
}

export default RoleForm;

//Avec rôle, projet et nombre de M1 & M2 attendu

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="fname" value="John"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lname" value="Doe"><br><br>
//   <input type="submit" value="Submit">
//   </form>