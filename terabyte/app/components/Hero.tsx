'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="min-h-screen w-full relative flex items-center justify-center bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              We Empower Startups.
              <br />
              We Build Marketing Talents.
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-foreground/80 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We help African Founders unlock growth through tailored
              marketing resources and top-tier marketing talents. That&apos;s how
              we discover and create success stories.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 dark:bg-primary dark:hover:bg-primary/90 text-white px-8 font-semibold tracking-wide min-w-[180px]"
            >
              LEARN MORE
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-white px-8 font-semibold tracking-wide min-w-[180px] transition-colors"
            >
              GET STARTED
            </Button>
          </motion.div>

          {/* Bold background decorative elements */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            {/* Main central gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] dark:bg-gradient-radial dark:from-primary/30 dark:via-purple-600/20 dark:to-transparent rounded-full blur-2xl opacity-90" />
            
            {/* Top right dramatic accent */}
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] dark:bg-gradient-radial dark:from-blue-500/25 dark:via-cyan-500/15 dark:to-transparent rounded-full blur-2xl" />
            
            {/* Bottom left dramatic accent */}
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] dark:bg-gradient-radial dark:from-indigo-500/25 dark:via-violet-500/15 dark:to-transparent rounded-full blur-2xl" />

            {/* Additional bold accents */}
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] dark:bg-gradient-radial dark:from-teal-500/20 dark:via-emerald-500/10 dark:to-transparent rounded-full blur-2xl" />
            <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] dark:bg-gradient-radial dark:from-fuchsia-500/20 dark:via-pink-500/10 dark:to-transparent rounded-full blur-2xl" />

            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 dark:bg-background/10 backdrop-blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero