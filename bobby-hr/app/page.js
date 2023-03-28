import Link from 'next/link';
import './globals.css'

export default function HomePage() {
  return (
      <main>
          <nav>
              <Link href="/">Home</Link>
              <Link href="/auth">Auth</Link>
              <Link href="/choice">Choix</Link>
              <Link href="/cv">CV</Link>
              <Link href="/forms">Roles</Link>
          </nav>
          <h1 className="text-3xl underline">
              Hello world!
          </h1>
      </main>
  );
}