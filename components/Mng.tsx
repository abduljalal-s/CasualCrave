/* eslint-disable @next/next/no-img-element */
'use client';

import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

const profiles = [
  {
    name: "Baby A",
    role: "Worthy~One",
    img: "/images/kiara.png",
    desc: "Start here. Alex verifies you, walks you through the trade, and opens the vibe 💬",
  },
  {
    name: "Nova Bliss",
    role: "Verified Talent",
    img: "/images/sophi.jpg",
    desc: "Sweet-n-sassy blend. Soft voice, hard standards 💫",
  },
  {
    name: "Sierra M",
    role: "Verified Talent",
    img: "/images/kiara.png",
    desc: "Late-night convos, daylight class ✨",
  },
  {
    name: "Juno",
    role: "Verified Talent",
    img: "/images/emy.jpg",
    desc: "Edge of mystery, core of warmth 🌹",
  },
  {
    name: "Luna Rae",
    role: "Verified Talent",
    img: "/images/sophi.jpg",
    desc: "Graceful energy and premium connections 🌙",
  },
];

export default function ManagementPage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Management | CasualCrave</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-900 text-white min-h-screen px-4 py-20 sm:py-24">
        <section className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Welcome to <span className="text-pink-500">CasualCrave</span> Management
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
         Verify bookings , and secure a session
          </p>
        </section>

     <section className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl max-w-2xl mx-auto text-center mb-16">
  <img
    src="/images/management.jpg"
    alt="Team Manager"
    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto border-4 border-pink-500 mb-4 object-cover"
  />
  <h2 className="text-xl sm:text-2xl font-semibold mb-1">Alex</h2>
  <p className="text-pink-400 text-sm mb-2">Lead Manager, CasualCrave</p>
  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
    Managing quality, verifying bookings, and ensuring premium client coordination.
  </p>

  <div className="bg-gray-900 border border-pink-500 rounded-xl p-4 mt-4">
    <p className="text-sm text-gray-300">
      <span className="font-semibold text-white">Note:</span> When a client accesses this page, they're here to explore the profile of the talent they’re currently in conversation with. Please select the profile below to initiate the request.
    </p>
  </div>

  {selected && (
    <div className="mt-6 space-y-4">
      <p className="text-sm text-gray-400">
        You’re requesting access to <span className="font-semibold text-white">{selected}</span>. Alex must authorize communication.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://t.me/AlexRconnect"
          target="_blank"
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition"
        >
          Continue via Telegram
        </a>
        <a
          href="https://wa.me/1234567890" // Replace with actual WhatsApp number
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition"
        >
          Continue via WhatsApp
        </a>
        <a
          href="https://getsession.org/" // Optional: Replace with your Session invite if using
          target="_blank"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition"
        >
          Continue via Session
        </a>
      </div>

      <p className="text-xs text-gray-500 mt-2">
        Permission-based. Alex will confirm availability before connecting you.
      </p>
    </div>
  )}
</section>

        <section className="max-w-4xl mx-auto px-4">
          {/* Search Input */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search profiles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
  onClick={() => {
    if (!selected) setSelected(profile.name);
  }}
  className={`relative bg-gray-800 rounded-xl shadow-lg w-full max-w-xs p-6 text-center transition cursor-pointer border-2 ${
    selected === profile.name
      ? 'border-pink-500'
      : selected
      ? 'opacity-50 cursor-not-allowed border-gray-700'
      : 'hover:bg-gray-700 border-gray-700'
  }`}
>

        {/* Image */}
        <img
          src={profile.img}
          alt={profile.name}
          className="w-28 h-28 mx-auto rounded-xl border-4 border-pink-500 object-cover mb-4"
        />

        {/* Blur Overlay */}
        {!isSelected && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-10 flex flex-col justify-center items-center rounded-xl">
            <div className="text-white text-4xl font-bold mb-1">{initial}</div>
            <p className="text-pink-400 text-sm">Tap to view</p>
          </div>
        )}

        {/* Profile Content */}
        <div className={`${!isSelected ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <h3 className="text-xl font-semibold text-white mb-1">{profile.name}</h3>
          <p className="text-pink-400 text-sm mb-2">{profile.role}</p>
          <p className="text-gray-400 text-sm leading-relaxed">{profile.desc}</p>
        </div>
      </div>
    );
  })}
</div>


          {/* Submission Button */}
          {selected && (
            <div className="text-center mt-10">
              <p className="text-gray-300 mb-4">
                You're requesting to be submitted to management for: <span className="text-pink-400 font-semibold">{selected}</span>
              </p>
              <a
                href="https://wa.me/+61485990839"
                target="_blank"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition"
              >
                Submit to Alex
              </a>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
