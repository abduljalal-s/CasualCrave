'use client';

import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// TEMP MOCK: Replace with real authentication
const getCurrentUser = () => {
  return { email: "nightmadecoder@gmail.com" }; // Change to test
};

export default function ManagementPage() {
  const [adminView, setAdminView] = useState(false);

  useEffect(() => {
    const user = getCurrentUser();
    setAdminView(user?.email === "nightmadecoder@gmail.com");
  }, []);

  return (
    <>
      <Head>
        <title>Management | CasualCrave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-gray-900 text-white px-6 py-4 shadow-md w-full flex justify-center space-x-6 sm:space-x-8 text-sm sm:text-base">
        <Link href="/" className="hover:text-pink-400 transition">Home</Link>
        <Link href="/about" className="hover:text-pink-400 transition">About</Link>
        <Link href="/explore" className="hover:text-pink-400 transition">Explore</Link>
      </nav>

      {/* Main */}
      <main className="bg-gray-900 text-white min-h-screen px-4 py-20 sm:py-24">
        {/* Header */}
        <section className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Welcome to <span className="text-pink-500">CasualCrave</span> Management
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Handle your bookings, verify submissions, and keep the vibe professional and secure.
          </p>
        </section>

        {/* Team Bio */}
        <section className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl max-w-2xl mx-auto text-center mb-12">
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

        {/* Admin Dashboard */}
        {adminView && (
          <section className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg max-w-4xl mx-auto space-y-10">
            <div className="text-center">
              <h3 className="text-xl font-bold text-pink-500 mb-2">🔐 Admin Panel</h3>
              <p className="text-gray-400 text-sm">Exclusive view for admin operations.</p>
            </div>

            {/* Report Summary */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">📊 Daily Report</h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="bg-gray-700 p-4 rounded-xl">
                  <p className="text-2xl font-bold text-pink-400">32</p>
                  <p className="text-sm text-gray-300">New Requests</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-xl">
                  <p className="text-2xl font-bold text-pink-400">12</p>
                  <p className="text-sm text-gray-300">Gift Cards</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-xl">
                  <p className="text-2xl font-bold text-pink-400">5</p>
                  <p className="text-sm text-gray-300">Verifications</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-xl">
                  <p className="text-2xl font-bold text-pink-400">19</p>
                  <p className="text-sm text-gray-300">Pending</p>
                </div>
              </div>
            </div>

            {/* Task Summary */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">📌 Task Center</h4>
              <ul className="space-y-2 text-left text-sm text-gray-300 list-disc list-inside">
                <li>Review new booking requests</li>
                <li>Approve or decline pending gift card submissions</li>
                <li>Respond to PayPal or PayID confirmation issues</li>
                <li>Schedule availability calendar update</li>
              </ul>
            </div>

            {/* Submission Logs */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">📥 Recent Submissions</h4>
              <ul className="bg-gray-700 p-4 rounded-xl text-sm text-left space-y-2 font-mono max-h-48 overflow-y-auto">
                <li className="text-pink-400">XXXX-ABCD-1234</li>
                <li className="text-pink-400">XXXX-EFGH-5678</li>
                <li className="text-pink-400">XXXX-IJKL-9012</li>
                {/* Add dynamic integration later */}
              </ul>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
