'use client';

import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// Updated profiles with verification status and interests for personalization
const profiles = [
  {
    name: "Baby A",
    role: "Worthy~One",
    desc: "Start here. Alex verifies you, walks you through the trade, and opens the vibe 💬",
    bookings: 120,
    lastActive: "Now",
    verified: true,
    interests: ["coffee", "networking"],
  },
  {
    name: "Maya",
    role: "Verified Talent",
    desc: "Sweet-n-sassy blend. Soft voice, hard standards 💫",
    bookings: 85,
    lastActive: "2h ago",
    verified: true,
    interests: ["music", "nightlife"],
  },
  {
    name: "Viv",
    role: "Verified Talent",
    desc: "Late-night convos, daylight class ✨",
    bookings: 95,
    lastActive: "Now",
    verified: false,
    interests: ["hiking", "social"],
  },
  {
    name: "sun flower",
    role: "Verified Talent",
    desc: "Edge of mystery, core of warmth 🌹",
    bookings: 60,
    lastActive: "1h ago",
    verified: true,
    interests: ["art", "coffee"],
  },
  {
    name: "Mean Lady",
    role: "Verified Talent",
    desc: "Graceful energy and premium connections 🌙",
    bookings: 110,
    lastActive: "Now",
    verified: true,
    interests: ["networking", "social"],
  },
];

// Mock testimonials for social proof
const testimonials = [
  { name: "Jane D.", quote: "Met amazing friends at a CasualCrave coffee meetup!" },
  { name: "Mike S.", quote: "Alex made booking so easy and safe. Highly recommend!" },
  { name: "Sara K.", quote: "Love the vibe of CasualCrave events. Always a great time!" },
];

// Mock user preferences for personalization
   
export default function ManagementPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [showPopout, setShowPopout] = useState(false);
  const [showConnectPopout, setShowConnectPopout] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [feedback, setFeedback] = useState("");

  // Filter profiles by search only (dropdown removed)
  const filtered = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleProfileClick = (name: string) => {
    if (!selected && !isLoading) {
      setSelected(name);
      setIsLoading(true);
      setProgress(2);

      setTimeout(() => {
        setIsLoading(false);
        setShowPopout(true);
      }, 7000);
    }
  };

  const handleOpenConnectPopout = () => {
    setShowPopout(false);
    setShowConnectPopout(true);
  };

  const handleClosePopout = () => {
    setShowPopout(false);
    setShowConnectPopout(false);
    setSelected(null);
    setIsLoading(false);
    setProgress(1);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setProgress(e.target.value ? 1 : 0);
  };

  const copyShareLink = (name: string) => {
    const link = `https://casualcrave.com/profile/${encodeURIComponent(name)}`;
    navigator.clipboard.writeText(link);
    alert("Profile link copied to clipboard!");
  };

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Feedback submitted: ${feedback}`);
    setFeedback("");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Calculate star rating based on bookings (1-5 stars)
  const getStarRating = (bookings: number) => {
    const maxBookings = 120; // Max bookings in dataset
    const rating = Math.min(5, Math.max(1, Math.round((bookings / maxBookings) * 5)));
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <>
      <Head>
        <title>Management | CasualCrave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Connect with verified profiles for casual meetups on CasualCrave." />
        <meta name="keywords" content="casual meetups, social events, networking" />
        <meta property="og:title" content="Management | CasualCrave" />
        <meta property="og:description" content="Join casual meetups with verified profiles managed by Alex." />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`min-h-screen px-4 py-20 sm:py-24 transition-colors ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-300 text-gray-900'}`}>
        {/* Dark Mode Switch */}
        <div className="flex justify-end mb-6">
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

        {/* Onboarding Tooltip Tour */}
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white text-sm px-4 py-2 rounded-full shadow-lg z-20"
          >
            Welcome! Search for a profile to start!
          </motion.div>
        )}

        <section className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Welcome to <span className="text-pink-500">CasualCrave</span> Management
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Discover and connect with verified profiles for casual meetups. Managed by Alex for a seamless experience.
          </p>
          <div className="mt-4">
            <div className="w-full bg-gray-300 dark:bg-gray-800 rounded-full h-2.5">
              <div
                className="bg-pink-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${(progress / 3) * 100}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Progress: {progress}/3 steps (Search, Select, Connect)
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gray-200 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">About CasualCrave</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
            CasualCrave connects people for low-pressure, fun meetups. Our team, led by Alex, ensures every booking is verified and secure. Whether it’s a coffee chat or a group hangout, we make social connections effortless.
          </p>
          <Link href="/about" className="text-pink-500 hover:text-pink-600 transition">
            Learn More About Us
          </Link>
        </section>

        {/* Testimonials Carousel */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-center mb-6">What Our Users Say</h2>
          <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 } }}>
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">“{testimonial.quote}”</p>
                  <p className="text-pink-500 font-semibold">{testimonial.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Search and Filter Section */}
        <section className="max-w-4xl mx-auto px-4 relative">
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search profiles..."
              value={search}
              onChange={handleSearch}
              className="w-full px-4 py-3 rounded-xl bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-white border border-pink-500 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
              aria-label="Search profiles"
            />
          </div>

          {/* Profile Grid with Lazy Loading */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            <AnimatePresence>
              {filtered.map((profile, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleProfileClick(profile.name)}
                  className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gradient-to-r from-pink-500 to-purple-500 p-6 text-center cursor-pointer ${
                    selected === profile.name
                      ? 'border-4'
                      : selected
                      ? 'opacity-50 cursor-not-allowed border-gray-500 dark:border-gray-700'
                      : 'hover:border-pink-500'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleProfileClick(profile.name)}
                  aria-label={`View profile for ${profile.name}`}
                >
                  <div className="aspect-square w-32 mx-auto rounded-xl border-4 border-pink-500 bg-gray-300 dark:bg-gray-700 flex items-center justify-center mb-6">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">{profile.name.charAt(0).toUpperCase()}</span>
                  </div>

                  {profile.verified && (
                    <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Verified</span>
                  )}

                  {selected !== profile.name && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-10 flex flex-col justify-center items-center rounded-xl group-hover:bg-black/40 transition">
                      <div className="text-gray-900 dark:text-white text-5xl font-bold mb-2">{profile.name.charAt(0).toUpperCase()}</div>
                      <p className="text-pink-400 text-base">Tap to view</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {profile.desc.substring(0, 30)}...
                      </p>
                    </div>
                  )}

                  <div className={`${selected !== profile.name ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{profile.name}</h3>
                    <p className="text-pink-400 text-base mb-3">{profile.role}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-4">{profile.desc}</p>
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-sm text-green-400">{profile.lastActive}</span>
                      <div className="flex gap-1 text-yellow-400 text-lg">{getStarRating(profile.bookings)}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* Our Goals Section */}
        <section className="max-w-4xl mx-auto mt-16 mb-16">
          <h2 className="text-2xl font-semibold text-center mb-6">Our Goals at CasualCrave</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            >
              <span className="text-4xl mb-4 text-pink-500">🤝</span>
              <h3 className="text-xl font-semibold mb-2">Foster Connections</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">We aim to create meaningful, low-pressure meetups for everyone to build lasting relationships.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            >
              <span className="text-4xl mb-4 text-pink-500">🔒</span>
              <h3 className="text-xl font-semibold mb-2">Ensure Safety</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Every profile is verified by Alex to provide a secure and trustworthy environment.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            >
              <span className="text-4xl mb-4 text-pink-500">🌐</span>
              <h3 className="text-xl font-semibold mb-2">Build Community</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">We strive to grow a vibrant community where people can share experiences and grow together.</p>
            </motion.div>
          </div>
          <div className="text-center mt-6">
            <Link href="/about" className="text-pink-500 hover:text-pink-600 transition">
              Learn More About Our Mission
            </Link>
          </div>
        </section>

        {/* Feedback Form */}
        <section className="max-w-2xl mx-auto mt-12">
          <h2 className="text-2xl font-semibold text-center mb-6">Share Your Feedback</h2>
          <form onSubmit={handleFeedbackSubmit} className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-xl">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Let us know how we can improve..."
              className="w-full px-4 py-3 rounded-xl bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white border border-pink-500 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
              rows={4}
              aria-label="Feedback input"
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition"
            >
              Submit Feedback
            </button>
          </form>
        </section>

        {/* Profile Popout */}
        {showPopout && selected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-md w-full text-center">
              {isLoading ? (
                <div className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Loading profile information... Please wait.
                </div>
              ) : (
                <>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    You&apos;re requesting to be submitted to management for: <span className="text-pink-400 font-semibold">{selected}</span>
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button
                      onClick={() => copyShareLink(selected)}
                      className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition"
                      aria-label={`Share profile for ${selected}`}
                    >
                      Share Profile
                    </button>
                    <button
                      onClick={handleOpenConnectPopout}
                      className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition animate-pulse"
                      disabled={isLoading}
                      aria-label={`Connect with Alex for ${selected}`}
                    >
                      Connect with Alex
                    </button>
                  </div>
                </>
              )}
              <button
                onClick={handleClosePopout}
                className="mt-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
                aria-label="Cancel profile selection"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}

        {/* Connect Popout */}
        {showConnectPopout && selected && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          >
            <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-md w-full text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                You’re requesting access to <span className="font-semibold text-gray-900 dark:text-white">{selected}</span>. Alex must authorize communication.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://t.me/@alexcasualcrave"
                  target="_blank"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition animate-pulse"
                  onClick={handleClosePopout}
                  aria-label="Continue via Telegram"
                >
                  Continue via Telegram
                </a>
                <a
                  href="https://wa.me/+61485990839"
                  target="_blank"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition animate-pulse"
                  onClick={handleClosePopout}
                  aria-label="Continue via WhatsApp"
                >
                  Continue via WhatsApp
                </a>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
                Permission-based. Alex will confirm availability before connecting you.
              </p>
              <button
                onClick={handleClosePopout}
                className="mt-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
                aria-label="Cancel connection"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}

        {/* Footer with Privacy, Terms, and Safety Links */}
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