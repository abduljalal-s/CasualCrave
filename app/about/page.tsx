import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white min-h-screen px-6 py-16 mt-21">
      <nav className="bg-black text-white px-6 py-4 shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex-1">
            <Link href="/">
              <span className="text-2xl font-bold text-pink-500 tracking-wide cursor-pointer">
                CasualCrave
              </span>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex-1 flex justify-center text-sm font-medium">
            <Link href="/" className="hover:text-pink-400 transition duration-150">
              Home
            </Link>
          </div>

          {/* Right: Placeholder or future actions */}
          <div className="flex-1" /> {/* empty flex to balance the layout */}
        </div>
      </nav>

      {/* Header Section */}
      <section className="text-center max-w-4xl mx-auto mt-40 mb-16">
        <h1 className="text-5xl font-bold text-pink-500 mb-6 drop-shadow-lg">
          About Casual Crave
        </h1>
        <p className="text-lg text-gray-300">
          Casual Crave is where honesty, chemistry, and freedom flourish. We created a space where real, judgment-free connections can bloom—bold, flirty, and true to your vibe.
        </p>
      </section>

      {/* Management Contact Form */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-400 mb-6 text-center">Get in Touch with Management</h2>
      </section>
    </main>
  );
}
