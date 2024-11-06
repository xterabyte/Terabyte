'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { StaticImageData } from 'next/image'
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
  useSpring,
  useInView,
} from 'framer-motion'

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

const LOGO_WIDTH = 160
const VISIBLE_LOGOS = 4
const AUTO_SCROLL_INTERVAL = 3000

const springConfig = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.5,
} as const

const PortfolioCompanies = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, margin: "-100px" })

  // Initialize spring with proper type
  const x = useSpring(0)
  const [dragStartX, setDragStartX] = useState(0)
  
  // Triple the items for seamless loop
  const wrappedItems = [...companies, ...companies, ...companies]
  
  const calculateNewIndex = (offset: number) => {
    const newIndex = activeIndex + Math.round(offset / LOGO_WIDTH)
    return ((newIndex % companies.length) + companies.length) % companies.length
  }

  const handleDragStart = () => {
    setIsAutoScrolling(false)
    setDragStartX(x.get())
  }

  const handleDragEnd = (event: any, info: any) => {
    const offset = info.offset.x
    const velocity = info.velocity.x

    const moveByItems = Math.round((offset + velocity * 0.2) / LOGO_WIDTH)
    const newIndex = calculateNewIndex(-moveByItems)
    
    setActiveIndex(newIndex)
    x.set(-newIndex * LOGO_WIDTH)

    setTimeout(() => setIsAutoScrolling(true), 1000)
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50])

  useEffect(() => {
    if (!isAutoScrolling) return
    
    const interval = setInterval(() => {
      const newIndex = (activeIndex + 1) % companies.length
      setActiveIndex(newIndex)
      x.set(-newIndex * LOGO_WIDTH)
    }, AUTO_SCROLL_INTERVAL)

    return () => clearInterval(interval)
  }, [activeIndex, isAutoScrolling, x])

  useEffect(() => {
    if (activeIndex >= companies.length * 2) {
      setActiveIndex(activeIndex % companies.length)
      x.set(-(activeIndex % companies.length) * LOGO_WIDTH)
    }
  }, [activeIndex, x])

  const handleNavigation = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (activeIndex + 1) % companies.length
      : (activeIndex - 1 + companies.length) % companies.length
    setActiveIndex(newIndex)
    x.set(-newIndex * LOGO_WIDTH)
  }

  return (
    <section className="w-full bg-secondary/50 dark:bg-background py-16 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: parallaxY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
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
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          Portfolio Companies
        </motion.h2>

        <div className="relative max-w-5xl mx-auto" ref={containerRef}>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-background/80 hover:bg-white dark:hover:bg-background/90 shadow-lg -ml-4"
            onClick={() => handleNavigation('prev')}
          >
            <ChevronLeft className="w-6 h-6 text-primary dark:text-white" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-background/80 hover:bg-white dark:hover:bg-background/90 shadow-lg -mr-4"
            onClick={() => handleNavigation('next')}
          >
            <ChevronRight className="w-6 h-6 text-primary dark:text-white" />
          </Button>

          <div 
            ref={carouselRef}
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoScrolling(false)}
            onMouseLeave={() => setIsAutoScrolling(true)}
          >
            <motion.div
              className="flex gap-4 md:gap-8 py-8 px-4"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -LOGO_WIDTH * (companies.length - 1), right: 0 }}
              dragElastic={0.1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              <AnimatePresence mode="popLayout">
                {wrappedItems.map((company, index) => (
                  <motion.div
                    key={`${company.id}-${index}`}
                    className="flex-shrink-0 w-32 md:w-40 h-20 relative group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      filter: index % companies.length === activeIndex ? 'brightness(1.1)' : 'brightness(1)'
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center bg-white dark:bg-white/5 rounded-lg shadow-md"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
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

      <div className="flex justify-center gap-2 mt-6">
        {companies.map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full bg-primary/20 dark:bg-primary/40"
            animate={{
              scale: index === activeIndex ? 1.2 : 1,
              backgroundColor: index === activeIndex ? 'var(--primary)' : 'rgba(var(--primary), 0.2)'
            }}
            whileHover={{ scale: 1.3 }}
            onClick={() => {
              setActiveIndex(index)
              x.set(-index * LOGO_WIDTH)
            }}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </section>
  )
}

export default PortfolioCompanies