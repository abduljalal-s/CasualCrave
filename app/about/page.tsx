'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AboutPage() {
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
        <title>About | CasualCrave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Learn about CasualCrave's mission to connect people through fun, low-pressure meetups." />
        <meta name="keywords" content="casual meetups, social events, networking, about casualcrave" />
        <meta property="og:title" content="About | CasualCrave" />
        <meta property="og:description" content="Discover how CasualCrave brings people together with verified, safe meetups." />
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
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-pink-500">CasualCrave</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6">
            CasualCrave is your go-to platform for connecting with others through fun, low-pressure meetups. Whether it’s a coffee chat, a board game night, or a casual hike, we make social connections effortless and enjoyable.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6">
            Our team, led by Alex, ensures every meetup is verified and secure. We’re passionate about fostering genuine connections in a safe, welcoming environment.
          </p>
          <Link
            href="/login"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition"
            aria-label="Join CasualCrave"
          >
            Join Now
          </Link>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-200 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl max-w-2xl mx-auto text-center"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            At CasualCrave, we believe everyone deserves meaningful connections without the stress. Our mission is to create a platform where people can meet, share experiences, and build friendships in a relaxed, authentic way.
          </p>
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