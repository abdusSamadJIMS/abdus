// import { projects } from '@/lib/constants'
import { isEven } from '@/lib/utils'
import { sanityFetch } from '@/sanity/lib/live'
// import { client } from '@/sanity/lib/client'
import { PROJECTS } from '@/sanity/lib/queries'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Metadata } from 'next'
import { baseUrl, mdata, myName } from '@/lib/constants'



export const metadata: Metadata = {
    ...mdata,
    title: "Projects",
    description: "My latest projects, including web development, graphic design, and digital marketing",
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
        canonical: `${baseUrl}/project`
    }

}

const Page = async () => {
    // const projects = await client.fetch(PROJECTS, {}, { tag: "project" })
    const { data: projects } = await sanityFetch({ query: PROJECTS, tag: "project" })
    return (
        <main
            className='min-h-screen
            pt-32
            max-w-screen-xl
            mx-auto
            '
        >
            <section className='flex flex-col gap-y-3 '>
                {
                    projects.map((project, indx) => (
                        <Link
                            key={project.title || indx}
                            href={`/project/${project.slug?.current}`}
                            className={`
                             h-64
                            grid
                            grid-cols-2
                            border-b-2
                            
                            `}
                        >
                            <div className={` relative ${isEven(indx + 1) ? "order-last" : ""}`}>
                                <Image
                                    src={
                                        project.mainImage?.asset?.url ? project.mainImage?.asset?.url :
                                            (project.isCompleted ? "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" : "https://abdus-samad-portfolio.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F211122%2Fpexels-photo-211122.jpeg&w=1920&q=75")
                                    }
                                    alt={project.mainImage?.alt || "Project Image" + indx}
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <div className=' p-3 flex flex-col justify-between'>
                                <h2 className='sm:text-2xl xs:text-xl line-clamp-2'>{project.title}</h2>
                                <p className='font-park line-clamp-2 text-[0.5rem] xs:text-xs sm:text-base'>{project.description}</p>
                                <p className='font-mono font-semibold text-muted-foreground
                                text-xs
                                sm:text-base
                                '>{
                                        project.isCompleted ? `Completed on ${project.completedAt}` : "In Progress"
                                    }</p>
                                <div
                                    className='flex flex-wrap items-center gap-1 
                                    
                                    '
                                >{
                                        project?.tags?.map((tag) => (
                                            <span
                                                key={tag.title}
                                                className='border rounded-[2px] sm:px-2 sm:py-1 
                                                xs:p-0.5
                                                p-[.24]
                                            sm:text-xs 
                                            xs:text-[.5rem]
                                            text-[0.4rem]
                                            
                                            font-park
                                            '
                                            >
                                                {tag.title}
                                            </span>
                                        ))
                                    }
                                </div>
                                <p className='font-park
                                text-blue-500
                                text-xs

                                hover:text-blue-800
                                line-clamp-2
                                '>{project.link}</p>
                            </div>
                        </Link>

                    ))
                }
            </section>
        </main>
    )
}

export default Page