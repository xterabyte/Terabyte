// app/api/events/route.ts
import { getEvents } from '@/app/lib/sanity'
import { NextResponse } from 'next/server'

export const revalidate = 600 // Revalidate every 60 seconds

export async function GET() {
  try {
    const events = await getEvents()
    return NextResponse.json(events)
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { error: 'Error fetching events' },
      { status: 500 }
    )
  }
}