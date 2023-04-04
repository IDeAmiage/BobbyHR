'use client';

import "../../globals.css";
import { useFormContext } from 'react-hook-form';

export default function Roles({roles}) {
    const { register } = useFormContext();
    
    return (
        <ul className="flex flex-col">
            {JSON.parse(roles).map(role => (
                <li key={role.type_role} className="border-b-2 border-gray-100">
                    <div className={`py-5 px-4 flex justify-start border-transparent bg-transparent gap-4 items-center`}>
                        <div className={`pr-4 grow`}>
                            {role.type_role}
                        </div>
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
    );
}