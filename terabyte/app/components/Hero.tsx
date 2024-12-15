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

    // Set initial size
    checkSize();

    // Add event listener
    window.addEventListener('resize', checkSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkSize);
  }, [mobileSize, desktopSize]);

  return size;
};

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsHero = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Utility function to get random positions safely
  const getRandomPosition = () => {
    if (typeof window === 'undefined') return { x: 0, y: 0 };
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    };
  };

  // Mouse movement parallax effect
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center p-3 sm:p-4 bg-primary/10 dark:bg-primary/20 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 space-y-2"
    >
      <Icon
        className="text-primary dark:text-primary-foreground mb-1 sm:mb-2"
        size={32}
      />
      <span className="text-xs sm:text-sm font-medium text-muted-foreground text-center">
        {title}
      </span>
    </motion.div>
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden pt-24 px-10 flex items-center justify-center"
    >
      {/* Layered Background with Movement */}
      <motion.div
        animate={{
          x: [mousePosition.x / -50, mousePosition.x / 50, mousePosition.x / -50],
          y: [mousePosition.y / -50, mousePosition.y / 50, mousePosition.y / -50],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/10 
        dark:from-primary/10 dark:via-secondary/20 dark:to-accent/20"
      >
        {/* Animated Geometric Shapes */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              ...getRandomPosition(),
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0.3,
            }}
            animate={{
              x: mousePosition.x + (Math.random() - 0.5) * 300,
              y: mousePosition.y + (Math.random() - 0.5) * 300,
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
            className="absolute w-4 h-4 bg-primary/10 dark:bg-primary/20 rounded-full blur-sm"
          />
        ))}
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controlsHero}
        className="relative z-10 container mx-auto px-4 grid grid-cols-1  gap-8 md:gap-12 items-center md:[grid-template-columns:60%_40%] lg:[grid-template-columns:55%_45%]"
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
              <Rocket className="text-primary" size={useResponsiveSize(24, 32)} />
              <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                Empowering African Startups
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-3xl xl:text-5xl font-bold text-primary dark:text-primary-foreground leading-tight mb-4">
              We Empower Startups.
              <br className="hidden sm:block" />
              We Build Marketing Talents.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              We help African Founders unlock growth through tailored marketing resources and top-tier marketing talents. 
              That&apos;s how we discover and create success stories.
            </p>
          </div>

          <div className="flex justify-center md:justify-start space-x-2 mt-6 sm:mx-5">
            <Button asChild size="sm" className="group flex items-center space-x-2">
              <Link href="/about">
                <span className="text-xs sm:text-sm">Learn More</span>
                <Zap
                  className="ml-2 group-hover:rotate-45 transition-transform text-yellow-500"
                  size={useResponsiveSize(16, 20)}
                />
              </Link>
            </Button>

            <Button variant="outline" size="sm" className="group flex items-center space-x-2">
              <Target
                className="group-hover:rotate-12 transition-transform mr-2"
                size={useResponsiveSize(16, 20)}
              />
              <span className="text-xs sm:text-sm">Explore Services</span>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 sm:pt-8 max-w-md mx-auto md:max-w-full">
            <FeatureIcon icon={Network} title="Connections" />
            <FeatureIcon icon={BarChart2} title="Growth" />
            <FeatureIcon icon={Users} title="Talents" />
          </div>
        </div>

        {/* Illustration/Graphic Section */}
        <div className="hidden md:flex items-center justify-center relative">
          <motion.div
            animate={{
              x: [mousePosition.x / 100, mousePosition.x / -100],
              y: [mousePosition.y / 100, mousePosition.y / -100],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: 'easeInOut',
            }}
            className="absolute w-64 md:w-96 h-64 md:h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative z-10 bg-background border border-primary/10 rounded-2xl p-6 md:p-8 shadow-2xl w-full max-w-md"
          >
            <div className="flex items-center mb-4 md:mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mr-4">
                <Network className="text-primary" size={useResponsiveSize(24, 32)} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary">
                  Marketing Ecosystem
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Connecting Talents & Opportunities
                </p>
              </div>
            </div>

            <div className="space-y-2 md:space-y-3">
              {[
                'Sales Accelerator',
                'Talents Cloud & Incubator',
                'Founders Network',
                'Marketing Launchpad',
              ].map((service) => (
                <div
                  key={service}
                  className="flex items-center space-x-3 bg-primary/5 dark:bg-primary/10 p-2 md:p-3 rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
