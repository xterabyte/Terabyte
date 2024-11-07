// sanity/schemas/pageContent.ts

import { Rule } from '@sanity/types'

export const pageContent = {
    name: 'pageContent',
    title: 'Page Content',
    type: 'document',
    groups: [
      {
        name: 'hero',
        title: 'Hero Section',
      },
      {
        name: 'about',
        title: 'About Section',
      },
      {
        name: 'contact',
        title: 'Contact Section',
      },
      {
        name: 'footer',
        title: 'Footer Section',
      }
    ],
    fields: [
      {
        name: 'pageName',
        title: 'Page Name',
        type: 'string',
        validation: (rule: Rule) => rule.required(),
        options: {
          list: [
            { title: 'Home Page', value: 'home' },
            { title: 'About Page', value: 'about' },
            { title: 'Portfolio Page', value: 'portfolio' },
            { title: 'Blog Page', value: 'blog' },
            { title: 'Contact Page', value: 'contact' },
          ]
        }
      },
      // Hero Section
      {
        name: 'heroTitle',
        title: 'Hero Title',
        type: 'string',
        group: 'hero',
      },
      {
        name: 'heroSubtitle',
        title: 'Hero Subtitle',
        type: 'text',
        group: 'hero',
      },
      {
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
        group: 'hero',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'Description of the image for accessibility',
          }
        ]
      },
      {
        name: 'heroButtons',
        title: 'Hero Buttons',
        type: 'array',
        group: 'hero',
        of: [{
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Button Label',
              type: 'string'
            },
            {
              name: 'url',
              title: 'Button URL',
              type: 'string'
            },
            {
              name: 'style',
              title: 'Button Style',
              type: 'string',
              options: {
                list: [
                  { title: 'Primary', value: 'primary' },
                  { title: 'Secondary', value: 'secondary' },
                ]
              }
            }
          ]
        }]
      },
      // About Section
      {
        name: 'aboutTitle',
        title: 'About Title',
        type: 'string',
        group: 'about',
      },
      {
        name: 'aboutContent',
        title: 'About Content',
        type: 'array',
        group: 'about',
        of: [{ type: 'block' }]
      },
      {
        name: 'features',
        title: 'Features/Services',
        type: 'array',
        group: 'about',
        of: [{
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Feature Title',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Feature Description',
              type: 'text'
            },
            {
              name: 'icon',
              title: 'Feature Icon',
              type: 'string',
              description: 'Enter the icon name (e.g., "code", "design", "mobile")',
            }
          ]
        }]
      },
      // Contact Section
      {
        name: 'contactTitle',
        title: 'Contact Title',
        type: 'string',
        group: 'contact',
      },
      {
        name: 'contactText',
        title: 'Contact Text',
        type: 'text',
        group: 'contact',
      },
      {
        name: 'contactInfo',
        title: 'Contact Information',
        type: 'object',
        group: 'contact',
        fields: [
          {
            name: 'email',
            title: 'Email Address',
            type: 'string'
          },
          {
            name: 'phone',
            title: 'Phone Number',
            type: 'string'
          },
          {
            name: 'address',
            title: 'Address',
            type: 'text'
          }
        ]
      },
      // Footer Section
      {
        name: 'footerText',
        title: 'Footer Text',
        type: 'text',
        group: 'footer',
      },
      {
        name: 'socialLinks',
        title: 'Social Media Links',
        type: 'object',
        group: 'footer',
        fields: [
          {
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'url'
          },
          {
            name: 'twitter',
            title: 'Twitter URL',
            type: 'url'
          },
          {
            name: 'github',
            title: 'GitHub URL',
            type: 'url'
          },
          {
            name: 'instagram',
            title: 'Instagram URL',
            type: 'url'
          }
        ]
      }
    ]
  }
  
  // sanity/schemas/siteImages.ts
  export const siteImages = {
    name: 'siteImages',
    title: 'Site Images',
    type: 'document',
    fields: [
      {
        name: 'category',
        title: 'Image Category',
        type: 'string',
        options: {
          list: [
            { title: 'Logo', value: 'logo' },
            { title: 'Background Images', value: 'background' },
            { title: 'Icons', value: 'icon' },
            { title: 'Gallery', value: 'gallery' }
          ]
        }
      },
      {
        name: 'title',
        title: 'Image Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'Description of the image for accessibility',
          },
          {
            name: 'caption',
            title: 'Caption',
            type: 'string',
          }
        ]
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      }
    ]
  }
  
  // sanity/schemas/siteSettings.ts
  export const siteSettings = {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    groups: [
      {
        name: 'general',
        title: 'General Settings',
      },
      {
        name: 'seo',
        title: 'SEO Settings',
      },
      {
        name: 'navigation',
        title: 'Navigation',
      }
    ],
    fields: [
      // General Settings
      {
        name: 'siteName',
        title: 'Site Name',
        type: 'string',
        group: 'general',
      },
      {
        name: 'siteTagline',
        title: 'Site Tagline',
        type: 'string',
        group: 'general',
      },
      {
        name: 'logo',
        title: 'Site Logo',
        type: 'image',
        group: 'general',
      },
      {
        name: 'favicon',
        title: 'Favicon',
        type: 'image',
        group: 'general',
      },
      // SEO Settings
      {
        name: 'seoTitle',
        title: 'Default SEO Title',
        type: 'string',
        group: 'seo',
      },
      {
        name: 'seoDescription',
        title: 'Default SEO Description',
        type: 'text',
        group: 'seo',
      },
      {
        name: 'ogImage',
        title: 'Default Social Share Image',
        type: 'image',
        group: 'seo',
      },
      // Navigation
      {
        name: 'mainNavigation',
        title: 'Main Navigation',
        type: 'array',
        group: 'navigation',
        of: [{
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Link Text',
              type: 'string'
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string'
            },
            {
              name: 'isExternal',
              title: 'Opens in new tab?',
              type: 'boolean',
              initialValue: false
            }
          ]
        }]
      }
    ]
  }