// pages/explore.tsx
import Head from "next/head";
import Link from "next/link";

export default function Explore() {
  return (
    <>
      <Head>
        <title>Explore | CasualCrave</title>
      </Head>
      <main className="min-h-screen bg-gray-900 text-white py-20 px-6">
        <h1 className="text-4xl font-bold text-center text-pink-500 mb-12">
          Explore Profiles
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Profile Card 1 */}
          <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden text-center p-6">
            <img
              src="/images/profile1.jpg"
              alt="Profile 1"
              className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-pink-500 mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Luna, 24</h2>
            <p className="text-gray-300 mb-4">Adventurous and open-minded. Let’s vibe 🌙</p>
            <Link
              href="https://t.me/luna24"
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
            <h2 className="text-2xl font-semibold mb-2">Maya, 27</h2>
            <p className="text-gray-300 mb-4">Let’s skip the small talk 😘</p>
            <Link
              href="https://t.me/maya27"
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
