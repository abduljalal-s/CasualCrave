 'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function TermsPrivacyPage() {
  return (
    <>
      <Head>
        <title>Terms & Privacy | CasualCrave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Read CasualCrave's Terms of Service and Privacy Policy to understand our commitment to your privacy and platform usage guidelines."
        />
        <meta name="keywords" content="terms of service, privacy policy, CasualCrave, user agreement" />
        <meta property="og:title" content="Terms & Privacy | CasualCrave" />
        <meta
          property="og:description"
          content="Learn about the terms governing your use of CasualCrave and how we protect your privacy."
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
                <Link href="#" className="text-gray-300 hover:text-pink-500 transition text-sm sm:text-base">
                  Home
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-pink-500 transition text-sm sm:text-base">
                  About
                </Link>
                <Link href="/privacy" className="text-pink-500 font-medium transition text-sm sm:text-base">
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
          <div className="max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6"
            >
              Terms & <span className="text-pink-500">Privacy</span>
            </motion.h1>
            <p className="text-sm sm:text-base text-gray-300 text-center mb-8">
              At CasualCrave, we’re committed to creating a safe and fun environment for our community. Below are our Terms of Service and Privacy Policy to ensure transparency and trust.
            </p>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-pink-500">Terms of Service</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                By using CasualCrave, you agree to respect our community guidelines and use the platform for lawful, positive interactions. We reserve the right to moderate content and suspend accounts that violate these terms.
              </p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400">
                <li>Be respectful and inclusive in all interactions.</li>
                <li>Do not share personal information without consent.</li>
                <li>Follow local laws and regulations during meetups.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-pink-500">Privacy Policy</h2>
              <p className="text-sm sm:text-base text-gray-400 mb-4">
                Your privacy is our priority. We collect only the data necessary to provide a seamless experience, such as your profile information and meetup preferences, and protect it with industry-standard encryption.
              </p>
              <ul className="list-disc pl-6 text-sm sm:text-base text-gray-400">
                <li>We do not sell your personal data to third parties.</li>
                <li>You can manage your data preferences in your account settings.</li>
                <li>Contact us at support@casualcrave.com for data requests.</li>
              </ul>
            </motion.div>
            
            <p className="text-sm sm:text-base text-gray-300 text-center">
              “CasualCrave’s transparency makes me feel secure!” – <span className="text-pink-500">Mike T.</span>
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