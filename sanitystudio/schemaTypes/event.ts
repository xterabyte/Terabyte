// schemas/event.ts
import { defineField, defineType } from 'sanity'
import { CalendarIcon } from '@sanity/icons'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    // Basic Event Information
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'status',
      title: 'Event Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Live', value: 'live' },
          { title: 'Ended', value: 'ended' },
          { title: 'Replay Available', value: 'replay' }
        ]
      },
      validation: Rule => Rule.required()
    }),

    // Date and Time
    defineField({
      name: 'startDateTime',
      title: 'Start Date and Time',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'endDateTime',
      title: 'End Date and Time',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'timeZone',
      title: 'Time Zone',
      type: 'string',
      initialValue: 'WAT',
      options: {
        list: [
          { title: 'West Africa Time (WAT)', value: 'WAT' },
          { title: 'Greenwich Mean Time (GMT)', value: 'GMT' },
        ]
      }
    }),

    // Media and Short Description
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      description: 'Brief description for event card (max 200 characters)',
      type: 'text',
      validation: Rule => Rule.max(200)
    }),

    // Embedded Speakers
    defineField({
      name: 'speakers',
      title: 'Event Speakers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ 
              name: 'name', 
              type: 'string', 
              title: 'Name',
              validation: Rule => Rule.required()
            }),
            defineField({ 
              name: 'role', 
              type: 'string', 
              title: 'Role/Title' 
            }),
            defineField({ 
              name: 'image', 
              type: 'image', 
              title: 'Speaker Image',
              options: { 
                hotspot: true 
              }
            }),
            defineField({ 
              name: 'bio', 
              type: 'text', 
              title: 'Short Bio',
              validation: Rule => Rule.max(300)
            })
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'role',
              media: 'image'
            }
          }
        }
      ]
    }),

    // Rich Content Block
    defineField({
      name: 'content',
      title: 'Event Content',
      type: 'array',
      of: [
        { 
          type: 'block',
          // Customize block content styles
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'}
          ],
          // Customize block marks
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Underline', value: 'underline'}
            ]
          }
        },
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: Rule => Rule.required()
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption'
            }
          ]
        }
      ]
    }),

    // Registration Details
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url'
    }),
    defineField({
      name: 'replayUrl',
      title: 'Replay URL',
      type: 'url',
      hidden: ({ document }) => document?.status !== 'replay'
    })
  ],

  preview: {
    select: {
      title: 'title',
      date: 'startDateTime',
      status: 'status',
      media: 'coverImage'
    },
    prepare({ title, date, status, media }) {
      return {
        title,
        subtitle: `${new Date(date).toLocaleDateString()} - ${status}`,
        media
      }
    }
  }
})