'use client'
import { delete_role, update_role, create_role } from "@/lib/crud/roleCrud"
import React, { useState  } from "react";
import Modal from 'react-modal'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';

export function DeleteButton({ idRole, typeRole }) {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();

    const refreshData = () => {
        router.replace('/editionRoles');
    }

    async function deleteRole(id) {
        delete_role(id);
        setIsOpen(false)
        refreshData()
    }

    return (<div>
        <a x-data="{ tooltip: 'Delete' }" href="#" onClick={() => setIsOpen(true)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                x-tooltip="tooltip"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
            </svg>
        </a>
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} ariaHideApp={false}>
            <h1>Voulez vous supprimer le rôle "{typeRole}"?</h1>
            <button onClick={() => setIsOpen(false)} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Annuler</button>
            <button onClick={() => deleteRole(idRole)}>Supprimer</button>
        </Modal>
    </div>
    );
}

export function EditButton({ idRole, typeRole }) {
    const { register, handleSubmit } = useForm();
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();

    const refreshData = () => {
        router.replace('/editionRoles');
    }
    async function RoleForm(data) {
        const newRoleData = { type_role: data.role }
        update_role(idRole, newRoleData)
        setIsOpen(false)
        refreshData()
    }

    return (<div>
        <a x-data="{ tooltip: 'Edite' }" href="#" onClick={() => setIsOpen(true)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                x-tooltip="tooltip"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
            </svg>
        </a>
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} ariaHideApp={false}>
            <h1>Modifier le rôle "{typeRole}"</h1>
            <form onSubmit={handleSubmit(RoleForm)}>
                <input type="text" id="newRole" {...register("role")} placeholder={typeRole}/>
                <button onClick={() => setIsOpen(false)}>Annuler</button>
                <button type="submit">Modifier rôle</button>
            </form>
        </Modal>
    </div>
    );
}

export function AddButton() {
    const { register, handleSubmit } = useForm();
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter();

    const refreshData = () => {
        router.replace('/editionRoles');
    }
    async function RoleForm(data) {
        const newRoleData = { type_role: data.role }
        create_role(newRoleData)
        setIsOpen(false)
        refreshData()
    }
    return (<div>
        <a x-data="{ tooltip: 'Add' }" href="#" onClick={() => setIsOpen(true)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                x-tooltip="tooltip"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                />
            </svg>
        </a>
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} ariaHideApp={false}>
            <h1>Ajouter un nouveau rôle</h1>
            <form onSubmit={handleSubmit(RoleForm)}>
                <input type="text" id="newRole" {...register("role")} />
                <button onClick={() => setIsOpen(false)}>Annuler</button>
                <button type="submit">Ajouter rôle</button>
            </form>
        </Modal>
    </div>
    );
}