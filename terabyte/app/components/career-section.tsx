'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import SmilingWoman from '@/app/assets/happy-model.png'

const CareerSection = () => {
  return (
    <section className="relative w-full bg-background dark:bg-background">
      <div className="w-full pt-16">
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
            {/* Image overlay for dark mode */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/20 dark:to-background/80 pointer-events-none" />
          </div>

          {/* Content Container */}
          <div className="lg:w-1/2 space-y-8 px-6 lg:px-12 py-12 lg:py-20">
            <div className="space-y-6 max-w-xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary dark:text-white tracking-tight leading-tight">
                Opportunities for{' '}
                <span className="block">Seeing Career Growth</span>
              </h2>
              <p className="text-lg text-foreground/80 dark:text-secondary leading-relaxed">
                We not only build talents. We connect talents with roles in the marketing space.
                We support your career and help founders find the expertise they need.
              </p>
              <Button 
                variant="outline"
                size="lg"
                className="mt-4 text-primary border-teragreen hover:bg-primary hover:text-white 
                         dark:text-primary dark:border-primary dark:hover:bg-primary dark:hover:text-white 
                         transition-colors duration-300 font-semibold tracking-wide min-w-[180px]"
              >
                LEARN MORE
              </Button>
            </div>

            {/* Decorative background elements */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] bg-primary/3 dark:bg-primary/5 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>

      {/* Border line decor */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent dark:via-primary/10" />
    </section>
  )
}

export default CareerSection