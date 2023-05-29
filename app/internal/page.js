
import Link from 'next/link';
import Image from 'next/image'
import logo from '@/public/image/idea-logo.png'
import welcome from '@/public/image/welcome.jpeg'
import NavBar from '@/components/nav-bar';


export default function AccueilPage() {
  return (
      <main className="flex flex-col bg-white_background_bobby">
        <NavBar/>

        <br/>

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

            <div className="pt-11">
                <div className="rounded-xl bg-[#E9E6E4] pl-6 text-2xl font-semibold text-[#63535B]"> MES TÂCHES </div>
                <div className="">
                    <table className="border-slate-500 w-full border-collapse border bg-[#CACACA]">
                        <thead className="text-lg text-[#63535B]">
                            <tr>
                                <th className="border-slate-600 border px-5 py-1.5 font-normal">EN COURS</th>
                                <th className="border-slate-600 border px-5 py-1.5 font-normal">DUREE ESTIMEE</th>
                                <th className="border-slate-600 border px-5 py-1.5 font-normal">COMMENTAIRES</th>
                            </tr>
                        </thead>
                        <tbody className="font-thin text-white">
                            <tr>
                                <td className="border-slate-600 border px-5 py-1.5">UI Page d&apos;accueil</td>
                                <td className="border-slate-600 border px-5 py-1.5">7</td>
                                <td className="border-slate-600 border px-5 py-1.5">Afficher nom projet, rôle, période, tâche</td>
                            </tr>
                            <tr>
                                <td className="border-slate-600 border px-5 py-1.5">UI Page d&apos;accueil</td>
                                <td className="border-slate-600 border px-5 py-1.5">7</td>
                                <td className="border-slate-600 border px-5 py-1.5">Afficher nom projet, rôle, période, tâche</td>
                            </tr>
                            <tr>
                                <td className="border-slate-600 border px-5 py-1.5">UI Page d&apos;accueil</td>
                                <td className="border-slate-600 border px-5 py-1.5">7</td>
                                <td className="border-slate-600 border px-5 py-1.5">Afficher nom projet, rôle, période, tâche</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <footer>

        </footer>
        </main>
  );
}