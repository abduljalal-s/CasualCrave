/* eslint-disable @next/next/no-img-element */
'use client';

import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function ManagementPage() {
  return (
    <>
      <Head>
        <title>Management | CasualCrave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-center space-x-6 sm:space-x-8 text-sm sm:text-base">
        <Link href="/" className="hover:text-pink-400 transition">Home</Link>
        <Link href="/about" className="hover:text-pink-400 transition">About</Link>
        <Link href="/explore" className="hover:text-pink-400 transition">Explore</Link>
      </nav>

      <main className="bg-gray-900 text-white min-h-screen px-4 py-20 sm:py-24">
        <section className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Welcome to <span className="text-pink-500">CasualCrave</span> Management
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Handle your bookings, verify submissions, and keep the vibe professional and secure.
          </p>
        </section>

        <section className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl max-w-2xl mx-auto text-center">
          <img
            src="/images/management.jpg"
            alt="Team Manager"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto border-4 border-pink-500 mb-4 object-cover"
          />
          <h2 className="text-xl sm:text-2xl font-semibold mb-1">Jesse A</h2>
          <p className="text-pink-400 text-sm mb-2">Lead Manager, CasualCrave</p>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Managing quality, vetting clients, and keeping bookings smooth. Let’s keep it clean, fast, and reliable.
          </p>
        </section>
      </main>
    </>
  );
}
