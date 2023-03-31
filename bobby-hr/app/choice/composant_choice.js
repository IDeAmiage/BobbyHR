'use client'

import { useState, useEffect } from 'react';
import pb from '../util/pocketbase';
import { useForm } from "react-hook-form";
import { read_all_projet } from "../../crud/projetCrud"


export default function ChoicePage({projets, roles}) {
    const { register, handleSubmit } = useForm();
    async function RoleForm(data) {

        const choix1 = { projet: data.projet1, role: data.role1 };
        const choix2 = { projet: data.projet2, role: data.role2 };
        const choix3 = { projet: data.projet3, role: data.role3 };

        const createdRecord = await pb.collection('role').create({ 'projet': choix1.projet, 'type_role': choix1.role });
        const createdRecord2 = await pb.collection('role').create({ 'projet': choix2.projet, 'type_role': choix2.role });
        const createdRecord3 = await pb.collection('role').create({ 'projet': choix3.projet, 'type_role': choix3.role });
    }

    return (
        <form className="mt-4 grid justify-items-stretch" onSubmit={handleSubmit(RoleForm)}>
            <h1 className="text-brown_bobby text-4xl text-center">Période X </h1>
            <h2 className="text-center mt-7 text-2xl font-bold">Choix des rôles pour la période X</h2>
            <h5 className="text-center mt-10">
                Veuillez choisir dans l'ordre de vos préférences le rôle ainsi que le
                projet sur lequel vous souhaitez participer :
            </h5>

            <div className="flex items-start space-x-7 mt-4 place-content-center ">
                <div className="rounded-t bg-white_accent_bobby block text-center w-1/6 ">
                    <div className="mt-3">
                        <label className="text-xl font-bold" > Voeux 1 </label>
                    </div>
                    <div className="text-center grid justify-items-stretch border-t border-brown_bobby mt-3 ">
                        <p className="mb-2 mt-5 font-medium">Projet :</p>
                        <select className="mb-4 block py-1 bg-white border border-slate-300 rounded-md text-m shadow-sm" {...register("projet1")}>
                            <option></option>
                            {JSON.parse(projets).map(projet => (
                               <option value={projet.id} key={projet.id}>{projet.nomP}</option>
                            ))}
                                
                        </select>
                        <p className="mb-2 font-medium">Role :</p>
                        <select className="mb-4 block py-1 bg-white border border-slate-300 rounded-md text-m shadow-sm"{...register("role1")}>
                            <option></option>
                            {JSON.parse(roles).map(role => (
                               <option value={role.id} key={role.id}>{role.type_role}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="rounded-t bg-white_accent_bobby block text-center w-1/6">
                    <div className="mt-3">
                        <label className="text-xl font-bold" > Voeux 2 </label>
                    </div>
                    <div className="text-center grid justify-items-stretch border-t border-brown_bobby mt-3 ">
                        <p className="mb-2 mt-5 font-medium">Projet :</p>
                        <select className="mb-4 block py-1 bg-white border border-slate-300 rounded-md text-m shadow-sm" {...register("projet2")}>
                            <option></option>
                            {JSON.parse(projets).map(projet => (
                               <option value={projet.id} key={projet.id}>{projet.nomP}</option>
                            ))}
                        </select>
                        <p className="mb-2 font-medium">Role :</p>
                        <select className="mb-4 block py-1 bg-white border border-slate-300 rounded-md text-m shadow-sm" {...register("role2")}>
                            <option></option>
                            {JSON.parse(roles).map(role => (
                               <option value={role.id} key={role.id}>{role.type_role}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="rounded-t bg-white_accent_bobby block text-center w-1/6">
                    <div className="mt-3">
                        <label className="text-xl font-bold" > Voeux 3 </label>
                    </div>
                    <div className="text-center grid justify-items-stretch border-t border-brown_bobby mt-3 ">
                        <p className="mb-2 mt-5 font-medium">Projet :</p>
                        <select className="mb-4 block py-1 bg-white border border-slate-300 rounded-md text-m shadow-sm" {...register("projet3")}>
                            <option></option>
                            {JSON.parse(projets).map(projet => (
                               <option value={projet.id} key={projet.id}>{projet.nomP}</option>
                            ))}
                        </select>
                        <p className="mb-2 font-medium">Role :</p>
                        <select className="mb-4 block py-1 bg-white border border-slate-300 rounded-md text-m shadow-sm" {...register("role3")}>
                            <option></option>
                            {JSON.parse(roles).map(role => (
                               <option value={role.id} key={role.id}>{role.type_role}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <button className="justify-self-center mt-5 w-32 h-10 rounded-lg bg-brown_bobby font-medium text-white hover:bg-purple_bobby focus:outline-none focus:ring focus:ring-brown_bobby" type="submit">Valider</button>
        </form>
    );
};