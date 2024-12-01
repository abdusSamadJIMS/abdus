import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "development" ? true : false, // Set to false if statically generating pages, using ISR or 
  stega: {
    studioUrl: "/studio"
  }
})
