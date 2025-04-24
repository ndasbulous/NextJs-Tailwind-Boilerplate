import Image from 'next/image';
import Link from 'next/link';

export default function Topbar() {
    return (
        <section className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <section className="flex items-center">
                <Image src="/logo.svg" alt="Logo" width={40} height={40} />
                <span className="ml-2 text-lg font-bold">Dashboard</span>
            </section>
            <nav className="flex items-center">
                <Link href="/profile" className="mr-4">
                    Profile
                </Link>
                <Link href="/logout" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                    Logout
                </Link>
            </nav>
        </section>
    );
};