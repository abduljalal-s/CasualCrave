// app/page.tsx
'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-br from-blue-50 to-purple-50 text-gray-900">
      <header className="flex justify-between items-center w-full max-w-4xl mb-8">
        <h1 className="text-3xl font-bold text-pink-500">CasualCrave</h1>
        <div>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition text-sm">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </header>

      <section className="text-center max-w-xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Welcome to <span className="text-pink-500">CasualCrave</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6">
          Connect with verified profiles for fun, low-pressure meetups.
        </p>
        <SignedOut>
          <Link
            href="/auth"
            className="inline-block px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition text-sm sm:text-base"
          >
            Get Started
          </Link>
        </SignedOut>
        <SignedIn>
          <Link
            href="/mng"
            className="inline-block px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition text-sm sm:text-base"
          >
            Go to Dashboard
          </Link>
        </SignedIn>
      </section>

      <footer className="mt-12 text-center text-gray-600 text-xs sm:text-sm">
        <p>
          <Link href="/about" className="text-pink-500 hover:text-pink-600 transition">About Us</Link> |{' '}
          <Link href="/privacy" className="text-pink-500 hover:text-pink-600 transition ml-2">Privacy Policy</Link> |{' '}
          <Link href="/terms" className="text-pink-500 hover:text-pink-600 transition ml-2">Terms of Service</Link> |{' '}
          <Link href="/safety" className="text-pink-500 hover:text-pink-600 transition ml-2">Safety Tips</Link>
        </p>
        <p className="mt-2">© 2025 CasualCrave. All rights reserved.</p>
      </footer>
    </main>
  );
} 