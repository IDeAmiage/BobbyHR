import Link from 'next/link';
import './globals.css'
import 'feather-icons'

export default function HomePage() {
    return (
        <main>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/login">Login</Link>
                <Link href="/auth">Auth</Link>
            </nav>
            <h1 className="text-3xl underline">
                Hello world!
            </h1>
            <i data-feather="user"></i>

        </main>
    );
}