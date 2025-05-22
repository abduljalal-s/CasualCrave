'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Profile {
  name: string;
  bio: string;
  telegram: string;
  stars: number;
  recommended: boolean;
  image: string;
}

interface Offer {
  title: string;
  desc: string;
  price: number;
}

interface BargainOffer extends Offer {
  finalPrice: number;
}

const bargainThreshold = 30;

const offers: Offer[] = [
  {
    title: 'Massage 💆‍♀️',
    desc: 'Indulge in a 30-minute massage to melt away your stress and set the mood.',
    price: 200,
  },
  {
    title: 'Flirty Video Hello 🎥',
    desc: 'Get a custom flirty video hello from your match – name drops included.',
    price: 25,
  },
  {
    title: 'Next-Day Surprise 💌',
    desc: 'A little something extra to keep you smiling long after your first meet.',
    price: 120,
  },
  {
    title: 'Priority Response 🔥',
    desc: 'Jump the queue and get seen, heard, and felt faster.',
    price: 50,
  },
  {
    title: 'Photo Teasers 📸',
    desc: 'Get access to a hidden vault of curated sneak peeks.',
    price: 50,
  },
  {
    title: 'The Secret Menu 🍸',
    desc: 'An exclusive list of bonus offers... but only for the bold.',
    price: 100,
  },
];

const fixedOffers = ['Massage 💆‍♀️', 'Next-Day Surprise 💌', 'The Secret Menu 🍸'];

export default function NextLevel() {
  const [selectedProfileName, setSelectedProfileName] = useState<string | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [addedExperiences, setAddedExperiences] = useState<BargainOffer[]>([]);
  const [customPrices, setCustomPrices] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  useEffect(() => {
    const profileData = localStorage.getItem('selectedProfile');
    if (profileData) {
      try {
        const parsedProfile = JSON.parse(profileData) as Profile;
        setSelectedProfileName(parsedProfile.name);
        setSelectedProfile(parsedProfile);
      } catch (e) {
        console.error('Failed to parse selectedProfile from localStorage', e);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && !selectedProfileName) {
      router.push('/explore');
    }
  }, [loading, selectedProfileName, router]);

  function handleAddExperience(offer: Offer, customPrice?: number) {
    if (!addedExperiences.find(o => o.title === offer.title)) {
      const priceToUse = customPrice ?? offer.price;
      setAddedExperiences(prev => [...prev, { ...offer, finalPrice: priceToUse }]);
    }
  }

  function handleRemoveExperience(offer: Offer) {
    setAddedExperiences(prev => prev.filter(o => o.title !== offer.title));
  }

  function proceedToPayment() {
    localStorage.setItem('addedExperiences', JSON.stringify(addedExperiences));
    router.push('/payment-methods');
  }

  if (loading || !selectedProfile) {
    return <div className="text-center text-white py-20">Loading your experience...</div>;
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white py-24 px-6">
      <motion.div
        className="max-w-4xl mx-auto bg-gray-800 rounded-xl p-6 mb-10 shadow-lg flex flex-col md:flex-row items-center gap-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={selectedProfile.image}
          alt={selectedProfile.name}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-pink-400">{selectedProfile.name}</h2>
          <p className="text-gray-300">{selectedProfile.bio}</p>
          <p className="mt-2">
            ⭐⭐⭐ <span className="text-yellow-400">{selectedProfile.stars} </span>
          </p>
          {selectedProfile.recommended && (
            <p className="text-sm mt-1 text-green-400 font-semibold">🔥 Recommended</p>
          )}
          <a
            href={selectedProfile.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition"
          >
            Chat on Telegram
          </a>
        </div>
      </motion.div>

      <motion.h1
        className="text-5xl font-bold text-center text-pink-500 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Welcome to the Next Level 💫
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-300 mb-6 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        You’ve just booked a vibe with{' '}
        <span className="text-pink-400 font-bold">{selectedProfile.name}</span> – and trust us,
        that’s just the beginning. While your moment is being prepped, here’s a little taste of what
        more we can offer to turn your craving into a full-blown fantasy.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
        {offers.map((offer, idx) => {
          const isAdded = addedExperiences.some(o => o.title === offer.title);
          const isFixed = fixedOffers.includes(offer.title);
          const customPrice = Number(customPrices[offer.title]) || '';
          const isValidCustomPrice = customPrice >= bargainThreshold;

          return (
            <motion.div
              key={idx}
              className={`bg-gray-800 rounded-xl p-6 text-center shadow-lg transition ${
                isAdded ? 'shadow-pink-500 border-2 border-pink-400' : 'hover:shadow-pink-500'
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
            >
              <h2 className="text-xl font-semibold text-white mb-2">{offer.title}</h2>
              <p className="text-gray-400 mb-4">{offer.desc}</p>

              {isAdded ? (
                <button
                  onClick={() => handleRemoveExperience(offer)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition"
                >
                  Remove
                </button>
              ) : isFixed ? (
                <button
                  onClick={() => handleAddExperience(offer)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition"
                >
                  Accept (€{offer.price})
                </button>
              ) : (
                <div>
                  <input
                    type="number"
                    placeholder={`Enter your price`}
                    className="w-full px-3 py-2 mb-2 rounded bg-gray-700 text-white border border-gray-600"
                    value={customPrices[offer.title] || ''}
                    onChange={e =>
                      setCustomPrices(prev => ({
                        ...prev,
                        [offer.title]: e.target.value,
                      }))
                    }
                  />
                  {isValidCustomPrice ? (
                    <button
                      onClick={() => handleAddExperience(offer, customPrice)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition w-full"
                    >
                      Accept Bargain (€{customPrice})
                    </button>
                  ) : (
                    <button
                      disabled
                      className="bg-gray-600 text-white px-4 py-2 rounded-full opacity-60 cursor-not-allowed w-full"
                    >
                      Bargain Not Applicable
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {addedExperiences.length > 0 && (
        <motion.div
          className="max-w-5xl mx-auto mt-14 bg-gray-800 rounded-xl p-6 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-2xl font-semibold text-pink-400 mb-4">Your Added Experiences</h3>
          <ul className="list-disc list-inside mb-4">
            {addedExperiences.map((exp, i) => (
              <li key={i} className="text-gray-300">
                {exp.title} — €{exp.finalPrice}
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold text-white mb-6">
            Total: €{addedExperiences.reduce((sum, exp) => sum + exp.finalPrice, 0)}
          </p>
          <button
            onClick={proceedToPayment}
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            Proceed to Payment
          </button>
        </motion.div>
      )}

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link href="/explore" className="text-pink-400 hover:underline">
          ⬅️ Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
