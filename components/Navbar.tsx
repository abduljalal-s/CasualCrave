'use client';

import { UserButton, useUser } from "@clerk/nextjs";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { user, isSignedIn } = useUser();

  // Handle scroll to show/hide navbar
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle dark mode toggle and persistence
  useEffect(() => {
    // Check localStorage or system preference for initial theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    }

    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 sm:px-6 py-4 shadow-md z-50`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl sm:text-2xl font-extrabold text-pink-500 dark:text-pink-600 tracking-wide cursor-pointer">
            CasualCrave
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 font-semibold">
          <Link href="/about" className="hover:text-pink-400 dark:hover:text-pink-500 transition">
            About
          </Link>
          {isSignedIn ? (
            <div className="flex items-center space-x-2">
              <span className="text-gray-300 dark:text-gray-600 text-sm">
                Hi, {user.firstName || ""}
              </span>
              <UserButton />
            </div>
          ) : (
            <Link href="/login">
              <button className="text-sm px-4 py-2 border border-white dark:border-gray-900 rounded-full hover:bg-pink-500 dark:hover:bg-pink-600 hover:border-pink-500 dark:hover:border-pink-600 transition">
                Join
              </button>
            </Link>
          )}
          <button
            onClick={toggleDarkMode}
            className="text-gray-300 dark:text-gray-600 hover:text-pink-400 dark:hover:text-pink-500 transition focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-pink-500 dark:text-pink-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-900 dark:bg-gray-100 px-4 sm:px-6 py-4 space-y-4 text-base font-medium">
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-pink-400 dark:hover:text-pink-500 transition"
          >
            About
          </Link>
          <hr className="border-gray-700 dark:border-gray-300" />
          {isSignedIn ? (
            <div className="flex items-center space-x-3">
              <span className="text-gray-300 dark:text-gray-600 text-sm">
                Hi, {user.firstName || "User"}!
              </span>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="block hover:text-pink-400 dark:hover:text-pink-500 transition"
            >
              Join
            </Link>
          )}
          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-2 text-gray-300 dark:text-gray-600 hover:text-pink-400 dark:hover:text-pink-500 transition focus:outline-none"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      )}
    </nav>
  );
}
