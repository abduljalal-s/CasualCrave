'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SafetyPage() {
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
        <title>Safety Tips | CasualCrave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Stay safe with CasualCrave's safety tips for meetups." />
        <meta name="keywords" content="safety tips, casualcrave, meetup safety" />
        <meta property="og:title" content="Safety Tips | CasualCrave" />
        <meta property="og:description" content="Learn how to stay safe during CasualCrave meetups." />
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
            Safety Tips
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6">
            Your safety is our priority. Follow these tips to ensure a secure and enjoyable meetup experience.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Meet in Public</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
            Choose public, well-lit locations for meetups, such as cafes or parks.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Inform a Friend</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
            Share your meetup details with a trusted friend or family member.
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Report Issues</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6">
            If you encounter inappropriate behavior, contact Alex via Telegram or WhatsApp to report it.
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