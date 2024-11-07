'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion, Variants } from 'framer-motion'
import RocketIcon from '@/app/assets/rocket.png'

const MarketingLaunchpad = () => {
  // Animation variants for the rocket with proper typing
  const rocketAnimation: Variants = {
    initial: { y: 0 },
    hover: {
      y: -10,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse" as const, // explicitly type as "reverse"
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative w-full bg-background dark:bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Container */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div 
              className="space-y-6 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-primary dark:text-white tracking-tight leading-tight">
                Marketing Launchpad
              </h2>
              <p className="text-lg text-foreground/80 dark:text-secondary/90 leading-relaxed">
                Practical Marketing Tips To Help You Grow And Scale
              </p>
              <Button 
                variant="outline"
                size="lg"
                className="mt-4 text-primary border-primary hover:bg-primary hover:text-white 
                         dark:text-primary dark:border-primary dark:hover:bg-primary dark:hover:text-white 
                         transition-colors duration-300 font-semibold tracking-wide min-w-[180px]"
              >
                READ BLOG POSTS HERE
              </Button>
            </motion.div>
          </div>

          {/* Rocket Image Container */}
          <div className="lg:w-1/2 relative min-h-[400px] flex items-center justify-center">
            <motion.div
              className="relative w-[300px] h-[300px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate="hover"
              variants={rocketAnimation}
              viewport={{ once: true }}
            >
              <Image
                src={RocketIcon}
                alt="Rocket icon representing growth"
                fill
                className="object-contain object-center dark:opacity-90 transition-opacity duration-300"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Animated particles/stars */}
              <div className="absolute -z-10 inset-0">
                {[0, 0.5, 1].map((delay, index) => (
                  <motion.div 
                    key={index}
                    className="absolute w-2 h-2 bg-primary rounded-full"
                    style={{
                      top: index === 0 ? "25%" : index === 1 ? "75%" : "25%",
                      left: index === 0 ? "25%" : index === 1 ? "75%" : "50%",
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: delay,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/3 dark:bg-primary/5 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-primary/3 dark:bg-primary/5 rounded-full blur-2xl" />
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