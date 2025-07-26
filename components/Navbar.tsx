import { UserButton, useUser } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { user, isSignedIn, isLoaded } = useUser();
  const lastScrollY = useRef(0);
  
  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Show a loading state while Clerk is initializing
  if (!isLoaded) {
    return (
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white px-4 sm:px-6 py-4 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <span className="text-xl sm:text-2xl font-extrabold text-pink-500 tracking-wide cursor-pointer">
              CasualCrave
            </span>
          </Link>
          <div>Loading...</div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-gray-900 text-white px-4 sm:px-6 py-4 shadow-md z-50`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl sm:text-2xl font-extrabold text-pink-500 tracking-wide cursor-pointer">
            CasualCrave
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 font-semibold">
          <Link href="/about" className="hover:text-pink-400 transition">About</Link>
          <Link href="/privacy" className="hover:text-pink-400 transition">Terms & Policy</Link>
          {isSignedIn ? (
            <div className="flex items-center space-x-2">
              <span className="text-gray-300 text-sm">
                Hi, {user.firstName || ""}
              </span>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <Link href="/login">
              <button className="text-sm px-4 py-2 border border-white rounded-full hover:bg-pink-500 hover:border-pink-500 transition">
                Join
              </button>
            </Link>
          )}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-pink-500 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-4 sm:px-6 py-4 space-y-4 text-base font-medium">
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-pink-400 transition"
          >
            About
          </Link>
          <Link
            href="/terms"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-pink-400 transition"
          >
            Terms & Policy
          </Link>
          <hr className="border-gray-700" />
          {isSignedIn ? (
            <div className="flex items-center space-x-3">
              <span className="text-gray-300 text-sm">
                Hi, {user.firstName || "User"}!
              </span>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-pink-400 transition"
            >
              Join
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}