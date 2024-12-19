import React from 'react';
import { ArrowRight, BarChart2, Users, Target, TrendingUp } from 'lucide-react';
import marketing from '@/app/assets/marketing.png';
import Image from 'next/image';

const MarketingSolutions = () => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-primary">
              Hands-on Marketing Solutions for Traction
            </h2>
            <p className="text-lg text-muted-foreground">
              Our Sales Accelerator delivers tailored, high-impact marketing strategies to enhance visibility, retention, and revenue. We help startups navigate growth with less guesswork and more results.
            </p>
            <button 
              className="group flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md"
            >
              LEARN MORE
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: BarChart2, label: 'Increased Revenue', value: '150%' },
                { icon: Users, label: 'Client Retention', value: '95%' },
                { icon: Target, label: 'Market Reach', value: '200K+' },
                { icon: TrendingUp, label: 'Growth Rate', value: '3x' }
              ].map((stat, index) => (
                <div key={index} className="p-4 border-2 border-muted hover:border-secondary transition-colors rounded-lg bg-card">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <stat.icon className="w-8 h-8 text-secondary" />
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Animation Column */}
          <div 
            className="relative aspect-square"
          >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-3xl" />
            <div className="absolute inset-0">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'rgb(var(--secondary))' }} />
                    <stop offset="100%" style={{ stopColor: 'rgb(var(--accent))' }} />
                  </linearGradient>
                </defs>
                <path
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="6"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 100 100"
                    to="360 100 100"
                    dur="20s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>

            {/* Main Illustration */}
            <div className="relative w-full h-full flex items-center justify-center">
            <Image
                src={marketing}
                alt="Marketing Solutions Illustration"
                className="w-4/5 h-4/5 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSolutions;