"use client";
import Link from 'next/link';



export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="bg-white/70 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl p-6 max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-pink-600">
          RG.dev
        </Link>
        <div className="flex gap-8 items-center text-slate-600 dark:text-slate-300 font-medium">
          
        <Link href="/projects" className="hover:text-pink-600 transition">
        Projects
        </Link>
          <Link href="/#about" className="hover:text-pink-600 hover:underline transition">About</Link>
          <Link href="/#services" className="hover:text-pink-600 transition hover:underline">Services</Link>
          <Link href="/#contact" className="hover:text-pink-600 transition hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}