import "server-only"
import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

const token = process.env.SANITY_WRITE_TOKEN

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
  stega: {
    studioUrl: "/studio"
  }
})

if (!writeClient.config().token) {
  throw new Error('No token found')
}
