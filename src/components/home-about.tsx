import Image from 'next/image'
import React from 'react'
import img from '@/../public/homeAbout.png'
import { ArrowDownRightIcon, MoveDownRightIcon, PlusIcon } from 'lucide-react'
import NeonButton from './neon-button'
import { baseUrl } from '@/sanity/env'

const HomeAbout = () => {
    return (
        <section
            className='
        min-h-screen
        bg-gradient-to-r
        from-background
        via-background
        to-myPrimary/40
        '
        >
            <div className='grid grid-cols-1 md:grid-cols-2
            max-w-screen-xl mx-auto
            min-h-screen
            '>
                <div className='flex sm:justify-end
                aspect-square
                relative
                mt-20
                md:w-[38vw]
                md:h-[38vw]
              
                
                '>
                    <Image
                        src={img}
                        alt='About Us'
                        fill
                        className='rounded-full  hover:rounded-lg delay-0 transition-all duration-300
                        object-cover
                        '
                    />
                </div>
                <div className=' 
                pt-32
                
                flex
                flex-col
                space-y-20
                '>
                    <h3 className='sm:text-7xl text-3xl max-sm:pl-10 sm:-translate-x-20'>
                        <span className='inline-block
                        
                        '>
                            About
                        </span>
                        <span className='flex items-center'>me
                            <ArrowDownRightIcon
                                className='text-myPrimary  font-bold
                                sm:size-20
                                size-10
                                '
                            /></span>
                    </h3>
                    <div className='font-park max-w-xs self-center space-y-10
                    max-sm:px-3
                    '>
                        <p>
                            Creative web developer with 2.4 years of experience, passionate about crafting user-friendly, responsive, and innovative digital solutions.
                        </p>
                        <div className='flex justify-start gap-10'>

                            <div>
                                <p className='flex items-center -mb-2'>
                                    <span className='sm:text-4xl text-2xl font-bold '>10</span>
                                    <PlusIcon className='text-myPrimary' />
                                </p>
                                <span className='text-muted-foreground text-xs'>Projects Complete</span>
                            </div>
                            <div>
                                <p className='flex items-center -mb-2'>
                                    <span className='sm:text-4xl text-2xl font-bold '>2</span>
                                    <PlusIcon className='text-myPrimary' />
                                </p>
                                <span className='text-muted-foreground text-xs'>Years Experience</span>
                            </div>
                        </div>
                        <NeonButton
                            href={`${baseUrl}#hire-me`}
                            className=' flex-nowrap text-white
                            w-fit
                            '
                        >
                            <span className='line-clamp-1 hidden sm:block'>HIRE ME</span>
                            <MoveDownRightIcon size={13}
                                fontWeight={900}
                                color='white' className='' />
                        </NeonButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAbout