'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import HappyPersons from '@/app/assets/Happypersons.png'

const MarketingSolutions = () => {
  return (
    <section className="relative w-full bg-background dark:bg-background">
      <div className="w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-0 bg-secondary dark:bg-secondary/5 relative overflow-hidden">
          {/* Content Container - Now on the left */}
          <div className="lg:w-1/2 space-y-8 px-6 lg:px-12 py-12 lg:py-20">
            <div className="space-y-6 max-w-xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-primary dark:text-white tracking-tight leading-tight">
                Hands-on Marketing{' '}
                <span className="block">Solutions for Traction</span>
              </h2>
              <p className="text-lg text-foreground/80 dark:text-secondary leading-relaxed">
                Our Sales Accelerator delivers tailored, high-impact
                marketing strategies to enhance visibility, retention, and
                revenue. We help startups navigate growth with less
                guesswork and more results.
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
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-1/4 w-[200px] h-[200px] bg-primary/3 dark:bg-primary/5 rounded-full blur-2xl -z-10" />
          </div>

          {/* Image Container - Now on the right */}
          <div className="relative w-full lg:w-1/2 min-h-[500px] lg:min-h-[600px] ">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={HappyPersons}
                alt="Happy people representing successful marketing solutions"
                fill
                className="object-cover object-center dark:opacity-90 transition-opacity duration-300"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Image overlay for dark mode */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/20 dark:to-background/80 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Border line decor */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent dark:via-primary/10" />

      {/* Additional decorative elements specific to this section */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/3 dark:bg-primary/5 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[150px] h-[150px] bg-primary/4 dark:bg-primary/6 rounded-full blur-xl -z-10" />
    </section>
  )
}

export default MarketingSolutions