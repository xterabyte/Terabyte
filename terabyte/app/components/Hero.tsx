"use client"

import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Rocket,
  Network,
  BarChart2,
  Target,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

// Custom hook for responsive sizing
const useResponsiveSize = (mobileSize: number, desktopSize: number) => {
  const [size, setSize] = useState(mobileSize);

  useEffect(() => {
    const checkSize = () => {
      setSize(typeof window !== 'undefined' && window.innerWidth >= 640 ? desktopSize : mobileSize);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, [mobileSize, desktopSize]);

  return size;
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsHero = useAnimation();

  // Trigger animations on mount
  useEffect(() => {
    const sequence = async () => {
      await controlsHero.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          type: 'spring',
          stiffness: 50,
        },
      });
    };
    sequence();
  }, [controlsHero]);

  // Feature Icons with hover effect
  const FeatureIcon = ({ icon: Icon, title }: { icon: React.ElementType; title: string }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center p-3 sm:p-4 bg-white dark:bg-primary/10 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 space-y-2 border border-primary/10 dark:border-primary/20"
    >
      <Icon
        className="text-primary dark:text-accent"
        size={32}
      />
      <span className="text-xs sm:text-sm font-medium text-primary/80 dark:text-white/80 text-center">
        {title}
      </span>
    </motion.div>
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden pt-24 pb-10 px-10 flex items-center justify-center bg-background"
    >
      {/* Static Gradient Background with Animated Elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 
        dark:from-primary/10 dark:via-accent/10 dark:to-secondary/10">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0.2,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.2,
            }}
            className="absolute w-2 h-2 bg-accent dark:bg-accent/50 rounded-full blur-sm"
          />
        ))}
      </div>

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controlsHero}
        className="relative z-10 container mx-auto px-4 grid grid-cols-1 gap-8 md:gap-12 items-center md:[grid-template-columns:60%_40%] lg:[grid-template-columns:55%_45%]"
      >
        {/* Text and Call to Action */}
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center justify-center md:justify-start space-x-3 mb-4"
            >
              <div className="p-2 rounded-full bg-primary/10 dark:bg-primary/20">
                <Rocket className="text-primary dark:text-white" size={useResponsiveSize(20, 24)} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-primary/80 dark:text-white/80">
                Empowering African Startups
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-3xl xl:text-5xl font-bold text-primary dark:text-white leading-tight mb-4"
            >
              We Empower Startups.
              <br className="hidden sm:block" />
              <span className="text-secondary dark:text-accent">We Build Marketing Talents.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground dark:text-white/70 max-w-xl mx-auto md:mx-0"
            >
              We help African Founders unlock growth through tailored marketing resources and top-tier marketing talents. 
              That&apos;s how we discover and create success stories.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex justify-center md:justify-start space-x-4 mt-6"
          >
            <Button 
              asChild 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-white dark:bg-accent dark:hover:bg-accent/90"
            >
              <Link href="/about" className="flex items-center space-x-2">
                <span className="text-sm">Learn More</span>
                <Zap
                  className="ml-2 group-hover:rotate-45 transition-transform"
                  size={useResponsiveSize(16, 20)}
                />
              </Link>
            </Button>

            <Button 
              variant="outline" 
              size="lg" 
              className="group border-primary/20 dark:border-white/20 hover:bg-primary/5 dark:hover:bg-white/5"
            >
              <Target
                className="group-hover:rotate-12 transition-transform mr-2 text-primary dark:text-white"
                size={useResponsiveSize(16, 20)}
              />
              <span className="text-sm text-primary dark:text-white">Explore Services</span>
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="grid grid-cols-3 gap-3 sm:gap-4 pt-8 max-w-md mx-auto md:max-w-full"
          >
            <FeatureIcon icon={Network} title="Connections" />
            <FeatureIcon icon={BarChart2} title="Growth" />
            <FeatureIcon icon={Users} title="Talents" />
          </motion.div>
        </div>

        {/* Illustration/Graphic Section */}
        <div className="hidden md:flex items-center justify-center relative">
          {/* Subtle gradient animation */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute w-64 md:w-96 h-64 md:h-96 bg-accent/20 dark:bg-accent/30 rounded-full blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-10 bg-white dark:bg-primary/10 border border-primary/10 dark:border-primary/20 rounded-2xl p-6 md:p-8 shadow-xl dark:shadow-2xl w-full max-w-md backdrop-blur-sm"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-accent/10 dark:bg-accent/20 rounded-full flex items-center justify-center mr-4">
                <Network className="text-accent dark:text-white" size={useResponsiveSize(24, 32)} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white">
                  Marketing Ecosystem
                </h3>
                <p className="text-sm text-primary/70 dark:text-white/70">
                  Connecting Talents & Opportunities
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                'Sales Accelerator',
                'Talents Cloud & Incubator',
                'Founders Network',
                'Marketing Launchpad',
              ].map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  className="flex items-center space-x-3 bg-accent/5 dark:bg-accent/10 p-3 rounded-lg border border-accent/10 dark:border-accent/20"
                >
                  <div className="w-2 h-2 bg-accent dark:bg-white rounded-full"></div>
                  <span className="text-sm text-primary/80 dark:text-white/80">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;