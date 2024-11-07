// sanity/schemas/codeBlock.ts
export const codeBlock = {
    name: 'codeBlock',
    title: 'Code Block',
    type: 'object',
    fields: [
      {
        name: 'language',
        title: 'Language',
        type: 'string',
        options: {
          list: [
            { title: 'JavaScript', value: 'javascript' },
            { title: 'TypeScript', value: 'typescript' },
            { title: 'HTML', value: 'html' },
            { title: 'CSS', value: 'css' },
            { title: 'Python', value: 'python' },
            { title: 'Java', value: 'java' },
          ],
        },
      },
      {
        name: 'code',
        title: 'Code',
        type: 'text',
      },
      {
        name: 'filename',
        title: 'Filename (optional)',
        type: 'string',
      },
    ],
  }