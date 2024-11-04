'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="min-h-screen w-full relative flex items-center justify-center bg-gradient-to-b from-cyan-50/50 to-white dark:from-cyan-950/30 dark:to-background">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-cyan-900 dark:text-cyan-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            We Empower Startups.
            <br />
            We Build Marketing Talents.
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-cyan-800/90 dark:text-cyan-100/90 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We help African Founders unlock growth through tailored
            marketing resources and top-tier marketing talents. That&apos;s how
            we discover and create success stories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-cyan-700 hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white px-8"
            >
              LEARN MORE
            </Button>
          </motion.div>

          {/* Background decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 dark:bg-cyan-400/5 rounded-full blur-3xl -z-10" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-400/5 dark:bg-cyan-300/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-300/5 dark:bg-cyan-500/5 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  )
}

export default Hero