"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, Target } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import CareerScene to disable SSR
const CareerScene = dynamic(() => import("./CareerScene"), { ssr: false });

const CareerSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const IconCard = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
    <motion.div
      whileHover={{ scale: 1.05, translateY: -5 }}
      className="flex items-center space-x-3 bg-primary/5 dark:bg-primary/10 p-6 rounded-xl
                 backdrop-blur-sm border border-primary/10 shadow-lg"
    >
      <Icon className="text-primary dark:text-primary-foreground" size={24} />
      <span className="text-sm font-medium text-muted-foreground">{text}</span>
    </motion.div>
  );

  if (!isMounted) return null;

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-20 px-4 md:px-8 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5
                      dark:from-primary/10 dark:via-transparent dark:to-secondary/10" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" }
              }
            }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h2
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent 
                           bg-gradient-to-r from-primary to-secondary"
              >
                Opportunities for
                <span className="block">Scaling Career Growth</span>
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground max-w-md leading-relaxed"
              >
                We not only build talents. We connect talents with roles in the marketing space. 
                We support your career and help founders find the expertise they need.
              </motion.p>
            </div>

            <div className="grid gap-4">
              <IconCard icon={Users} text="Connect with Industry Leaders" />
              <IconCard icon={Briefcase} text="Access Exclusive Opportunities" />
              <IconCard icon={Target} text="Accelerate Your Career Growth" />
            </div>

            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              <Link href="/careers">
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* 3D Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[600px] rounded-2xl overflow-hidden"
          >
            <CareerScene />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
