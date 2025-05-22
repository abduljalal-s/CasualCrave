'use client';

import { useUser } from "@clerk/nextjs";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Explore() {
  const [giftCardID, setGiftCardID] = useState("");

  const [adminView, setAdminView] = useState(false);
  const [submittedCards, setSubmittedCards] = useState<string[]>([]);
  const { isSignedIn, isLoaded, user } = useUser();
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const [isLoading, setIsLoading] = useState(false);
  

const handleSubmitGiftCard = () => {
  if (giftCardID.trim() !== "") {
    const updatedCards = [...submittedCards, giftCardID];
    setSubmittedCards(updatedCards);
    localStorage.setItem("submittedCards", JSON.stringify(updatedCards)); // ✅ Save to localStorage
    setGiftCardID(""); // Clear input
    alert("Gift card submitted successfully!");
  }
};

useEffect(() => {
  if (isLoaded && !isSignedIn) {
    router.push("/login");
  }

  if (isLoaded && isSignedIn) {
    const isAdmin = user?.primaryEmailAddress?.emailAddress === "nightmadecoder@gmail.com";
    setAdminView(isAdmin);

    // Load saved cards from localStorage
    const savedCards = localStorage.getItem("submittedCards");
    if (savedCards) {
      setSubmittedCards(JSON.parse(savedCards));
    }
  }
}, [isLoaded, isSignedIn, router, user]);

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
            <Image
              src={user.imageUrl}
              alt="User Profile"
              className="w-10 h-10 rounded-full border-2 border-pink-500"
            />
          )}
          <span className="text-sm">{user?.primaryEmailAddress?.emailAddress}</span>
        </div>
      </header>

      <main className="min-h-screen bg-gray-900 text-white py-28 px-6">
        <h2 className="text-4xl font-bold text-center text-pink-500 mb-12">
          Available Profiles
        </h2>
        <p className="font-serif text-center text-gray-500 mb-5">
          <span>🔊</span> Due to high demand, you get access to 2 new profiles every week — time to make your vibe count!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden text-center p-6">
            <Image
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
            <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden text-center p-6">
            <Image
              src="/images/profile2.jpg"
              alt="Profile 2"
              width={160}
              height={160}
              className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-pink-500 mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">lexxie, 24</h2>
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
        <p className="text-bold text-center text-gray-400 italic mb-2 mt-4">
  🔒 All submissions are verified manually. We never ask for sensitive info and only accept valid gift cards. 
</p>

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

  {
  
[
    {
      id: "GiftCard",
      title: "Gift Cards",
      desc: "Confirm availability, get Telegram access, and enjoy a discreet 1:1 vibe.",
      price: "$50",
    },
    {
      id: "priority",
      title: "Priority Booking",
      desc: "Get priority access + a bonus surprise 😘",
      price: "$100",
    },
  ].map((plan) => (
    <div
      key={plan.id}
      onClick={() => {
        setSelectedPlan(plan.id === "GiftCard" ? "giftcard" : plan.id);
      }}
      className={`cursor-pointer bg-gray-700 p-6  rounded-xl shadow-lg border transition duration-300 relative ${
        (selectedPlan === plan.id || (plan.id === "GiftCard" && selectedPlan === "giftcard"))
          ? "border-4 border-pink-500 ring-2 ring-pink-400"
          : "border-gray-600 hover:border-pink-500"
      }`}
    >
      {(selectedPlan === plan.id || (plan.id === "GiftCard" && selectedPlan === "giftcard")) && (
        <FaCheckCircle className="absolute top-4 right-4 text-green-400 text-xl" />
      )}
      <h4 className="text-xl font-semibold mb-2 text-white">{plan.title}</h4>
      <p className="text-gray-400 mb-4">{plan.desc}</p>
      <div className="text-3xl font-bold text-pink-500 mb-2">{plan.price}</div>
    </div>
  ))}
</div>


          <section className="bg-gray-800 p-8 rounded-2xl shadow-xl max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-center text-pink-300 mb-6">
              Choose your preferred payment method to reserve your experience.
            </h1>
            <h3 className="text-center  text-gray-500 mb-6">✨Use Gift cards to book immediately!</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {["giftcard", "payid", "paypal", "wallet"].map((method) => (
                <button
                  key={method}
                 onClick={() => {
                setIsLoading(true);
                 setTimeout(() => {
                setSelectedPlan(method);
                  setIsLoading(true);
                }, 600); // 600ms delay
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
    <p className="text-sm text-gray-400 italic mb-4">
      ✔️ CasualCrave is verified and trusted by over 1,000 users. Submitting a valid gift card confirms your spot and filters unserious requests.
    </p> 

    <p className="text-sm text-gray-400 italic mb-4">
      Please note: after submitting your gift card, you will receive a confirmation message on Telegram. This is to ensure that you are a real user and not a bot.
    </p>
     <p className="text-sm text-gray-400 italic mb-4">
      Please note: All payments are non-refundable and confirm your booking.
    </p>

    <label className="block text-sm text-gray-300">
      Enter Gift Card ID
      <input
        type="text"
        value={giftCardID}
        onChange={(e) => setGiftCardID(e.target.value)}
        className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-pink-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
        placeholder="XXXX-XXXX-XXXX"
      />
    </label>

    <button
      onClick={handleSubmitGiftCard}
      className="mt-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-full transition"
    >
      Submit Gift Card
    </button>
  </div>
)}

{isLoading ? (
  <div className="text-center text-pink-400 font-semibold animate-pulse">
       ...
  </div>
  ) : (
  <>
    {selectedPlan === "payid" && (
      <div className="text-pink-400 font-mono text-center">Please Wait.. Requesting PayId.</div>
    )}
            {selectedPlan === "paypal" && (
      <div className="text-pink-400 font-mono text-center">
        <a target="_blank" rel="noopener noreferrer">
          Please wait.. Requesting PayPal.
        </a>
      </div>
    )}
            {selectedPlan === "wallet" && (
      <div className="text-pink-400 font-mono break-all text-center">
        Please Wait.. wallet Id Requested✅
      </div>
    )}
      </>
  )}
   </section>

          
          {adminView && submittedCards.length > 0 && (
            <section className="mt-12 bg-gray-800 p-6 rounded-2xl max-w-3xl mx-auto shadow-lg">
              <h3 className="text-2xl text-pink-500 font-bold mb-4">Submitted Gift Cards</h3>
              <ul className="space-y-2 text-left">
                {submittedCards.map((id, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-700 px-4 py-2 rounded-md text-white font-mono border border-pink-500"
                  >
                    {id}
                  </li>
                ))}
              </ul>
              {adminView && (
  <button
    onClick={() => {
      localStorage.removeItem("submittedCards");
      setSubmittedCards([]);
    }}
    className="mt-4 mb-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full"
  >
    Clear All Gift Cards (Admin Only)
  </button>
)}
              <p className="text-sm text-gray-500 italic">
                Note: Only admins can see this section.
              </p>
            </section>
            
          )}

          <p className="mt-8 text-gray-500 text-sm text-center italic">
            Still unsure? DM us on <a href="">CasualCrave@gmail.com </a>We're always down for clarity before connection 💬
          </p>
        </section>
      </main>
  </>
  );
};
