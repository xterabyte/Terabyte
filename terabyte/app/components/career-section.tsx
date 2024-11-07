'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import SmilingWoman from '@/app/assets/SmilingWoman.png'

const CareerSection = () => {
  return (
    <section className="relative w-full bg-background dark:bg-[#0a4c68] overflow-hidden">
      <div className="w-full pt-16 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-secondary dark:bg-secondary/5 relative">
          {/* Image Container */}
          <div className="relative w-full lg:w-1/2 min-h-[500px] lg:min-h-[600px] -mt-10 lg:-mt-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={SmilingWoman}
                alt="Woman looking up representing career growth"
                fill
                className="object-contain object-center dark:opacity-90 transition-opacity duration-300"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Enhanced image overlay for dark mode */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/20 
                          dark:from-[#0a4c68]/80 dark:via-[#0a4c68]/40 dark:to-[#0a4c68] pointer-events-none" />
          </div>

          {/* Content Container */}
          <div className="lg:w-1/2 space-y-8 px-6 lg:px-12 py-12 lg:py-20 relative">
            <div className="space-y-6 max-w-xl relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary dark:text-white tracking-tight leading-tight">
                Opportunities for{' '}
                <span className="block">Career Growth</span>
              </h2>
              <p className="text-lg text-foreground/80 dark:text-gray-200 leading-relaxed">
                We not only build talents. We connect talents with roles in the marketing space.
                We support your career and help founders find the expertise they need.
              </p>
              <Button 
                variant="outline"
                size="lg"
                className="mt-4 text-primary border-teragreen hover:bg-primary hover:text-white 
                         dark:text-white dark:border-white dark:hover:bg-white/20 dark:hover:text-white 
                         transition-colors duration-300 font-semibold tracking-wide min-w-[180px]"
              >
                LEARN MORE
              </Button>
            </div>

            {/* Enhanced decorative background elements for dark mode */}
            <div className="absolute inset-0 dark:bg-gradient-radial dark:from-[#0a4c68] dark:via-[#0a6890] dark:to-[#0a4c68] opacity-60 -z-10" />
            
            {/* Prominent gradient orbs */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] 
                          dark:bg-gradient-radial dark:from-[#0f8bb8]/40 dark:via-[#0a4c68]/20 dark:to-transparent 
                          rounded-full blur-2xl -z-10" />
            
            <div className="absolute -top-20 right-0 w-[300px] h-[300px] 
                          dark:bg-gradient-radial dark:from-[#14a1d4]/30 dark:via-[#0a4c68]/10 dark:to-transparent 
                          rounded-full blur-2xl -z-10" />
            
            <div className="absolute bottom-0 left-0 w-[350px] h-[350px] 
                          dark:bg-gradient-radial dark:from-[#07364b]/40 dark:via-[#0a4c68]/20 dark:to-transparent 
                          rounded-full blur-2xl -z-10" />
            
            {/* Additional accent gradients */}
            <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] 
                          dark:bg-gradient-radial dark:from-[#14d4d4]/20 dark:to-transparent 
                          rounded-full blur-xl -z-10" />
            
            <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] 
                          dark:bg-gradient-radial dark:from-[#0f8bb8]/30 dark:to-transparent 
                          rounded-full blur-xl -z-10" />
          </div>
        </div>
      </div>

      {/* Enhanced border line decor */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r 
                    from-transparent via-[#0a4c68]/40 to-transparent 
                    dark:from-transparent dark:via-[#14a1d4]/40 dark:to-transparent" />
    </section>
  )
}

export default CareerSection