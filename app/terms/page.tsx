'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function TermsPage() {
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
        <title>Terms of Service | CasualCrave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Read CasualCrave's Terms of Service to understand our platform's usage rules." />
        <meta name="keywords" content="terms of service, casualcrave, user agreement" />
        <meta property="og:title" content="Terms of Service | CasualCrave" />
        <meta property="og:description" content="Understand the terms governing your use of CasualCrave's services." />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`min-h-screen px-4 py-20 sm:py-24 transition-colors ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <div className="fixed top-4 right-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleDarkMode}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-pink-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500"></div>
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Dark Mode</span>
          </label>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Terms of Service
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6">
            By using CasualCrave, you agree to these terms. Please read them carefully.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">User Conduct</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
            You agree to use CasualCrave respectfully, avoiding harassment, spam, or illegal activities.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Account Responsibility</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
            You are responsible for maintaining the security of your account and any actions taken under it.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Termination</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6">
            We reserve the right to terminate accounts that violate these terms.
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