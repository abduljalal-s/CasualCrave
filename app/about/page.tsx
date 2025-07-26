'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | CasualCrave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn about CasualCrave, the platform connecting people for fun, low-pressure meetups with a vibrant community."
        />
        <meta name="keywords" content="casual meetups, social platform, community, about CasualCrave" />
        <meta property="og:title" content="About Us | CasualCrave" />
        <meta
          property="og:description"
          content="Discover the mission behind CasualCrave and how we foster connections for casual meetups."
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
                <Link href="/login" className="text-gray-300 hover:text-pink-500 transition text-sm sm:text-base">
                  Login
                </Link>
                <Link href="/about" className="text-pink-500 font-medium transition text-sm sm:text-base">
                  About
                </Link>
                <Link href="/terms-privacy" className="text-gray-300 hover:text-pink-500 transition text-sm sm:text-base">
                  Terms & Privacy
                </Link>
                <Link href="/safety" className="text-gray-300 hover:text-pink-500 transition text-sm sm:text-base">
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
              About <span className="text-pink-500">CasualCrave</span>
            </motion.h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8">
              CasualCrave is your go-to platform for sparking connections and creating unforgettable moments. We’re all about bringing people together for fun, low-pressure meetups that vibe with your lifestyle. Whether it’s a coffee catch-up or a spontaneous night out, our community is built on trust, inclusivity, and good times.
            </p>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8">Our Mission</h2>
            <p className="text-sm sm:text-base text-gray-400 text-center mb-12">
              We’re here to make meeting new people effortless and exciting. Our mission is to foster a safe, vibrant community where mutuals can connect, share experiences, and shout out their favorite moments. Managed by Alex and our dedicated team, we prioritize your safety and privacy while keeping the energy high.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-pink-500 mb-4">Community First</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  Join over 1,000 users who’ve found their vibe with CasualCrave. From casual hangs to epic group meetups, our platform is all about real connections.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-pink-500 mb-4">Vibrant Vibes</h3>
                <p className="text-sm sm:text-base text-gray-300">
                  “CasualCrave turned my weekends into adventures!” – <span className="text-pink-500">Sarah K.</span> Shout out your mutuals and make every meetup count.
                </p>
              </motion.div>
            </div>
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