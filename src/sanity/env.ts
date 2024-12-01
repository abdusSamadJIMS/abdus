export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-11-30'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const readToken = assertValue(
  process.env.NEXT_PUBLIC_SANITY_READ_TOKEN,
  'Missing environment variable: NEXT_PUBLIC_SANITY_READ_TOKEN'
)

export const baseUrl = assertValue(
  process.env.NEXT_PUBLIC_STUDIO_URL,
  'Missing environment variable: NEXT_PUBLIC_STUDIO_URL'
)
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
