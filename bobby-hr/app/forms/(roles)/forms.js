'use client';

import "../../globals.css";
import pb from "../../util/pocketbase";
import { useForm, FormProvider } from "react-hook-form";
import Projects from "./project";
import Roles from "./roles";

function Forms({roles, projects, sprint}) {
    const methods = useForm();

    async function onSubmit(data) {
        const project = data.projet;
        delete data.projet;
        const res = {};
        for (const [key, value] of Object.entries(data)) {
            const role = key.split("-")[0];
            const promo = key.split("-")[1];
            
            res[role] = res[role] || {};
            res[role][promo] = value;
        };

        for (const [key, value] of Object.entries(res)) {
            try {
                const record = await pb.collection('demande').create({
                    "nbPlaceM1": value.M1,
                    "nbPlaceM2": value.M2,
                    "id_role": key,
                    "id_projet": project,
                    "id_sprint": "9jn3owq12h8c4i0"
                });
            } catch (e) {
                console.log(e);
            }     
        }
        methods.reset();
    }

    return (
    <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col min-h-screen justify-start items-center bg-white_background_bobby gap-2">
            <div className="py-8">
                <h1 className="text-7xl font-Playfair font-extrabold text-black_bobby">Choix rôles</h1>
            </div>
            <Projects projects={projects}/>
            <Roles roles={roles}/>
            <button className="px-12 py-2 bg-brown_bobby rounded-lg font-Playfair text-white_background_bobby text-lg font-medium hover:scale-105" type="submit">Envoyer</button>
        </form>
        <div className="py-4"></div>
    </FormProvider>
    );
}

export default Forms;