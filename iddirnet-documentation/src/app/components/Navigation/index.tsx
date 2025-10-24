'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/dashboard' },
    { name: 'Code Structure', href: '/about' },
    { name: 'Testing', href: '/contact' },
    { name: 'Deployment', href: '/deployment' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col">
      {/* Logo Area */}
      <div className="p-6 border-b border-gray-100">
        <Link href="/" className="inline-block focus:outline-none">
          <Image
            src="/images/iddir.png"
            alt="IddirNet Logo"
            width={70}
            height={40}
            className="h-auto w-auto"
          />
        </Link>
       
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center w-full px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
              pathname === item.href
                ? 'bg-orange-50 text-orange-600 border-r-4 border-orange-500'
                : 'text-gray-700 hover:bg-gray-50 hover:text-orange-500'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}