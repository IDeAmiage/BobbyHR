'use client';
import React, {Fragment, useState} from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import {Dialog, Transition} from "@headlessui/react";
import pb from "@/lib/pocketbase";

async function updateSprint(id, data) {
  try {
    const record = await pb.collection('sprint').update(id, data);
  } catch (error) {
    console.log(error);
  }
}

async function addSprint(data) {
  try {
    const record = await pb.collection('sprint').create(data);
  } catch (error) {
    console.log(error);
  }
}

async function deleteSprint(id) {
  try {
    const record = await pb.collection('sprint').delete(id);
  } catch (error) {
    console.log(error);
  }
}


export function DeleteButton({ data }) {
  const { register, handleSubmit} = useForm();
  const router = useRouter();
  const sprint = JSON.parse(data);
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const refreshData = () => {
    router.replace('/internal/edition-des-sprints');
  }

  async function onSubmit() {
    await deleteSprint(sprint.id);
    closeModal();
    refreshData();
  }

  return (
    <div>
      <button onClick={openModal} type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Supprimer le sprint &quot;{sprint["numSprint"]}&quot; ?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Êtes-vous sûr de vouloir supprimer le sprint &quot;{sprint["numSprint"]}&quot; ? Cette action est irréversible.
                    </p>
                  </div>


                    <div className="mt-4">
                      <div className="mt-4">
                        <button
                          type="button"
                          className="bg-blue-100 text-blue-900 hover:bg-blue-200 focus-visible:ring-blue-500 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                          onClick={onSubmit}
                        >
                          Supprimer !
                        </button>
                      </div>
                    </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export function EditButton({ data }) {
  const { register, handleSubmit} = useForm();
  const router = useRouter();
  const sprint = JSON.parse(data);
  let [isOpen, setIsOpen] = useState(false)


  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const refreshData = () => {
    router.replace('/internal/edition-des-sprints');
  }

  async function onSubmit(form) {
    const updateData = {
      "dateDeb": form.dateDeb,
      "dateFin": form.dateFin,
      "nbSeanceM1": form.nbSeanceM1,
      "nbSeanceM2": form.nbSeanceM2,
      "numSprint": form.numSprint,
      "dateDebChoix": form.dateDebChoix,
    };
    await updateSprint(sprint.id, updateData);
    closeModal();
    refreshData();
  }

  return (
    <div>
      <button onClick={openModal} type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Editer le sprint &quot;{sprint.numSprint}&quot;
                  </Dialog.Title>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="pt-4">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Date de début
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="date"
                          defaultValue={new Date(sprint["dateDeb"]).toISOString().slice(0, 10)}
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          {...register("dateDeb")}
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Date de fin
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="date"
                          defaultValue={new Date(sprint["dateFin"]).toISOString().slice(0, 10)}
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          {...register("dateFin")}
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Nombre de séances de M1
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="number"
                          defaultValue={sprint["nbSeanceM1"]}
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          {...register("nbSeanceM1")}
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Nombre de séances de M2
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="number"
                          defaultValue={sprint["nbSeanceM2"]}
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          {...register("nbSeanceM2")}
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Numéro du sprint
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="number"
                          defaultValue={sprint["numSprint"]}
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          {...register("numSprint")}
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Date de début des choix de rôle
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="date"
                          defaultValue={new Date(sprint["dateDebChoix"]).toISOString().slice(0, 10)}
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          {...register("dateDebChoix")}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="bg-blue-100 text-blue-900 hover:bg-blue-200 focus-visible:ring-blue-500 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      >
                        Modifier !
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}


export function AddButton() {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const refreshData = () => {
    router.replace('/internal/edition-des-sprints');
  }

  async function onSubmit(data) {
    const addData = {
      "dateDeb": form.dateDeb,
      "dateFin": form.dateFin,
      "nbSeanceM1": form.nbSeanceM1,
      "nbSeanceM2": form.nbSeanceM2,
      "numSprint": form.numSprint,
      "dateDebChoix": form.dateDebChoix,
    };
    await addSprint(addData);
    closeModal();
    refreshData();
  }

  return (
    <div>
      <button onClick={openModal} type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          />
        </svg>
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Ajouter un sprint
                  </Dialog.Title>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="pt-4">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Date de début
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="date"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          {...register("dateDeb", {required: true})}
                        />

                      </div>
                    </div>
                    <div className="pt-4">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Date de fin
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="date"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          {...register("dateFin", {required: true})}
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Nombre de séances de M1
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="number"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Nombre"
                          {...register("nbSeanceM1", {required: true})}
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Nombre de séances de M2
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="number"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Nombre"
                          {...register("nbSeanceM2", {required: true})}
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Numéro du sprint
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="number"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Numéro"
                          {...register("numSprint", {required: true})}
                        />
                      </div>
                    </div>
                    <div className="pt-4">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Date de début des choix de rôle
                      </label>
                      <div className="relative mt-2 rounded-md shadow-sm">
                        <input
                          type="date"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          {...register("dateDebChoix", {required: true})}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="bg-blue-100 text-blue-900 hover:bg-blue-200 focus-visible:ring-blue-500 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      >
                        Créer !
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}