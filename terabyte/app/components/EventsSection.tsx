// EventsSection.tsx
'use client'

import { useEffect, useState } from 'react'
import EventCard from './EventCard'
import { motion } from 'framer-motion'
import { SanityEvent, urlForImage } from '@/app/lib/sanity'

const EventsSection = () => {
  const [events, setEvents] = useState<SanityEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events')
        if (!response.ok) {
          throw new Error('Failed to fetch events')
        }
        const eventsData = await response.json()
        setEvents(eventsData.slice(0, 4))
      } catch (error) {
        console.error('Error fetching events:', error)
      } finally {
        setLoading(false)
      }
    }

    // Initial fetch
    fetchEvents()

    // Set up polling every minute
    const intervalId = setInterval(fetchEvents, 600000)

    // Cleanup interval on unmount
    return () => clearInterval(intervalId)
  }, [])

  if (loading) {
    return <div className="container mx-auto px-4 py-20">Loading events...</div>
  }

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
          {events.map((event, index) => {
            const eventDate = new Date(event.startDateTime)
            const formattedDate = eventDate.toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })
            const formattedTime = eventDate.toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: '2-digit',
              hour12: true
            })

            return (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EventCard
                  image={urlForImage(event.coverImage.asset).url()}
                  title={event.title}
                  date={formattedDate}
                  time={`${formattedTime} ${event.timeZone}`}
                  status={event.status}
                  link={event.status === 'replay' ? event.replayUrl! : event.registrationLink}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EventsSection