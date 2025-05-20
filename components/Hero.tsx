// components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`heart animate-floatHeart absolute text-pink-400 text-opacity-30`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 1.5 + 1}rem`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="max-w-4xl text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-pink-500 drop-shadow-lg">
          Where Craving Meets Connection
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          CasualCrave is the bold, no-judgment space to spark flirty chats, fun connections, and real chemistry. Join the movement.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/signup">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition">
      Reserve 
            </button>
          </Link>
          <Link href="/explore">
            <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold px-6 py-3 rounded-full transition">
            SignUp
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
