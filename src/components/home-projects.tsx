
// import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
// import { projects, projectTags } from '@/lib/constants'
// import { Project } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import NeonButton from './neon-button'
import { MoveDownRightIcon } from 'lucide-react'
import { PROJECT_HOMEResult, TAGSResult } from '@/sanity/types'
import { underConstructionLink } from '@/lib/constants'
import { filterProjectsByTag } from '@/lib/utils'



const HomeProjects = ({ tags, projects }: { tags: TAGSResult, projects: PROJECT_HOMEResult }) => {
    // const [selectedTagSlug, setSelectedTagSlug] = useState<string>()

    return (
        <section className='min-h-[50vh]
       bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        from-myPrimary/30
        via-myPrimary/10
        to-background
        py-10
        
        '>
            <h3 className='text-4xl xs:text-6xl text-center flex justify-center items-center sm:py-20 py-10'>
                <span className='flex items-center'>My Projects</span>
            </h3>
            <div className=''>
                <Tabs defaultValue={tags[0].slug?.current} className="w-full overflow-x-hidden">
                    <TabsList className='border-y bg-background
                    w-full
                    rounded-none
                    h-24
                    border-foreground/30
                    overflow-x-hidden
                    
                    '>
                        {
                            tags.map((tag, index) => (
                                <TabsTrigger key={tag.title || index} value={tag.slug?.current || ""}
                                    className='border-x h-full rounded-none font-park capitalize lg:px-7
                                    text-xs
                                    sm:text-base
                                    flex-wrap
                                    max-xs:text-[0.5rem]
                                    max-xs:px-0.5
                                    '
                                // onClick={() => {
                                //     setSelectedTagSlug(tag.slug?.current)
                                // }}
                                >
                                    {tag.title}
                                </TabsTrigger>
                            ))
                        }
                    </TabsList>
                    {
                        tags.map((tag, indx) => (
                            <TabsContent key={tag.slug?.current || indx} value={tag.slug?.current || ""} >
                                <div className='grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 min-h-40 
                                max-w-screen-xl mx-auto pt-10
                                max-sm:px-3
                                '>
                                    {
                                        filterProjectsByTag(projects, tag.slug?.current || "").map((project) => {
                                            return (
                                                <SingleProject
                                                    key={project.title}
                                                    project={project}
                                                />
                                            )
                                        })
                                    }
                                </div>
                                <div className='max-w-screen-xl mx-auto
                                max-sm:px-3
                                '>
                                    <NeonButton
                                        href={`/project`}
                                        className=' flex-nowrap text-white max-md:text-xs w-20  sm:w-32 md:w-56
                                        md:translate-x-20
                                        max-sm:justify-center
                                        '
                                    >
                                        <span className='line-clamp-1 hidden sm:block'>
                                            All Projects
                                        </span>
                                        <MoveDownRightIcon size={13}
                                            fontWeight={900}
                                            color='white' className='' />
                                    </NeonButton>

                                </div>

                            </TabsContent>
                        ))
                    }
                </Tabs>

            </div>
        </section>
    )
}

type Unpacked<T> = T extends (infer U)[] ? U : T;
type SingleProjectType = Unpacked<PROJECT_HOMEResult>; // Event | User
const SingleProject = ({ project }: { project: SingleProjectType }) => {
    return (
        <div className='w-full  aspect-square '>
            <Link href={`/project/${project.slug?.current}`}
                className={`rounded-full  size-[80%] mx-auto my-auto 
            relative
            block
            group
            `}
            >
                <Image
                    src={project.mainImage?.asset?.url || underConstructionLink}
                    fill
                    alt={project.title + "Image"}
                    className='object-cover rounded-full opacity-30 group-hover:opacity-100 transition-all'
                />
                <span
                    className='absolute
                    text-center
                 left-[50%]
                 top-[50%]
                 translate-x-[-50%]
                 translate-y-[-50%]
                 block
                 group-hover:hidden
                 text-[0.45rem]
                 sm:text-xs
                 md:text-base
                 line-clamp-2
                 '
                >{project.title}</span>
            </Link>
        </div>
    )
}

export default HomeProjects