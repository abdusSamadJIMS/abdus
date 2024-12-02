// import { client } from '@/sanity/lib/client'
import { sanityFetch } from '@/sanity/lib/live'
import { GET_ALL_BLOGS } from '@/sanity/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Metadata } from 'next'
import { baseUrl, mdata, myName } from '@/lib/constants'



export const metadata: Metadata = {
    ...mdata,
    title: "All Blogs",
    description: `
    A collection of all my blog posts. I write about various topics, including tech, personal development
    `,

    openGraph: {
        type: "website",
        countryName: "India",
        description: mdata.description!,
        title: mdata.title!,
        url: `${baseUrl}/opengraph-image.png`,
        images: {
            url: `${baseUrl}/opengraph-image.png`,
        }
    },
    twitter: {
        card: "summary_large_image",
        creator: myName,
        description: mdata.description!,
        site: "https://x.com/AbdusSamad85611?s=09",
        title: mdata.title!,
        images: {
            url: `${baseUrl}/twitter-image.png`,
        },
    },
    alternates: {
        canonical: `${baseUrl}/blog`
    }

}

const page = async () => {
    const { data: blogs } = await sanityFetch({
        query: GET_ALL_BLOGS,
        tag: "post"
    })
    return (
        <menu
            className='min-h-screen
                max-w-screen-xl
                mx-auto
                pt-32
                px-4
                space-y-3
    '
        >
            <h1
                className='sm:text-4xl text-3xl'
            >
                All Articles
            </h1>
            <section
                className='grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                
                '
            >
                {
                    blogs.map((blog) => (
                        <Link
                            key={blog.slug?.current}
                            href={`blog/${blog.slug?.current}`}
                            className='block border h-60 rounded-md p-2 border-myPrimary'
                        >
                            <div className='h-[70%] border rounded-sm relative'>
                                <Image
                                    src={blog.mainImage?.asset?.url || '/myPhoto.jpg'}
                                    alt={blog.mainImage?.alt || "Image"}
                                    fill
                                    className='object-cover rounded-sm'
                                />
                            </div>

                            <div className='flex flex-col justify-between h-[28%]'>
                                <h2 className='text-lg line-clamp-1 '>{blog.title}</h2>
                                <div className='flex justify-between font-park items-center'>
                                    <p className='text-sm'>{blog.categories?.title}</p>
                                    <p className='text-sm '>{
                                        new Date(blog.publishedAt?.toString() || "").toLocaleDateString("en-US", {
                                            month: "long",
                                            year: "numeric"
                                        })
                                    }</p>
                                </div>
                            </div>

                        </Link>
                    ))
                }
            </section>
        </menu>
    )
}

export default page