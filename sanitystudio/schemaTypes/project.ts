// sanity/schemas/project.ts

import { defineField, defineType } from 'sanity'
import { Rule } from '@sanity/types'

export const project = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (rule: Rule) => rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: (rule: Rule) => rule.required(),
      },
      {
        name: 'featured',
        title: 'Featured Project',
        type: 'boolean',
        initialValue: false,
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'projectcategory',
        title: 'Project Category',
        type: 'array',
        of: [{ type: 'reference', to: { type: 'projectcategory' } }],
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'technologies',
        title: 'Technologies Used',
        type: 'array',
        of: [{ type: 'string' }],
      },
      {
        name: 'projectUrl',
        title: 'Project URL',
        type: 'url',
      },
      {
        name: 'githubUrl',
        title: 'GitHub URL',
        type: 'url',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          { type: 'block' },
          { 
            type: 'image',
            options: { hotspot: true }
          },
          { type: 'codeBlock' }
        ],
      },
    ],
  }