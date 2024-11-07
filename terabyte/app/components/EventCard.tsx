'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'
import { StaticImageData } from 'next/image'

// Define the status type
type EventStatus = 'upcoming' | 'live' | 'ended' | 'replay'

// Define the props interface
interface EventCardProps {
  image: string | StaticImageData
  title: string
  date: string
  time: string
  status: EventStatus
  link: string
}

// Define the styles and button text objects with proper typing
const statusStyles: Record<EventStatus, string> = {
  upcoming: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  live: 'bg-green-500/10 text-green-600 dark:text-green-400',
  ended: 'bg-gray-500/10 text-gray-600 dark:text-gray-400',
  replay: 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
}

const buttonText: Record<EventStatus, string> = {
  upcoming: 'REGISTER',
  live: 'JOIN HERE',
  ended: 'ENDED',
  replay: 'ACCESS REPLAY'
}

const EventCard = ({ 
  image, 
  title, 
  date, 
  time, 
  status, 
  link 
}: EventCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white dark:bg-secondary/5 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Status Badge */}
        <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[status]}`}>
          {status.toUpperCase()}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-foreground dark:text-white line-clamp-2">
          {title}
        </h3>

        <div className="space-y-2">
          <div className="flex items-center text-sm text-foreground/70 dark:text-secondary/70">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-foreground/70 dark:text-secondary/70">
            <Clock className="w-4 h-4 mr-2" />
            <span>{time}</span>
          </div>
        </div>

        <Button 
          className={`w-full ${
            status === 'ended' 
              ? 'bg-gray-500 hover:bg-gray-600' 
              : 'bg-primary hover:bg-primary/90'
          } text-white font-semibold tracking-wide`}
          disabled={status === 'ended'}
        >
          {buttonText[status]}
        </Button>
      </div>
    </motion.div>
  )
}

export default EventCard