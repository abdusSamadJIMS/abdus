import React, { Suspense } from 'react'
import DownloadCV from './download-cv'
// import Image from 'next/image'
import { GithubIcon, InstagramIcon, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import { TwitterIcon } from '@sanity/icons'
import { sanityFetch } from '@/sanity/lib/live'
import { AUTHOR_SOCIAL, RESUME } from '@/sanity/lib/queries'
import LazyBackground from './lazy-background'

const HomeHero = async () => {
    const { data: social } = await sanityFetch({ query: AUTHOR_SOCIAL, tag: "author" })
    const { data: resume } = await sanityFetch({
        query: RESUME,
        tag: "author"
    })

    return (
        <section className='h-screen bg-gradient-to-br from-background via-background to-myPrimary/40
        pt-32
        relative
        '>
            <div className='flex
                    flex-col
                    gap-4
                    absolute
                    md:right-5
                    md:top-20
                    max-sm:flex-row
                    max-sm:bottom-2
                    max-sm:right-2
                    max-sm:gap-1
                    z-20
                    
                    '>
                <Link
                    href={social?.socialMedia?.twitter || ""}
                >

                    <TwitterIcon
                        className='border sm:p-3
                        p-1.5
                            rounded-full
                            sm:size-12
                            size-8
                            max-sm:text-foreground
                            max-sm:bg-muted/20
                            
                            '

                    />
                </Link>
                <Link
                    href={social?.socialMedia?.instagram || ""}
                >

                    <InstagramIcon
                        className='border sm:p-3
                        p-1.5
                            rounded-full
                            sm:size-12
                            size-8
                            max-sm:text-foreground
                            max-sm:bg-muted/20
                            '
                    />
                </Link>
                <Link
                    href={social?.socialMedia?.github || ""}
                >

                    <GithubIcon
                        className='border sm:p-3
                        p-1.5
                            rounded-full
                           sm:size-12
                           size-8
                           max-sm:text-foreground
                            max-sm:bg-muted/20
                            '
                    />
                </Link>
                <Link
                    href={social?.socialMedia?.linkedIn || ""}
                >

                    <LinkedinIcon
                        className='border 
                            rounded-full
                            sm:p-3
                            p-1.5
                           sm:size-12
                           size-8
                           max-sm:text-foreground
                            max-sm:bg-muted/20
                            '
                    />
                </Link>
            </div>
            <div className='h-full flex justify-evenly
            max-w-screen-lg mx-auto
           flex-col
           sm:flex-row
            '>
                <div className='sm:flex-1 space-y-3
                            my-auto

                '>

                    <h2
                        className='uppercase font-park opacity-30
                        text-xl pl-5
                        font-medium -tracking-tighter
                        '
                    >FULL STACK WEB DEVELOPER</h2>
                    <h3 className='gradient-text from-secondary via-foreground to-secondary
                    sm:text-8xl
                    text-6xl
                    tracking-tighter
                    pb-7
                    max-sm:pl-5
                    
                    '>
                        <span className='block'>ABDUS</span>
                        <span className='block'>SAMAD</span>
                    </h3>
                    <p
                        className='border-l-2
                        sm:pl-20
                        max-sm:ml-3
                        pl-5
                        font-park
                        max-w-xs 
                        border-foreground/30
                    '
                    >
                        I&apos;m full-stack developer and I work remotely from Delhi,India
                    </p>
                </div>
                <Suspense>

                    <LazyBackground
                        url='/myPhoto.png'
                    >
                        <DownloadCV
                            resume={resume}
                        />
                    </LazyBackground>
                </Suspense>
            </div>
        </section>
    )
}

export default HomeHero