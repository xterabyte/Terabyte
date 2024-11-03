'use client'

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);


   // Prevent hydration mismatch
   useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Founders", href: "/founders" },
    { name: "Talents", href: "/talents" },
    { name: "Blog", href: "/blog" },
    { name: "Firm", href: "/firm" },
  ];

  if (!mounted) {
    return null; // Prevent flash of incorrect theme
  }

  return (
    <nav className="fixed w-full bg-transparent backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative w-32 h-8">
            <Image
              src={theme === 'light' ? '/terabytelogo.png' : '/terabytewhitelogo.png'}
              alt="Terabyte Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-normal text-cyan-900 dark:text-cyan-100 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;