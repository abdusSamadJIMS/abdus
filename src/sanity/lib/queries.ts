import { defineQuery } from 'next-sanity'

export const GET_10_BLOGS = defineQuery(`*[_type == "post"][0...10]{
    _id,title,slug,publishedAt,mainImage{alt,asset->{url}},categories[0]->{title}
}`)
export const GET_ALL_BLOGS = defineQuery(`*[_type == "post"]{
    _id,title,slug,publishedAt,mainImage{alt,asset->{url}},categories[0]->{title}
}`)
export const GET_BLOG = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
    _id,title,slug,publishedAt,mainImage{alt,asset->{url}},categories[0]->{title},body
}`)


export const PROJECTS = defineQuery(`*[_type == "project"]{
    title,slug,body,isCompleted,completedAt, tags[]->{title},link,mainImage{alt,asset->{url}},description
}`)
export const PROJECT = defineQuery(`*[_type == "project" && slug.current == $slug][0]{
    title,slug,body,isCompleted,completedAt, tags[]->{title,slug},link,mainImage{alt,asset->{url}}
}`)

export const PROJECT_HOME = defineQuery(`*[_type == "project"] {
    title,
    slug,
    tags[]->{
        title,
        slug
    },  
    mainImage {
      alt,
      asset-> {
        url
      }
    }
  }
  `)


export const TAGS = defineQuery(`*[_type == "tag"]{
    title,slug
}`)

export const AUTHOR_SOCIAL = defineQuery(`*[_type == 'author'][0]{
    socialMedia
  }`)

export const RESUME = defineQuery(`*[_type == 'author'][0]{
    resume{
      asset->{
        url
      }
    }
  }`)

export const BLOG_METADATA = defineQuery(`
    *[_type == "post" && slug.current == $slug][0]{
      title,
      mainImage{
        asset->{
          url
        }
      },
      description,
      slug
    }
    `)

export const BLOG_SLUGS = defineQuery(`*[_type == "post"]{
  slug
}`)
export const PROJECT_METADATA = defineQuery(`*[_type == "project" && slug.current == $slug][0]{
  title,
  mainImage{
    asset->{
      url
    }
  },
  description,
  slug
}`)

export const PROJECT_SLUGS = defineQuery(`*[_type == "project"]{
  slug
}`)