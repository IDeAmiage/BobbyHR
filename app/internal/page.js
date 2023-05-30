import Image from 'next/image'
import welcome from '@/public/image/welcome.jpeg'
import NavBar from '@/components/nav-bar';
import { read_last_sprint } from "@/lib/crud/sprintCrud";
import {initPocketBaseSSR} from "@/lib/pocketbasessr";

async function getLastSprint() {
  return read_last_sprint();
}

async function getSprint(pb, id) {
  return await pb.collection('sprint').getOne(id, {});
}

export default async function AccueilPage() {
  const pb = await initPocketBaseSSR();
  const rolesData = getSprint(pb, '9jn3owq12h8c4i0');
  const roles = await rolesData;
  console.log(roles)

  return (
      <main className="flex flex-col bg-white_background_bobby">
        <NavBar/>

        <div className="relative py-8">
            <Image className="w-full" src={welcome} alt="Bienvenue"/>
            <h1 className="place-self_center absolute left-1/2 top-1/2 mb-3 -translate-x-1/2 -translate-y-1/2 justify-items-center text-center font-serif text-5xl font-bold text-white max-sm:text-3xl"> Bienvenue Ziona !</h1>
        </div>

        <div className="font-Playfair">

            <div className="mx-6 grid grid-cols-3 gap-4 text-center">
                <div className="flex-col rounded-xl bg-[#E9E6E4] text-[#63535B]">
                    <div className="pt-2">PROJET</div>
                    <div className="py-4 text-3xl font-semibold max-sm:text-2xl">Bobby HR</div>
                </div>
                <div className="rounded-xl bg-[#63535B] text-[#E9E6E4]">
                    <div className="pt-2">SPRINT</div>
                    <div className="py-4 text-3xl font-semibold max-sm:text-2xl">4</div>
                </div>
                <div className="rounded-xl bg-[#CACACA] text-[#63535B]">
                    <div className="pt-2">RÔLE</div>
                    <div className="py-4 text-3xl font-semibold max-sm:text-2xl">SM</div>
                </div>
            </div>
        </div>
        </main>
  );
}