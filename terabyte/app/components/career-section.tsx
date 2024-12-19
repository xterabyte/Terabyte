"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap } from 'lucide-react';
import SmilingWoman from '@/app/assets/happy-model.png';
import Link from 'next/link';
import Image from 'next/image';

// Import profile images
import Profile1 from '@/app/assets/profiles/profile1.jpg';
import Profile2 from '@/app/assets/profiles/profile2.jpg';
import Profile3 from '@/app/assets/profiles/profile3.jpg';
import Profile4 from '@/app/assets/profiles/profile4.jpg';

const profileImages = [Profile1, Profile2, Profile3, Profile4];

const CareerSection = () => {
  return (
    <section className="relative w-full bg-background py-16 sm:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <div className="p-2 rounded-lg bg-accent/20 dark:bg-accent/10">
                <GraduationCap className="w-5 h-5 text-secondary dark:text-accent" />
              </div>
              <span className="text-sm font-medium text-secondary dark:text-accent">Career Development</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary dark:text-white leading-tight"
            >
              Opportunities for{" "}
              <span className="text-secondary dark:text-accent">Career Growth</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground dark:text-white/70 max-w-xl"
            >
              We not only build talents. We connect talents with roles in the marketing space. 
              We support your career and help founders find the expertise they need.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="group bg-secondary hover:bg-secondary/90 text-white dark:bg-accent dark:hover:bg-accent/90"
              >
                <Link href="/careers" className="flex items-center space-x-2">
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <Image
                src={SmilingWoman}
                alt="Career Growth"
                fill
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-primary/10 rounded-xl p-4 shadow-lg backdrop-blur-sm border border-primary/10 dark:border-primary/20"
            >
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {profileImages.map((profile, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-primary/20 overflow-hidden relative"
                    >
                      <Image
                        src={profile}
                        alt={`Team member ${i + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary dark:text-white">Join 500+ Talents</p>
                  <p className="text-xs text-muted-foreground dark:text-white/70">In Our Network</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;