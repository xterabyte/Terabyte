import {defineCliConfig} from 'sanity/cli'
import dotenv from 'dotenv';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET
  },

  studioHost: process.env.SANITY_STUDIO_HOST ,
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
