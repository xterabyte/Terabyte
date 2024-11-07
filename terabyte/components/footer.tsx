'use client'

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { SiLinkedin, SiInstagram, SiFacebook } from "react-icons/si"

const footerLinks = {
  talents: {
    title: "TALENTS",
    links: [
      { name: "Talents Cloud", href: "/talents-cloud" },
      { name: "Talents Incubator", href: "/talents-incubator" },
    ]
  },
  founders: {
    title: "FOUNDERS",
    links: [
      { name: "Founders Network", href: "/founders-network" },
      { name: "Sales Accelerator", href: "/sales-accelerator" },
    ]
  },
  quickLinks: {
    title: "QUICK LINKS",
    links: [
      { name: "Contact Us", href: "/contact" },
      { name: "About Us", href: "/about" },
      { name: "Privacy Policy", href: "/privacy" },
    ]
  }
}

const Footer = () => {
  return (
    <footer className="bg-terabg dark:bg-background border-t border-border/20">
      <div className="container mx-auto px-4 py-16 lg:pt-40">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-5 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <Image
              src="/terabytewhitelogo.png"
              alt="Terabyte Logo"
              width={180}
              height={40}
              className="mb-6"
            />
            
            {/* Shorter Brand Text */}
            <h2 className="text-lg md:text-xl font-bold text-white mb-6">
            We are a marketing ecosystem where African founders and talents can access resources and opportunities for growth.
            </h2>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <Link 
                href="#"
                className="text-white hover:text-teragreen transition-colors duration-200"
              >
                <SiLinkedin size={24} />
              </Link>
              <Link 
                href="#"
                className="text-white hover:text-teragreen transition-colors duration-200"
              >
                <SiInstagram size={24} />
              </Link>
              <Link 
                href="#"
                className="text-white hover:text-teragreen transition-colors duration-200"
              >
                <SiFacebook size={24} />
              </Link>
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {Object.values(footerLinks).map((section, index) => (
                <motion.div 
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <h3 className="font-semibold text-sm text-white mb-4 tracking-wider">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-white hover:text-teragreen transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-16 pt-8 border-t border-border/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white">
              Copyright | {new Date().getFullYear()} All Rights Reserved
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <Link 
                href="#"
                className="text-white hover:text-teragreen transition-colors duration-200"
              >
                Terms
              </Link>
              <Link 
                href="#"
                className="text-white hover:text-teragreen transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link 
                href="#"
                className="text-white hover:text-teragreen transition-colors duration-200"
              >
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer