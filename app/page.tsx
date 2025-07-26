'use client';

import Navbar from '@/components/Navbar'; // Verify path
import { SignIn, SignUp } from '@clerk/nextjs';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false); // Default to login
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
          content="Log in or sign up to CasualCrave to connect with verified profiles for casual meetups."
        />
        <meta name="keywords" content="casual meetups, social events, networking, sign up, log in" />
        <meta property="og:title" content={`${isSignUp ? 'Sign Up' : 'Login'} | CasualCrave`} />
        <meta
          property="og:description"
          content="Log in or create an account to start connecting with others for fun, low-pressure meetups."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-20 bg-gray-100 text-gray-900">
        <Navbar /> {/* Navbar positioned at the top */}

        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white text-sm px-4 py-2 rounded-full shadow-lg z-20"
            >
              {isSignUp ? 'Create an account to start connecting!' : 'Log in to explore meetups!'}
            </motion.div>
          )}
        </AnimatePresence>
        
        <section className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {isSignUp ? 'Join' : 'Welcome Back to'} <span className="text-pink-500">CasualCrave</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            {isSignUp
              ? 'Sign up to connect with verified profiles for fun, low-pressure meetups. Your data is secure with us.'
              : 'Log in to start exploring casual meetups and connecting with others.'}
          </p>
          <p className="text-sm text-gray-500">
            Managed by Alex for a safe and seamless experience.{' '}
            <Link href="/safety" className="text-pink-500 hover:text-pink-600 transition">
              Learn about our safety measures
            </Link>.
          </p>
        </section>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={toggleAuthMode}
            className={`px-6 py-2 rounded-full transition ${
              isSignUp
                ? 'bg-pink-500 text-white'
                : 'bg-gray-300 text-gray-900'
            }`}
            aria-label="Switch to Sign Up"
          >
            Sign Up
          </button>
          <button
            onClick={toggleAuthMode}
            className={`px-6 py-2 rounded-full transition ${
              !isSignUp
                ? 'bg-pink-500 text-white'
                : 'bg-gray-300 text-gray-900'
            }`}
            aria-label="Switch to Sign In"
          >
            LogIn
          </button>
        </div>
      
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md bg-gray-200 p-6 rounded-xl shadow-xl"
        >
          {isSignUp ? (
            <SignUp
              routing="hash"
              afterSignUpUrl="/Mng"
              signInUrl="/auth"
              appearance={{
                elements: {
                  formButtonPrimary: 'bg-pink-500 hover:bg-pink-600 text-white rounded-full py-2',
                  card: 'bg-transparent shadow-none',
                  headerTitle: 'hidden',
                  headerSubtitle: 'hidden',
                },
              }}
            />
          ) : (
            <SignIn
              routing="hash"
              afterSignInUrl="/Mng"
              signUpUrl="/auth"
              appearance={{
                elements: {
                  formButtonPrimary: 'bg-pink-500 hover:bg-pink-600 text-white rounded-full py-2',
                  card: 'bg-transparent shadow-none',
                  headerTitle: 'hidden',
                  headerSubtitle: 'hidden',
                },
              }}
            />
          )}
        </motion.div>

        <section className="text-center max-w-2xl mx-auto mt-8">
          <p className="text-gray-600 text-sm">
            “CasualCrave made meeting new people so easy and fun!” – <span className="text-pink-500">Jane D.</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Join over 1,000 users connecting through casual meetups!
          </p>
        </section>
        
        <footer className="mt-12 text-center text-gray-600 text-sm">
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