'use client';

import { UserButton, useUser } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, isSignedIn } = useUser();

  return (
    <nav className="bg-black text-white px-6 py-4 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-pink-500 tracking-wide cursor-pointer">
            CasualCrave
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-pink-400 transition">Home</Link>
          <Link href="/explore" className="hover:text-pink-400 transition">Explore</Link>
          <Link href="/about" className="hover:text-pink-400 transition">About</Link>
        </div>

        {/* Auth Buttons or User Profile */}
        <div className="hidden md:flex items-center space-x-4">
          {isSignedIn && user ? (
            <>
              <img
                src={user.imageUrl || "/default-profile.png"}
                alt="User Profile"
                className="w-10 h-10 rounded-full border-2 border-pink-500"
              />
              <span className="hidden sm:inline text-gray-300 text-sm">
                {user.primaryEmailAddress?.emailAddress}
              </span>
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <>
              <Link href="/login">
                <button className="text-sm px-4 py-2 border border-white rounded-full hover:bg-pink-500 hover:border-pink-500 transition">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="text-sm px-4 py-2 bg-pink-500 rounded-full hover:bg-pink-600 transition">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-pink-500 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-4 text-sm font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-pink-400 transition">Home</Link>
          <Link href="/explore" onClick={() => setMenuOpen(false)} className="block hover:text-pink-400 transition">Explore</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block hover:text-pink-400 transition">About</Link>
          <hr className="border-gray-700" />

          {isSignedIn && user ? (
            <div className="flex items-center space-x-3">
              <img
                src={user.imageUrl || "/default-profile.png"}
                alt="User Profile"
                className="w-10 h-10 rounded-full border-2 border-pink-500"
              />
              <span className="text-gray-300 text-sm">{user.primaryEmailAddress?.emailAddress}</span>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <>
              <Link href="/login" onClick={() => setMenuOpen(false)} className="block hover:text-pink-400 transition">Login</Link>
              <Link href="/signup" onClick={() => setMenuOpen(false)} className="block hover:text-pink-400 transition">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
