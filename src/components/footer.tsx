import { links } from '@/lib/constants'
import { AUTHOR_SOCIALResult } from '@/sanity/types'
import { Separator } from '@radix-ui/react-separator'
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = ({ social }: { social: AUTHOR_SOCIALResult }) => {
    return (
        <footer
            className='pt-10 '
        >
            <section
                className='h-96 
            bg-gradient-to-br
            from-background
            via-background
            to-myPrimary/30
max-sm:px-3
            '
            >
                <div
                    className='max-w-screen-xl mx-auto
                    relative
                    
                    h-full
                    '
                >
                    <h6
                        className='gradient-text
                        from-background via-foreground to-background
                        sm:text-9xl
                        xs:text-7xl
                        text-5xl
                        
                        '
                    >Follow me</h6>
                    <div className='flex
                    flex-col
                    sm:flex-row
                    gap-4
                    max-sm:absolute
                    max-sm:right-0
                    max-sm:bottom-5
                    z-20
                    '>
                        <Link
                            href={social?.socialMedia?.twitter || "/"}
                        >

                            <TwitterIcon
                                className='border p-3
                            rounded-full
                            '
                                size={50}
                            />
                        </Link>
                        <Link
                            href={social?.socialMedia?.instagram || "/"}
                        >

                            <InstagramIcon
                                className='border p-3
                            rounded-full
                            '
                                size={50}
                            />
                        </Link>
                        <Link
                            href={social?.socialMedia?.github || "/"}
                        >

                            <GithubIcon
                                className='border p-3
                            rounded-full
                            '
                                size={50}
                            />
                        </Link>
                        <Link
                            href={social?.socialMedia?.linkedIn || "/"}
                        >

                            <LinkedinIcon
                                className='border 
                            rounded-full
                            p-3
                            
                            '
                                size={50}
                            />
                        </Link>
                    </div>
                    <div
                        className='
                    absolute
                    h-[120%]
                    w-80
                   bottom-0
                   md:right-64
                   right-0
                   '
                    >
                        <div className='relative w-full h-full'>
                            <Image
                                src={'/myPhoto.png'}
                                alt={'My Photo'}
                                fill
                                className='object-cover object-top'
                            />

                        </div>

                    </div>
                </div>
            </section>
            <section
                className='max-w-screen-xl mx-auto
                pt-14
                space-y-3
                max-sm:px-3

                '
            >
                <div className='flex justify-between items-center'>
                    <Link
                        href={"/"}
                    >
                        Abdus Samad
                    </Link>
                    <nav className='font-park space-x-1 sm:space-x-3
                    text-xs
                    sm:text-base
                    '>
                        {
                            links.map(link => (
                                <Link
                                    key={link.href + link.name}
                                    className='capitalize'
                                    href={link.href}>
                                    {link.name}
                                </Link>
                            ))
                        }
                    </nav>
                </div>
                <Separator
                    className='border-b-2 '
                />
                <div className='flex justify-between items-center font-park text-muted-foreground
                 text-xs
                    sm:text-base
                py-3
                '>
                    <div>
                        &copy; {new Date().getFullYear()} Abdus Samad. All rights reserved.
                    </div>
                    <div className='flex  items-center gap-2 sm:gap-x-5'>
                        <Link
                            href={"/privacy-policy"}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href={'/terms-of-use'}
                        >
                            Terms of Use
                        </Link>
                    </div>

                </div>
            </section>
        </footer>
    )
}

export default Footer