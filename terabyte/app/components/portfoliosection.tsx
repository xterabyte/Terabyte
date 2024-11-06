'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { StaticImageData } from 'next/image'
import { motion, useAnimationControls, AnimatePresence } from 'framer-motion'

// Import company logos
import karroten from '@/app/assets/karroten.png'
import martville from '@/app/assets/Martville.png'
import rexterai from '@/app/assets/rexterai.png'
import silverspoon from '@/app/assets/silverspoon-continent.png'


interface Company {
  id: number
  name: string
  logo: StaticImageData
}

const companies: Company[] = [
  { id: 1, name: 'Karroten', logo: karroten },
  { id: 2, name: 'Martville', logo: martville },
  { id: 3, name: 'Rexter AI', logo: rexterai },
  { id: 4, name: 'Silverspoon Continent', logo: silverspoon },
]

const LOGO_WIDTH = 160 // Width of each logo container
const VISIBLE_LOGOS = 4 // Number of visible logos at once
const AUTO_SCROLL_INTERVAL = 3000 // Auto scroll interval in ms

const PortfolioCompanies = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimationControls()
  const autoScrollTimerRef = useRef<NodeJS.Timeout>()

  // Calculate the circular index for infinite scroll
  const getCircularIndex = useCallback((index: number) => {
    const len = companies.length
    return ((index % len) + len) % len
  }, [])

  // Get visible companies based on current index
  const getVisibleCompanies = useCallback(() => {
    const visibleCompanies = []
    for (let i = 0; i < VISIBLE_LOGOS; i++) {
      const index = getCircularIndex(activeIndex + i)
      visibleCompanies.push({
        ...companies[index],
        key: `${companies[index].id}-${activeIndex + i}`
      })
    }
    return visibleCompanies
  }, [activeIndex, getCircularIndex])

  // Handle manual navigation
  const navigate = useCallback((direction: 'next' | 'prev') => {
    setActiveIndex(prevIndex => {
      const newIndex = direction === 'next' 
        ? prevIndex + 1 
        : prevIndex - 1
      return getCircularIndex(newIndex)
    })

    // Fixed animation configuration
    const animateSlide = async () => {
      await controls.start({
        x: direction === 'next' ? -LOGO_WIDTH : LOGO_WIDTH,
        transition: { duration: 0.3 }
      })
      controls.set({ x: 0 })
    }

    animateSlide()
  }, [controls, getCircularIndex])

  // Setup auto scroll
  useEffect(() => {
    const startAutoScroll = () => {
      if (isAutoScrolling) {
        autoScrollTimerRef.current = setInterval(() => {
          navigate('next')
        }, AUTO_SCROLL_INTERVAL)
      }
    }

    const stopAutoScroll = () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current)
      }
    }

    startAutoScroll()
    return () => stopAutoScroll()
  }, [isAutoScrolling, navigate])

  // Drag gesture handling
  const handleDragEnd = useCallback((event: any, info: any) => {
    const threshold = LOGO_WIDTH / 4
    if (Math.abs(info.offset.x) > threshold) {
      navigate(info.offset.x < 0 ? 'next' : 'prev')
    } else {
      controls.start({ x: 0 })
    }
  }, [controls, navigate])

  // Mouse event handlers
  const handleMouseEnter = () => setIsAutoScrolling(false)
  const handleMouseLeave = () => setIsAutoScrolling(true)

  return (
    <section className="w-full bg-secondary/50 dark:bg-background py-16 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-primary dark:text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Portfolio Companies
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-background/80 hover:bg-white dark:hover:bg-background/90 shadow-lg -ml-4"
            onClick={() => navigate('prev')}
          >
            <ChevronLeft className="w-6 h-6 text-primary dark:text-white" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-background/80 hover:bg-white dark:hover:bg-background/90 shadow-lg -mr-4"
            onClick={() => navigate('next')}
          >
            <ChevronRight className="w-6 h-6 text-primary dark:text-white" />
          </Button>

          <div 
            ref={containerRef}
            className="overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="flex gap-4 md:gap-8 py-8 px-4"
              animate={controls}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
            >
              <AnimatePresence mode="popLayout">
                {getVisibleCompanies().map((company, index) => (
                  <motion.div
                    key={company.key}
                    className="flex-shrink-0 w-32 md:w-40 h-20 relative group"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center bg-white dark:bg-white/5 rounded-lg shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="w-4/5 h-4/5 object-contain dark:brightness-90 transition-all duration-300"
                        width={160}
                        height={80}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {companies.map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full bg-primary/20 dark:bg-primary/40"
            animate={{
              scale: index === activeIndex ? 1.2 : 1,
              backgroundColor: index === activeIndex ? 'var(--primary)' : 'rgba(var(--primary), 0.2)'
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default PortfolioCompanies