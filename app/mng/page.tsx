"use client";

import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// TEMP MOCK: Replace with actual auth hook or Firebase method
const getCurrentUser = () => {
  // Simulate an authenticated user
  return { email: "nightmadecoder@gmail.com" }; // change this to test user/admin view
};

export default function Page() {


  const [adminView, setAdminView] = useState(false);


  useEffect(() => {
    const user = getCurrentUser();
    setAdminView(user?.email === "nightmadecoder@gmail.com");
  }, []);


  return (
    <>
      <Head>
        <title>Casual Crave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-gray-900 text-white px-6 py-4 shadow-md w-full flex justify-center space-x-8">
        <Link href="/" className="hover:text-pink-400 transition">Home</Link>
        <Link href="/about" className="hover:text-pink-400 transition">About</Link>
         <Link href="/explore" className="hover:text-pink-400 transition">explore</Link>
      </nav>

      {/* Main */}
      <div className="bg-gray-900 text-white min-h-screen py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-pink-500">Casual Crave</span>!
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Connect. Reserve. Feel the vibe 🔥
        </p>

        {/* Management */}
        <section className="bg-gray-800 p-8 rounded-2xl shadow-xl max-w-2xl mx-auto mb-16">
          <img
            src="/images/management.jpg"
            alt="Management"
            className="w-32 h-32 rounded-full mx-auto border-4 border-pink-500 mb-4"
          />
          <h2 className="text-2xl font-semibold mb-1">Management Team</h2>
          <p className="text-gray-400 text-sm mb-4">
            Professional. Discreet. Here to assist your reservations and handle all bookings securely.
          </p>
        </section>

   
      </div>
    </>
  );
}
