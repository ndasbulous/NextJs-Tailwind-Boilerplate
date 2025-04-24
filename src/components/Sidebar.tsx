import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-64 h-full bg-gray-800 text-white">
            <section className="p-4">
                <h2 className="text-lg font-bold">Dashboard</h2>
            </section>
            <nav className="mt-4">
                <ul>
                    <li className="hover:bg-gray-700">
                        <Link href="/dashboard">
                            <span className="block p-4">Dashboard Home</span>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-700">
                        <Link href="/profile">
                            <span className="block p-4">Profile</span>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-700">
                        <Link href="/settings">
                            <span className="block p-4">Settings</span>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-700">
                        <Link href="/reports">
                            <span className="block p-4">Reports</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};