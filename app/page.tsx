'use client';

import Navbar from '@/components/Navbar';
import { useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20 bg-gray-100 dark:bg-gray-900">
        <Navbar />
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Welcome to CasualCrave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Join CasualCrave to connect with verified profiles for fun, low-pressure meetups."
        />
        <meta name="keywords" content="casual meetups, social events, networking" />
        <meta property="og:title" content="Welcome to CasualCrave" />
        <meta
          property="og:description"
          content="Connect with others for fun, low-pressure meetups. Join our community today!"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Welcome to <span className="text-pink-500 dark:text-pink-400">CasualCrave</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-6">
            Connect with verified profiles for fun, low-pressure meetups. Join our community of over 1,000 users today!
          </p>
          {!isSignedIn ? (
            <Link
              href="/AuthPage"
              className="inline-block px-6 py-2 bg-pink-500 dark:bg-pink-600 text-white rounded-full hover:bg-pink-600 dark:hover:bg-pink-700 transition"
              
            >
              Get Started
            </Link>
          ) : (
            <Link
              href="/AuthPage"
              className="inline-block px-6 py-2 bg-pink-500 dark:bg-pink-600 text-white rounded-full hover:bg-pink-600 dark:hover:bg-pink-700 transition"
            >
              Go to Dashboard
            </Link>
          )}
        </motion.div>

        <section className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            “CasualCrave made meeting new people so easy and fun!” –{' '}
            <span className="text-pink-500 dark:text-pink-400">Jane D.</span>
          </p>
        </section>

        <footer className="mt-12 text-center text-gray-600 dark:text-gray-300 text-sm">
          <p>
            
            <Link href="/about" className="text-pink-500 dark:text-pink-400 hover:text-pink-600 dark:hover:text-pink-500 transition">
              About Us
            </Link>{' '}
     <Link href="/safety" className="text-pink-500 dark:text-pink-400 hover:text-pink-600 dark:hover:text-pink-500 transition">
              Safety Tips
            </Link>
          </p>
          <p className="mt-2">© 2025 CasualCrave. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}