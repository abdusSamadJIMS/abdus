import React from 'react'
import { Separator } from './ui/separator'

import BlogCarousel from './blogs-carousel'
import NeonButton from './neon-button'
import { MoveDownRightIcon } from 'lucide-react'
import { GET_10_BLOGSResult } from '@/sanity/types'

const HomeBlogs = ({ blogs }: { blogs: GET_10_BLOGSResult }) => {
    return (
        <section className='min-h-[50vw]'>
            <h3 className='text-4xl xs:text-6xl flex  md:justify-between items-start md:items-center sm:py-16 py-10
            flex-col md:flex-row
            gap-2
            max-md:px-3
            max-w-screen-xl mx-auto
            '>
                <span className=''>My Blogs</span>
                <span className='
                text-muted-foreground
                font-park
                md:text-sm
                text-xs
                max-w-xs
                '>
                    Explore insightful articles on web development, design, and creative projects to inspire your digital journey.
                </span>
            </h3>
            <Separator />

            <div className='py-10             overflow-x-hidden
'>
                {blogs && <BlogCarousel
                    blogs={blogs}
                />}
            </div>
            <div className="
            max-w-screen-xl mx-auto
              max-sm:px-3
            ">
                <NeonButton
                    href={`/blog`}
                    className=' flex-nowrap text-white max-md:text-xs w-20  sm:w-32 md:w-56
                                        md:translate-x-20
                                        max-sm:justify-center
                                        '
                >
                    <span className='line-clamp-1 hidden sm:block'>
                        All Articles
                    </span>
                    <MoveDownRightIcon size={13}
                        fontWeight={900}
                        color='white' className='' />
                </NeonButton>

            </div>
        </section>
    )
}


export default HomeBlogs