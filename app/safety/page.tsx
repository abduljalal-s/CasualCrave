'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function SafetyPage() {
  return (
    <>
      <Head>
        <title>Safety | CasualCrave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn about CasualCrave’s safety measures to ensure secure and enjoyable meetups for our community."
        />
        <meta name="keywords" content="safety, CasualCrave, community guidelines, secure meetups" />
        <meta property="og:title" content="Safety | CasualCrave" />
        <meta
          property="og:description"
          content="Discover how CasualCrave keeps your meetups safe with verified profiles and community guidelines."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-900 text-gray-100">
        <nav className="fixed top-0 left-0 right-0 bg-gray-800 shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/auth" className="text-2xl font-bold text-pink-500">
                CasualCrave
              </Link>
              <div className="flex gap-4 sm:gap-6">
                <Link href="/" className="text-gray-300 hover:text-pink-500 transition text-sm sm:text-base">
                  Home
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-pink-500 transition text-sm sm:text-base">
                  About
                </Link>
                <Link href="/privacy" className="text-gray-300 hover:text-pink-500 transition text-sm sm:text-base">
                  Terms & Privacy
                </Link>
                <Link href="/safety" className="text-pink-500 font-medium transition text-sm sm:text-base">
                  Safety
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              Safety at <span className="text-pink-500">CasualCrave</span>
            </motion.h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8">
              Your safety is our top priority. We’ve built CasualCrave to be a secure, welcoming space for all your meetups. From verified profiles to community guidelines, we’re here to ensure every connection is safe and fun.
            </p>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">Our Safety Measures</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-pink-500 mb-4">Verified Profiles</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Every user is verified to ensure authenticity, so you can connect with confidence.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-pink-500 mb-4">Community Guidelines</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Our rules promote respect and inclusivity, creating a vibe where everyone feels welcome.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-pink-500 mb-4">Secure Meetups</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  We provide tips and tools to plan safe, public meetups, so you can focus on the fun.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-pink-500 mb-4">24/7 Support</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Got a concern? Reach out to our team at support@casualcrave.com anytime.
                </p>
              </motion.div>
            </div>
            <p className="text-sm sm:text-base text-gray-300 text-center mt-8">
              “I always feel safe planning meetups with CasualCrave!” – <span className="text-pink-500">Liam R.</span>
            </p>
          </div>
        </section>

        <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800 text-center text-gray-400 text-xs sm:text-sm">
          <p>
            <Link href="/about" className="text-pink-500 hover:text-pink-600 transition">About Us</Link> | 
            <Link href="/terms-privacy" className="text-pink-500 hover:text-pink-600 transition ml-2">Terms & Privacy</Link> | 
            <Link href="/safety" className="text-pink-500 hover:text-pink-600 transition ml-2">Safety</Link>
          </p>
          <p className="mt-2">© 2025 CasualCrave. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}