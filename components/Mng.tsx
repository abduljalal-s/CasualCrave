'use client';

import Head from "next/head";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Added for animations
import { Swiper, SwiperSlide } from "swiper/react"; // Added for testimonial carousel
import "swiper/css"; // Swiper styles
import Link from "next/link"; // Added for navigation links

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
const userPreferences = ["coffee", "social"]; // Replace with actual user data from auth/db

export default function ManagementPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all"); // Added for filtering by role
  const [selected, setSelected] = useState<string | null>(null);
  const [showPopout, setShowPopout] = useState(false);
  const [showConnectPopout, setShowConnectPopout] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);
  const [darkMode, setDarkMode] = useState(false); // Added for dark mode toggle
  const [feedback, setFeedback] = useState(""); // Added for feedback form

  // Filter profiles by search and role
  const filtered = profiles.filter((profile) => {
    const matchesSearch = profile.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || profile.role.toLowerCase().includes(filter.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  // Personalized recommendations based on user preferences
  const recommended = profiles
    .filter((p) => p.name !== selected && p.interests.some((i) => userPreferences.includes(i)))
    .sort((a, b) => b.bookings - a.bookings)
    .slice(0, 2);

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

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const copyShareLink = (name: string) => {
    const link = `https://casualcrave.com/profile/${encodeURIComponent(name)}`;
    navigator.clipboard.writeText(link);
    alert("Profile link copied to clipboard!");
  };

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mock feedback submission (replace with API call to Formspree or Vercel serverless function)
    alert(`Feedback submitted: ${feedback}`);
    setFeedback("");
  };

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  // Initialize dark mode from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

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

      <main className={`min-h-screen px-4 py-20 sm:py-24 transition-colors ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Onboarding Tooltip Tour */}
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white text-sm px-4 py-2 rounded-full shadow-lg z-20"
          >
            Step 1: Search for a profile to start!
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
            <select
              value={filter}
              onChange={handleFilterChange}
              className="px-4 py-3 rounded-xl bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-white border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400"
              aria-label="Filter profiles by role"
            >
              <option value="all">All Roles</option>
              <option value="worthy~one">Worthy~One</option>
              <option value="verified talent">Verified Talent</option>
            </select>
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
                  className={`relative bg-gray-200 dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-xs p-6 text-center transition cursor-pointer border-2 group ${
                    selected === profile.name
                      ? 'border-pink-500'
                      : selected
                      ? 'opacity-50 cursor-not-allowed border-gray-500 dark:border-gray-700'
                      : 'hover:bg-gray-300 dark:hover:bg-gray-700 border-gray-500 dark:border-gray-700'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleProfileClick(profile.name)}
                  aria-label={`View profile for ${profile.name}`}
                >
                  <div className="w-28 h-28 mx-auto rounded-xl border-4 border-pink-500 flex items-center justify-center bg-gray-300 dark:bg-gray-700 mb-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{profile.name.charAt(0).toUpperCase()}</span>
                  </div>

                  {profile.verified && (
                    <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">Verified</span>
                  )}

                  {selected !== profile.name && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-10 flex flex-col justify-center items-center rounded-xl group-hover:bg-black/40 transition">
                      <div className="text-gray-900 dark:text-white text-4xl font-bold mb-1">{profile.name.charAt(0).toUpperCase()}</div>
                      <p className="text-pink-400 text-sm">Tap to view</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {profile.desc.substring(0, 30)}...
                      </p>
                    </div>
                  )}

                  <div className={`${selected !== profile.name ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{profile.name}</h3>
                    <p className="text-pink-400 text-sm mb-2">{profile.role}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{profile.desc}</p>
                    <div className="flex justify-center gap-2 mt-2">
                      <span className="text-xs text-green-400">{profile.lastActive}</span>
                      <span className="text-xs text-yellow-400">{profile.bookings}+ Bookings</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Personalized Recommendations */}
          {recommended.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-center mb-6">Recommended for You</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
                <AnimatePresence>
                  {recommended.map((profile, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => handleProfileClick(profile.name)}
                      className={`relative bg-gray-200 dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-xs p-6 text-center transition cursor-pointer border-2 group ${
                        selected ? 'opacity-50 cursor-not-allowed border-gray-500 dark:border-gray-700' : 'hover:bg-gray-300 dark:hover:bg-gray-700 border-gray-500 dark:border-gray-700'
                      }`}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === 'Enter' && handleProfileClick(profile.name)}
                      aria-label={`View recommended profile for ${profile.name}`}
                    >
                      <div className="w-28 h-28 mx-auto rounded-xl border-4 border-pink-500 flex items-center justify-center bg-gray-300 dark:bg-gray-700 mb-4">
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">{profile.name.charAt(0).toUpperCase()}</span>
                      </div>
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-10 flex flex-col justify-center items-center rounded-xl group-hover:bg-black/40 transition">
                        <div className="text-gray-900 dark:text-white text-4xl font-bold mb-1">{profile.name.charAt(0).toUpperCase()}</div>
                        <p className="text-pink-400 text-sm">Tap to view</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {profile.desc.substring(0, 30)}...
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{profile.name}</h3>
                        <p className="text-pink-400 text-sm mb-2">{profile.role}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{profile.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </section>
          )}
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