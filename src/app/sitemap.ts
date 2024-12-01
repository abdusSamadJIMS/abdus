import { baseUrl } from "@/lib/constants";
import { client } from "@/sanity/lib/client";
import { BLOG_SLUGS, PROJECT_SLUGS } from "@/sanity/lib/queries";
import { MetadataRoute } from "next";

export const revalidate = 43200

export default async function sitemap() {
    const project = await client.fetch(PROJECT_SLUGS)
    const blogs = await client.fetch(BLOG_SLUGS)

    const projectSitemaps: MetadataRoute.Sitemap = project.map((project) => {
        return {
            url: `${baseUrl}/project/${project.slug?.current}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        }
    })
    const blogSitemaps: MetadataRoute.Sitemap = blogs.map((blog) => {
        return {
            url: `${baseUrl}/blog/${blog.slug?.current}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        }
    })
    const fixedUrls: MetadataRoute.Sitemap = [
        {

            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {

            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {

            url: `${baseUrl}/project`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {

            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {

            url: `${baseUrl}/terms-of-use`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.4,
        },
        {

            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.4,
        },

    ]

    return [...fixedUrls,
    ...projectSitemaps,
    ...blogSitemaps
    ]
}