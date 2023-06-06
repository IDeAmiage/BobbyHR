"use client";

import pb from "@/lib/pocketbase";
import { useForm } from "react-hook-form";

function FormsRGPD({ demande }) {
    const { register, handleSubmit, reset, watch } = useForm();

    const watchVoeux0 = watch("0-projet", Object.entries(JSON.parse(demande))[0][0]);
    const watchVoeux1 = watch("1-projet", Object.entries(JSON.parse(demande))[0][0]);
    const watchVoeux2 = watch("2-projet", Object.entries(JSON.parse(demande))[0][0]);

    const watchVoeux = [watchVoeux0, watchVoeux1, watchVoeux2];

    async function recoverData() {
        console.log('reco')
       
    }

    async function deleteData() {
        console.log('reco')
       
    }

    return (
        <form
            // onSubmit={handleSubmit(onSubmit)}
            className="flex min-h-screen flex-col items-center justify-start gap-2 bg-white_background_bobby"
        >

            <div className="py-8">

                <h1 className="font-Playfair text-4xl font-extrabold text-black_bobby md:text-7xl">
                    Gestion des données personnelles
                </h1>
            </div>
            <ul className="flex flex-col">
                <li className="border-b-2 border-gray-100">
                    <div className={`flex items-center justify-start gap-4 border-transparent bg-transparent px-4 py-5`}>

                        <div className={`grow pr-4`}>Récupérer ses données personnelles</div>
                        <button
                            className="rounded-lg bg-brown_bobby px-12 py-2 font-Playfair text-lg font-medium text-white_background_bobby hover:scale-105"
                            type="button"
                            onClick={recoverData}
                        >
                            Récupérer
                        </button>
                    </div>
                </li>
                <li className="border-b-2 border-gray-100">
                    <div className={`flex items-center justify-start gap-4 border-transparent bg-transparent px-4 py-5`}>

                        <div className={`grow pr-4`}>Supprimer ses données personnelles</div>
                        <button
                            className="rounded-lg bg-brown_bobby px-12 py-2 font-Playfair text-lg font-medium text-white_background_bobby hover:scale-105"
                            type="button"
                            onClick={deleteData}
                        >
                            Supprimer
                        </button>
                    </div>
                </li>
            </ul>
        </form>
    );
}

export default FormsRGPD;
