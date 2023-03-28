'use client'
import Link from 'next/link';
import '../globals.css'
import Image from 'next/image'
import logo from '../assets/logo2.png'
import welcome from '../assets/welcome.jpeg'


export default function AccueilPage() {
  return (
      <main>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/auth">Auth</Link>
            <Link href="/choice">Choix</Link>
            <Link href="/cv">CV</Link>
        </nav>
        <div className='flex justify-center'>
            <Image className='h-35 rounded-2xl w-40 bg-white_accent_bobby ' src={logo} alt="logo"/>
        </div>
        <div className='grid justify-items-center mt-5'>
            <h1 className="text-5xl font-bold font-serif mb-3"> IDeA </h1>
            <h2 className='text-4xl font-medium font-serif '>Data & Compute Science</h2>
            <h5 className='text-2xl font-serif font-extralight text-gray_bobby'>Startup toulousaine spécialisée dans le SI et traitement de données</h5>
        </div> 
        <br/>
        <div class='py-8 bg-[url("../assets/welcome.jpeg")]'>
            <h1 className="place-self_center text-5xl justify-items-center font-bold font-serif mb-3 text-center"> Bienvenue Ziona !</h1>
        </div>

        <div class="font-['PlayFair Display Black']">
            <div class="grid grid-cols-3 gap-4 text-center">
                <div class="bg-[#E9E6E4] text-[#63535B] rounded-xl">
                    <div class="pt-1">PROJET</div>
                    <div class="py-4 text-3xl">Bobby HR</div>
                </div>
                <div class="bg-[#63535B] text-[#E9E6E4] rounded-xl">
                    <div class="pt-1">PERIODE</div>
                    <div class="py-4 text-3xl">4</div>
                </div>
                <div class="bg-[#CACACA] text-[#63535B] rounded-xl">
                    <div class="pt-1">RÔLE</div>
                    <div class="py-4 text-3xl">SM</div>
                </div>
            </div>
            <div class="pt-11">
                <div>MES TÂCHES</div>
                <div>
                    <tr>
                        <td>EN COURS</td>
                        <td>DUREE ESTIMEE</td>
                        <td>COMMENTAIRES</td>
                    </tr>
                </div>
            </div>
        </div>

        <footer></footer>
        </main>
  );
}