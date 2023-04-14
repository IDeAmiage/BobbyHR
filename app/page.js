import Link from 'next/link';
import Image from 'next/image'
import logo from '@/public/image/idea-logo.png'

export default function HomePage() {
  return (
      <main>
          <nav>
              <Link href="/">Home</Link>
              <Link href="/auth">Auth</Link>
              <Link href="/demande-de-role">Choix</Link>
              <Link href="/home">CV</Link>
              <Link href="/edition-des-roles">Editer</Link>
              <Link href="/internal">Internal</Link>
              <Link href="/demande-de-personne">Roles</Link>
          </nav>
          <div className='flex justify-center'>
            <Image className='h-35 rounded-2xl w-40 bg-white_accent_bobby ' src={logo} alt="logo"/>
        </div>
        <div className='grid justify-items-center mt-5'>
            <h1 className="text-5xl font-bold font-serif mb-3"> IDeA </h1>
            <h2 className='text-4xl font-medium font-serif '>Data & Compute Science</h2>
            <h5 className='text-2xl font-serif font-extralight text-gray_bobby'>Startup toulousaine spécialisée dans le SI et traitement de données</h5>
        </div>
    </main>
  );
}