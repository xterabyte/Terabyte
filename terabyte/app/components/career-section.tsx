'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

const CareerSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content - Left Side */}
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold text-cyan-900 dark:text-cyan-50">
            Opportunities for Career Growth
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
            We not only build talents. We connect talents with roles in the marketing space. 
            We support your career and help founders find the expertise they need.
          </p>
          <Button 
            variant="outline"
            className="mt-6 border-2 border-cyan-900 dark:border-cyan-500 text-cyan-900 dark:text-cyan-50 hover:bg-cyan-900 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-cyan-950 transition-colors"
          >
            LEARN MORE
          </Button>
        </div>

        {/* Image - Right Side */}
        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
          <Image
            src="/assets/SmilingWoman.png"
            alt="Woman looking up representing career growth"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Overlay gradient for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default CareerSection