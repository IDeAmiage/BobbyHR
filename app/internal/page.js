
import Link from 'next/link';
import Image from 'next/image'
import logo from '@/public/image/idea-logo.png'
import welcome from '@/public/image/welcome.jpeg'
import NavBar from '@/components/nav-bar';
import { read_last_sprint, read_sprint } from "@/lib/crud/sprintCrud";

async function getLastSprint() {
    return read_last_sprint();

}

export default async function AccueilPage() {
    const rolesData = read_sprint('9jn3owq12h8c4i0');
    const roles = await rolesData;
    console.log(roles)
  return (
      <main className="bg-white_background_bobby flex flex-col">
        <NavBar/>

        <br/>

        <div className="py-8 relative">
            <Image className="w-full" src={welcome} alt="Bienvenue"/>
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white place-self_center text-5xl justify-items-center font-bold font-serif mb-3 text-center max-sm:text-3xl"> Bienvenue Ziona !</h1>
        </div>

        <div className="font-Playfair">

            <div className="grid grid-cols-3 gap-4 text-center mx-6">
                <div className="bg-[#E9E6E4] text-[#63535B] rounded-xl flex-col">
                    <div className="pt-1 pt-2">PROJET</div>
                    <div className="py-4 text-3xl font-semibold max-sm:text-2xl">Bobby HR</div>
                </div>
                <div className="bg-[#63535B] text-[#E9E6E4] rounded-xl">
                    <div className="pt-1 pt-2">SPRINT</div>
                    <div className="py-4 text-3xl font-semibold max-sm:text-2xl">4</div>
                </div>
                <div className="bg-[#CACACA] text-[#63535B] rounded-xl">
                    <div className="pt-1 pt-2">RÔLE</div>
                    <div className="py-4 text-3xl font-semibold max-sm:text-2xl">SM</div>
                </div>
            </div>
        </div>

        <footer>

        </footer>
        </main>
  );
}