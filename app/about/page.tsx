"use client";

import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// TEMP AUTH MOCK
const getCurrentUser = () => {
  return { email: "nightmadecoder@gmail.com" }; // Simulate a logged-in client
};

export default function AboutPage() {
  const [user, setUser] = useState<{ email: string } | null>(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  return (
    <>
      <Head>
        <title>About – Casual Crave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center w-full">
        <div className="flex space-x-8">
          <Link href="/" className="hover:text-pink-400 transition">
            Home
          </Link>
          <Link href="/explore" className="hover:text-pink-400 transition">
            Explore
          </Link>
        </div>
        <div className="text-sm text-gray-400 hidden sm:block">
          Signed in as: <span className="text-white font-semibold">{user?.email}</span>
        </div>
      </nav>

      {/* About Section */}
      <main className="bg-gray-900 text-white py-20 px-6">
        <section className="max-w-4xl mx-auto bg-gray-800 p-10 rounded-3xl shadow-xl">
          <h1 className="text-4xl font-bold text-pink-500 mb-4 text-center">About Casual Crave</h1>
          <p className="text-lg text-gray-300 mb-6 text-center">
            Where exclusivity meets simplicity. Here’s everything you need to know about our vibe, mission, and what makes Casual Crave your go-to platform for premium experiences.
          </p>

          {/* Our Mission */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-2">🌟 Our Mission</h2>
            <p className="text-gray-400 mb-2">
              At <span className="text-white font-medium">Casual Crave</span>, our goal is to redefine how people connect, book, and explore exclusive social experiences. We believe in offering secure, seamless interactions between clients and venues, with privacy and elegance at the heart of every booking.
            </p>
            <p className="text-gray-400">
              Whether it's a low-key vibe or a high-profile occasion, we make sure your journey from discovery to reservation feels effortless.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-2">🚀 Why Choose Us</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>🔐 100% secure and discreet reservation system</li>
              <li>🎟️ Multiple payment options including Gift Cards, PayPal, and crypto wallets</li>
              <li>🎯 Tailored recommendations to match your taste and mood</li>
              <li>🧑‍💼 Dedicated management team to assist you anytime</li>
              <li>📱 Mobile-first interface with instant booking capabilities</li>
            </ul>
          </div>

          {/* The Experience */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-2">🎉 The Casual Crave Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-700 p-6 rounded-xl shadow-inner">
                <h3 className="text-xl font-semibold text-pink-400 mb-2">Seamless Booking</h3>
                <p className="text-gray-300">
                  Skip the hassle. Just a few taps and your experience is reserved. No waiting. No long forms.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-xl shadow-inner">
                <h3 className="text-xl font-semibold text-pink-400 mb-2">Real-time Communication</h3>
                <p className="text-gray-300">
                  Message the management directly through our platform for adjustments, questions, or preferences.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-xl shadow-inner">
                <h3 className="text-xl font-semibold text-pink-400 mb-2">Flexible Payments</h3>
                <p className="text-gray-300">
                  Use what suits you: Gift Cards, Wallets, PayPal. Instant confirmations included.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-xl shadow-inner">
                <h3 className="text-xl font-semibold text-pink-400 mb-2">Premium Support</h3>
                <p className="text-gray-300">
                  Our support team isn’t just available — they’re dedicated to delivering perfection.
                </p>
              </div>
            </div>
          </div>

          {/* Who We Serve */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-2">👥 Who We Serve</h2>
            <p className="text-gray-400">
              Our community is diverse — from globe-trotting professionals and influencers to first-time explorers of the nightlife or discreet social spaces. If you value seamless vibes and secure booking, you're in the right place.
            </p>
          </div>

          {/* Testimonials */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">💬 What People Are Saying</h2>
            <div className="space-y-6">
              <blockquote className="border-l-4 border-pink-500 pl-4 text-gray-300 italic">
                “Casual Crave took the stress out of planning. It’s discreet, smooth, and honestly kind of addictive.”
              </blockquote>
              <blockquote className="border-l-4 border-pink-500 pl-4 text-gray-300 italic">
                “I love how I can use gift cards to make a reservation in under a minute. Genius platform.”
              </blockquote>
              <blockquote className="border-l-4 border-pink-500 pl-4 text-gray-300 italic">
                “The vibe is top-tier. It feels like this platform was made for people like me.”
              </blockquote>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-2">💡 Our Values</h2>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Privacy is non-negotiable</li>
              <li>Speed and simplicity are essential</li>
              <li>Every user deserves elite-level care</li>
              <li>We move with the culture, not behind it</li>
              <li>Trust and vibes build our reputation</li>
            </ul>
          </div>

          {/* Visual Divider */}
          <div className="h-1 bg-pink-500 my-12 rounded-full w-1/2 mx-auto"></div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Ready to vibe with us?</h2>
            <p className="text-gray-400 mb-6">
              Dive into our explore page or start your first reservation. We’ll take it from there.
            </p>
            <Link
              href="/explore"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Explore Experiences
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
