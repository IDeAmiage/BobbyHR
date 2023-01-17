import Link from 'next/link';
import './globals.css'
import 'feather-icons'

export default function HomePage() {
    return (
        <main>
            <h1 className="text-3xl underline">
                Hello world!
            </h1>
            <i data-feather="user"></i>
        </main>
    );
}