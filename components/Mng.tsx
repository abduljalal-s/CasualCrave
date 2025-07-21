'use client';

import Head from "next/head";
import React, { useEffect, useState } from "react";

const profiles = [
  {
    name: "Baby A",
    role: "Worthy~One",
    desc: "Start here. Alex verifies you, walks you through the trade, and opens the vibe 💬",
    bookings: 120,
    lastActive: "Now",
  },
  {
    name: "Maya",
    role: "Verified Talent",
    desc: "Sweet-n-sassy blend. Soft voice, hard standards 💫",
    bookings: 85,
    lastActive: "2h ago",
  },
  {
    name: "Viv",
    role: "Verified Talent",
    desc: "Late-night convos, daylight class ✨",
    bookings: 95,
    lastActive: "Now",
  },
  {
    name: "sun flower",
    role: "Verified Talent",
    desc: "Edge of mystery, core of warmth 🌹",
    bookings: 60,
    lastActive: "1h ago",
  },
  {
    name: "Mean Lady",
    role: "Verified Talent",
    desc: "Graceful energy and premium connections 🌙",
    bookings: 110,
    lastActive: "Now",
  },
];

export default function ManagementPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [showPopout, setShowPopout] = useState(false);
  const [showConnectPopout, setShowConnectPopout] = useState(false); // Renamed for clarity
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);

  const filtered = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  const recommended = profiles
    .filter((p) => p.name !== selected)
    .sort((a, b) => b.bookings - a.bookings)
    .slice(0, 2);

  const handleProfileClick = (name: string) => {
    if (!selected && !isLoading) {
      setSelected(name);
      setIsLoading(true);
      setProgress(2);

      setTimeout(() => {
        setIsLoading(false);
        setShowPopout(true); // Show the new popout after loading
      }, 7000);
    }
  };

  const handleOpenConnectPopout = () => {
    setShowPopout(false); // Close the selection popout
    setShowConnectPopout(true); // Open the connect popout
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
    if (e.target.value) setProgress(1);
    else setProgress(0);
  };

  const copyShareLink = (name: string) => {
    const link = `https://casualcrave.com/profile/${encodeURIComponent(name)}`;
    navigator.clipboard.writeText(link);
    alert("Profile link copied to clipboard!");
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Management | CasualCrave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <main className="bg-gray-900 text-white min-h-screen px-4 py-20 sm:py-24">
        <section className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Welcome to <span className="text-pink-500">CasualCrave</span> Management
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Verify bookings, and secure a session
          </p>
          <div className="mt-4">
            <div className="w-full bg-gray-800 rounded-full h-2.5">
              <div
                className="bg-pink-500 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${(progress / 3) * 100}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Progress: {progress}/3 steps (Search, Select, Connect)
            </p>
          </div>
        </section>

        <section className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl max-w-2xl mx-auto text-center mb-16 relative">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto border-4 border-pink-500 mb-4 flex items-center justify-center bg-gray-700">
            <span className="text-4xl font-bold text-white">A</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-1">Alex</h2>
          <p className="text-pink-400 text-sm mb-2">Lead Manager, CasualCrave</p>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
            Managing quality, verifying bookings, and ensuring premium client coordination.
          </p>

          <div className="bg-gray-900 border border-pink-500 rounded-xl p-4 mt-4">
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">Sample Chat:</span> "Hi! I'm Alex, ready to verify your booking with {selected || 'your chosen profile'}."
            </p>
          </div>

          <div className="bg-gray-900 border border-pink-500 rounded-xl p-4 mt-4">
            <p className="text-sm text-gray-300">
              <span className="font-semibold text-white">Note:</span> Select a profile below to initiate your request with Alex.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 relative">
          {showTooltip && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white text-sm px-4 py-2 rounded-full shadow-lg z-20 animate-bounce">
              Start by searching for a profile!
            </div>
          )}
          <div className="mb-8 relative">
            <input
              type="text"
              placeholder="Search profiles..."
              value={search}
              onChange={handleSearch}
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-pink-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {filtered.map((profile, idx) => {
              const initial = profile.name.charAt(0).toUpperCase();
              const isSelected = selected === profile.name;

              return (
                <div
                  key={idx}
                  onClick={() => handleProfileClick(profile.name)}
                  className={`relative bg-gray-800 rounded-xl shadow-lg w-full max-w-xs p-6 text-center transition cursor-pointer border-2 group ${
                    isSelected
                      ? 'border-pink-500'
                      : selected
                      ? 'opacity-50 cursor-not-allowed border-gray-700'
                      : 'hover:bg-gray-700 border-gray-700'
                  }`}
                >
                  <div className="w-28 h-28 mx-auto rounded-xl border-4 border-pink-500 flex items-center justify-center bg-gray-700 mb-4">
                    <span className="text-4xl font-bold text-white">{initial}</span>
                  </div>

                  {!isSelected && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-10 flex flex-col justify-center items-center rounded-xl group-hover:bg-black/40 transition">
                      <div className="text-white text-4xl font-bold mb-1">{initial}</div>
                      <p className="text-pink-400 text-sm">Tap to view</p>
                      <p className="text-gray-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {profile.desc.substring(0, 30)}...
                      </p>
                    </div>
                  )}

                  <div className={`${!isSelected ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                    <h3 className="text-xl font-semibold text-white mb-1">{profile.name}</h3>
                    <p className="text-pink-400 text-sm mb-2">{profile.role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{profile.desc}</p>
                    <div className="flex justify-center gap-2 mt-2">
                      <span className="text-xs text-green-400">{profile.lastActive}</span>
                      <span className="text-xs text-yellow-400">{profile.bookings}+ Bookings</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {recommended.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-center mb-6">You Might Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
                {recommended.map((profile, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleProfileClick(profile.name)}
                    className={`relative bg-gray-800 rounded-xl shadow-lg w-full max-w-xs p-6 text-center transition cursor-pointer border-2 group ${
                      selected ? 'opacity-50 cursor-not-allowed border-gray-700' : 'hover:bg-gray-700 border-gray-700'
                    }`}
                  >
                    <div className="w-28 h-28 mx-auto rounded-xl border-4 border-pink-500 flex items-center justify-center bg-gray-700 mb-4">
                      <span className="text-4xl font-bold text-white">{profile.name.charAt(0).toUpperCase()}</span>
                    </div>
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-10 flex flex-col justify-center items-center rounded-xl group-hover:bg-black/40 transition">
                      <div className="text-white text-4xl font-bold mb-1">{profile.name.charAt(0).toUpperCase()}</div>
                      <p className="text-pink-400 text-sm">Tap to view</p>
                      <p className="text-gray-400 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {profile.desc.substring(0, 30)}...
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{profile.name}</h3>
                      <p className="text-pink-400 text-sm mb-2">{profile.role}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{profile.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </section>

        {showPopout && selected && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-xl shadow-xl max-w-md w-full text-center">
              {isLoading ? (
                <div className="text-gray-400 text-sm mb-4">
                  Loading profile information... Please wait.
                </div>
              ) : (
                <>
                  <p className="text-gray-300 mb-4">
                    You're requesting to be submitted to management for: <span className="text-pink-400 font-semibold">{selected}</span>
                  </p>
                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => copyShareLink(selected)}
                      className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition"
                    >
                      Share Profile
                    </button>
                    <button
                      onClick={handleOpenConnectPopout}
                      className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition animate-pulse"
                      disabled={isLoading}
                    >
                      Connect with Alex
                    </button>
                  </div>
                </>
              )}
              <button
                onClick={handleClosePopout}
                className="mt-4 text-gray-400 hover:text-white transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {showConnectPopout && selected && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-xl shadow-xl max-w-md w-full text-center">
              <p className="text-sm text-gray-400 mb-4">
                You’re requesting access to <span className="font-semibold text-white">{selected}</span>. Alex must authorize communication.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://t.me/@mayarealm"
                  target="_blank"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition animate-pulse"
                  onClick={handleClosePopout}
                >
                  Continue via Telegram
                </a>
                <a
                  href="https://wa.me/+61485990839"
                  target="_blank"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition animate-pulse"
                  onClick={handleClosePopout}
                >
                  Continue via WhatsApp
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Permission-based. Alex will confirm availability before connecting you.
              </p>
              <button
                onClick={handleClosePopout}
                className="mt-4 text-gray-400 hover:text-white transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}