'use client'
import Link from 'next/link';
import '../globals.css'
import Image from 'next/image'
import logo from '../assets/logo2.png'
import welcome from '../assets/welcome.jpeg'


export default function AccueilPage() {
  return (
      <main className="bg-white_background_bobby flex flex-col">
        <nav>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/auth">Auth</Link>
            <Link href="/choice">Choix</Link>
            <Link href="/cv">CV</Link>
        </nav>

        <br/>

        <div className="py-8 relative">
            <Image class="w-full" src={welcome} alt="Bienvenue"/>
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white place-self_center text-5xl justify-items-center font-bold font-serif mb-3 text-center max-sm:text-3xl"> Bienvenue Ziona !</h1>
        </div>

        <div class="font-Playfair">

            <div class="grid grid-cols-3 gap-4 text-center mx-6">
                <div class="bg-[#E9E6E4] text-[#63535B] rounded-xl flex-col">
                    <div class="pt-1 pt-2">PROJET</div>
                    <div class="py-4 text-3xl font-semibold max-sm:text-2xl">Bobby HR</div>
                </div>
                <div class="bg-[#63535B] text-[#E9E6E4] rounded-xl">
                    <div class="pt-1 pt-2">SPRINT</div>
                    <div class="py-4 text-3xl font-semibold max-sm:text-2xl">4</div>
                </div>
                <div class="bg-[#CACACA] text-[#63535B] rounded-xl">
                    <div class="pt-1 pt-2">RÔLE</div>
                    <div class="py-4 text-3xl font-semibold max-sm:text-2xl">SM</div>
                </div>
            </div>

            <div class="pt-11">
                <div class="bg-[#E9E6E4] text-[#63535B] text-2xl rounded-xl font-semibold pl-6"> MES TÂCHES </div>
                <div class="">
                    <table class ="border-collapse border border-slate-500 bg-[#CACACA] w-full">
                        <thead class="text-[#63535B] text-lg">
                            <tr>
                                <th class="border border-slate-600 py-1.5 px-5 font-normal">EN COURS</th>
                                <th class="border border-slate-600 py-1.5 px-5 font-normal">DUREE ESTIMEE</th>
                                <th class="border border-slate-600 py-1.5 px-5 font-normal">COMMENTAIRES</th>
                            </tr>
                        </thead>
                        <tbody class="text-white font-thin">
                            <tr>
                                <td class="border border-slate-600 py-1.5 px-5">UI Page d'accueil</td>
                                <td class="border border-slate-600 py-1.5 px-5">7</td>
                                <td class="border border-slate-600 py-1.5 px-5">Afficher nom projet, rôle, période, tâche</td>
                            </tr>
                            <tr>
                                <td class="border border-slate-600 py-1.5 px-5">UI Page d'accueil</td>
                                <td class="border border-slate-600 py-1.5 px-5">7</td>
                                <td class="border border-slate-600 py-1.5 px-5">Afficher nom projet, rôle, période, tâche</td>
                            </tr>
                            <tr>
                                <td class="border border-slate-600 py-1.5 px-5">UI Page d'accueil</td>
                                <td class="border border-slate-600 py-1.5 px-5">7</td>
                                <td class="border border-slate-600 py-1.5 px-5">Afficher nom projet, rôle, période, tâche</td>
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