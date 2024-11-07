// sanity/schemas/siteSettings.ts
export const siteSettings = {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Site Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Site Description',
        type: 'text',
      },
      {
        name: 'logo',
        title: 'Site Logo',
        type: 'image',
      },
      {
        name: 'social',
        title: 'Social Links',
        type: 'object',
        fields: [
          { name: 'twitter', title: 'Twitter URL', type: 'url' },
          { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
          { name: 'github', title: 'GitHub URL', type: 'url' },
        ],
      },
      {
        name: 'navigation',
        title: 'Navigation Links',
        type: 'array',
        of: [{
          type: 'object',
          fields: [
            { name: 'text', title: 'Link Text', type: 'string' },
            { name: 'url', title: 'URL', type: 'string' },
          ],
        }],
      },
    ],
  }
  