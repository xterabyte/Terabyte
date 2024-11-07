import { post } from './post'
import { project } from './project'
import { author } from './author'
import { postCategory } from './postCategory'
import { projectCategory } from './projectCategory'
import { siteSettings } from './siteSettings'
import { codeBlock } from './codeBlock'
import { pageContent } from './pageContent'

export const schemaTypes = [
  post,
  project,
  author,
  postCategory,
  projectCategory,
  siteSettings,
  codeBlock,
  pageContent,
]