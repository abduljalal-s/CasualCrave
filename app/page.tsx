'use client';

import { SignIn, SignUp } from '@clerk/nextjs';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      <Head>
        <title>{isSignUp ? 'Sign Up' : 'Login'} | CasualCrave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Join or log in to CasualCrave to connect with verified profiles for casual meetups."
        />
        <meta name="keywords" content="casual meetups, social events, networking, sign up, log in" />
        <meta property="og:title" content={`${isSignUp ? 'Sign Up' : 'Sign In'} | CasualCrave`} />
        <meta
          property="og:description"
          content="Create an account or log in to start connecting with others for fun, low-pressure meetups."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-start min-h-screen px-4 py-8 sm:py-12 bg-gradient-to-br from-blue-50 to-purple-50 text-gray-900">
        <div className="fixed top-4 right-4 flex gap-2 sm:gap-3 z-30">
          <button
            onClick={toggleAuthMode}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition text-xs sm:text-sm font-medium ${
              isSignUp ? 'bg-pink-800 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label="Switch to Sign Up"
          >
            Sign Up
          </button>
          <button
            onClick={toggleAuthMode}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition text-xs sm:text-sm font-medium ${
              !isSignUp ? 'bg-pink-800 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label="Switch to Sign In"
          >
            Log In
          </button>
        </div>

        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-14 sm:top-16 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white text-xs sm:text-sm px-3 py-1.5 rounded-full shadow-lg z-20 max-w-[80vw] text-center"
            >
              {isSignUp ? 'Create an account to start connecting!' : 'Log in to explore meetups!'}
            </motion.div>
          )}
        </AnimatePresence>

        <section
          className={`text-center max-w-xl mx-auto mb-6 sm:mb-8 transition-all duration-300 ${
            isSignUp ? 'mt-16 sm:mt-20' : 'mt-12 sm:mt-16'
          }`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            {isSignUp ? 'Join' : 'Welcome Back to'} <span className="text-pink-500">CasualCrave</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            {isSignUp
              ? 'Sign up to connect with verified profiles for fun, low-pressure meetups. Your data is secure with us.'
              : 'Log in to start exploring casual meetups and connecting with others.'}
          </p>
          <p className="text-xs sm:text-sm text-gray-500">
            Managed by Alex for a safe and seamless experience.{' '}
            <Link href="/safety" className="text-pink-500 hover:text-pink-600 transition">
              Learn about our safety measures
            </Link>.
          </p>
        </section>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md bg-white p-4 sm:p-6 rounded-xl shadow-lg"
        >
          {isSignUp ? (
            <SignUp
              routing="hash"
              afterSignUpUrl="/mng"
              signInUrl="/auth"
              appearance={{
                elements: {
                  formButtonPrimary: 'bg-pink-500 hover:bg-pink-600 text-white rounded-full py-2 text-sm sm:text-base',
                  card: 'bg-transparent shadow-none',
                  headerTitle: 'hidden',
                  headerSubtitle: 'hidden',
                  formFieldInput: 'rounded-md border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 text-sm sm:text-base',
                  formFieldLabel: 'text-sm sm:text-base text-gray-700',
                  footer: 'text-xs sm:text-sm',
                },
                layout: {
                  socialButtonsVariant: 'iconButton',
                },
              }}
            />
          ) : (
            <SignIn
              routing="hash"
              afterSignInUrl="/mng"
              signUpUrl="/auth"
              appearance={{
                elements: {
                  formButtonPrimary: 'bg-pink-500 hover:bg-pink-600 text-white rounded-full py-2 text-sm sm:text-base',
                  card: 'bg-transparent shadow-none',
                  headerTitle: 'hidden',
                  headerSubtitle: 'hidden',
                  formFieldInput: 'rounded-md border-gray-300 focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 text-sm sm:text-base',
                  formFieldLabel: 'text-sm sm:text-base text-gray-700',
                  footer: 'text-xs sm:text-sm',
                },
                layout: {
                  socialButtonsVariant: 'iconButton',
                },
              }}
            />
          )}
        </motion.div>

        <section className="text-center max-w-xl mx-auto mt-6 sm:mt-8">
          <p className="text-gray-600 text-sm sm:text-base">
            “CasualCrave made meeting new people so easy and fun!” – <span className="text-pink-500">Jane D.</span>
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Join over 1,000 users connecting through casual meetups!
          </p>
        </section>

        <footer className="mt-8 sm:mt-12 text-center text-gray-600 text-xs sm:text-sm">
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