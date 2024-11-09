// lib/sanity.ts
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // Use current date
  useCdn: true,
})

// Set up image builder
const builder = imageUrlBuilder(client)

export function urlForImage(source: SanityImageSource) {
  return builder.image(source)
}

// Types for our events
export interface SanityEvent {
  _id: string
  title: string
  slug: {
    current: string
  }
  status: 'upcoming' | 'live' | 'ended' | 'replay'
  startDateTime: string
  endDateTime: string
  timeZone: string
  coverImage: {
    asset: {
      _ref: string
    }
    alt: string
  }
  registrationLink: string
  replayUrl?: string
}

// Fetch events query
export async function getEvents(): Promise<SanityEvent[]> {
  return await client.fetch(`
    *[_type == "event"] | order(startDateTime asc) {
      _id,
      title,
      slug,
      status,
      startDateTime,
      endDateTime,
      timeZone,
      coverImage {
        asset->,
        alt
      },
      registrationLink,
      replayUrl
    }
  `)
}