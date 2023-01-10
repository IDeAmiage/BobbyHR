import Link from 'next/link';

export default function HomePage() {
    return (
        <main>
            <nav>
                <Link href="/">
                    Home
                </Link>
                <Link href="/auth">
                    Login
                </Link>
            </nav>
            <h1>Home</h1>
        </main>
        );
}