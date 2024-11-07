'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import RocketIcon from '@/app/assets/rocket.png'

const MarketingLaunchpad = () => {
  return (
    <section className="relative w-full bg-background dark:bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-12">
          {/* Header with inline rocket */}
          <motion.div 
            className="flex items-center gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Rocket Icon */}
            <motion.div
              className="relative w-12 h-12"
              initial={{ y: 0 }}
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse" as const,
                ease: "easeInOut"
              }}
            >
              <Image
                src={RocketIcon}
                alt="Rocket icon"
                fill
                className="object-contain object-center"
                priority
                sizes="48px"
              />
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-primary dark:text-white tracking-tight">
              Marketing Launchpad
            </h2>
          </motion.div>

          {/* Content Container */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              className="lg:w-1/2 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-foreground/80 dark:text-secondary/90 leading-relaxed max-w-xl">
                Practical Marketing Tips To Help You Grow And Scale
              </p>
              <Button 
                variant="outline"
                size="lg"
                className="text-primary border-primary hover:bg-primary hover:text-white 
                         dark:text-primary dark:border-primary dark:hover:bg-primary dark:hover:text-white 
                         transition-colors duration-300 font-semibold tracking-wide min-w-[180px]"
              >
                READ BLOG POSTS HERE
              </Button>
            </motion.div>

            {/* Decorative Elements */}
            <div className="lg:w-1/2 relative min-h-[300px]">
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                {/* Animated particles */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/30 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <motion.div 
                  className="absolute top-3/4 right-1/4 w-2 h-2 bg-primary/30 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />
                <motion.div 
                  className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary/30 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1,
                  }}
                />

                {/* Background blur effects */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
                  <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/3 dark:bg-primary/5 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-primary/3 dark:bg-primary/5 rounded-full blur-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Border gradient */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent dark:via-primary/10" />
    </section>
  )
}

export default MarketingLaunchpad