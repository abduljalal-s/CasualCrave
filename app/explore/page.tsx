'use client';

import { useUser } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Explore() {
  const { isSignedIn, isLoaded, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/login");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isSignedIn) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Explore | CasualCrave</title>
      </Head>

      <header className="fixed top-0 left-0 right-0 bg-gray-900 px-6 py-4 flex justify-between items-center z-50 shadow-md">
        <Link href="/" className="text-pink-500 font-bold text-lg hover:underline">
          Home
        </Link>

        <div className="flex items-center space-x-3 text-white">
          {user?.imageUrl && (
            <img
              src={user.imageUrl}
              alt="User Profile"
              className="w-10 h-10 rounded-full border-2 border-pink-500"
            />
          )}
          <span className="text-sm">{user?.primaryEmailAddress?.emailAddress}</span>
        </div>
      </header>

      <main className="min-h-screen bg-gray-900 text-white py-28 px-6"> {/* pt-28 for header spacing */}
        <h1 className="text-4xl font-bold text-center text-pink-500 mb-12">
          Available Profiles
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Profile Card 1 */}
          <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden text-center p-6">
            <img
              src="/images/profile1.jpg"
              alt="Profile 1"
              className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-pink-500 mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Sophie, 23</h2>
            <p className="text-gray-300 mb-4">Adventurous and open-minded. Let’s vibe 🌙</p>
            <Link
              href="https://t.me/sophied699"
              target="_blank"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition"
            >
              Message on Telegram
            </Link>
          </div>

          {/* Profile Card 2 */}
          <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden text-center p-6">
            <img
              src="/images/profile2.jpg"
              alt="Profile 2"
              className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-pink-500 mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Kiara, 24</h2>
            <p className="text-gray-300 mb-4">Let’s skip the small talk 😘</p>
            <Link
              href="https://t.me/kiara77990"
              target="_blank"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition"
            >
              Message on Telegram
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
