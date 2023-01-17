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
                <Link href="/forms">
                    Roles
                </Link>
                <Link href="/role">
                    Choix_Roles
                </Link>
            </nav>
            <h1>Home</h1>
        </main>
        );
}