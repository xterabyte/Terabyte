'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'

const MarketingLaunchpad = () => {
  return (
    <section className="relative w-full bg-secondary dark:bg-background py-16 lg:py-20">
      <div className="container  px-4">
        <div className=" px-10  space-y-">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <h2 className="text-4xl lg:text-7xl font-bold text-primary dark:text-white tracking-tight">
              Marketing Launchpad 🚀
            </h2>
            <p className="text-lg lg:text-3xl text-foreground/80 dark:text-secondary/90 leading-relaxed font-bold">
              Practical Marketing Tips To Help You Grow And Scale
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white dark:bg-primary dark:hover:bg-primary/90 
                         font-semibold tracking-wide min-w-[200px] mt-4"
            >
              READ BLOG POSTS HERE
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Subtle decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10" />
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent dark:via-primary/10" />
    </section>
  )
}

export default MarketingLaunchpad