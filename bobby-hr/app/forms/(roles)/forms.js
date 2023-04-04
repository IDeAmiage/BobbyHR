'use client';

import { useForm, FormProvider } from "react-hook-form";
import "../../globals.css";
import Projects from "./project";
import Roles from "./roles";

function Forms({roles, projects}) {
    const methods = useForm();

    async function onSubmit(data) {
        //login({email: data.email, password: data.password});
        console.log(data);
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
    </FormProvider>
    );
}

export default Forms;