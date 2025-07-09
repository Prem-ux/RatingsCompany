import Link from 'next/link';

export default function Navigation() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                
                <div className="space-x-4">
                    <Link href="/" className="hover:text-gray-400">Home</Link>
                    <Link href="/dashboard" className="hover:text-gray-400">Dashboard</Link>
                    <Link href="/about" className="hover:text-gray-400">About</Link>
                </div>
            </div>
        </nav>
    )

}