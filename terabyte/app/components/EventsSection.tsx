'use client'

import EventCard from './EventCard'
import { motion } from 'framer-motion'
import afternysc from '@/app/assets/afternysc.png'
import maxservice from '@/app/assets/maxservice.jpg'
import dollarmarket from '@/app/assets/dollarmarket.png'
import cohort1 from '@/app/assets/cohort1.jpg'
import { StaticImageData } from 'next/image'

// Define the event interface
interface Event {
  image: StaticImageData
  title: string
  date: string
  time: string
  status: 'upcoming' | 'live' | 'ended' | 'replay'
  link: string
}

const events: Event[] = [
  {
    image: afternysc,
    title: "After NYSC: Building a Career in Digital Marketing",
    date: "March 15, 2024",
    time: "2:00 PM WAT",
    status: "upcoming",
    link: "#"
  },
  {
    image: maxservice,
    title: "Maximizing Service-Based Business Growth",
    date: "March 10, 2024",
    time: "3:00 PM WAT",
    status: "replay",
    link: "#"
  },
  {
    image: dollarmarket,
    title: "Dollar Marketing: International Business Strategy",
    date: "March 8, 2024",
    time: "1:00 PM WAT",
    status: "ended",
    link: "#"
  },
  {
    image: cohort1,
    title: "Marketing Cohort 1.0: Foundation Program",
    date: "March 12, 2024",
    time: "4:00 PM WAT",
    status: "live",
    link: "#"
  }
]

const EventsSection = () => {
  return (
    <section className="relative w-full bg-background dark:bg-background py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/3 dark:bg-primary/5 rounded-full blur-3xl -z-10" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary dark:text-white">
            Events Calendar
          </h2>
          <p className="text-lg text-foreground/80 dark:text-secondary/90 max-w-2xl mx-auto">
            Join our upcoming events and workshops to enhance your marketing skills and connect with industry experts.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <EventCard {...event} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsSection