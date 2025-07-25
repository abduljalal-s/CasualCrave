'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PrivacyPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  };

  return (
    <>
      <Head>
        <title>Privacy Policy | CasualCrave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Read CasualCrave's Privacy Policy to understand how we protect your data." />
        <meta name="keywords" content="privacy policy, casualcrave, data protection" />
        <meta property="og:title" content="Privacy Policy | CasualCrave" />
        <meta property="og:description" content="Learn how CasualCrave handles your personal information securely." />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`min-h-screen px-4 py-20 sm:py-24 transition-colors ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6">
            At CasualCrave, we prioritize your privacy. This policy explains how we collect, use, and protect your personal information.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Data Collection</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
            We collect information you provide during sign-up (e.g., email, name) and preferences (e.g., interests, location) to personalize your experience.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Data Usage</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
            Your data is used to verify bookings, recommend meetups, and improve our services. We do not sell your information to third parties.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6">
            We use encryption and secure servers to protect your data. All communications are handled via HTTPS.
          </p>
          <Link
            href="/auth"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition"
            aria-label="Join CasualCrave"
          >
            Get Started
          </Link>
        </motion.section>

        <footer className="mt-16 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>
            <Link href="/about" className="text-pink-500 hover:text-pink-600 transition">About Us</Link> | 
            <Link href="/privacy" className="text-pink-500 hover:text-pink-600 transition ml-2">Privacy Policy</Link> | 
            <Link href="/terms" className="text-pink-500 hover:text-pink-600 transition ml-2">Terms of Service</Link> | 
            <Link href="/safety" className="text-pink-500 hover:text-pink-600 transition ml-2">Safety Tips</Link>
          </p>
          <p className="mt-2">© 2025 CasualCrave. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}   