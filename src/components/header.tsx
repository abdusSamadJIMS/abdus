import { baseUrl, links } from '@/lib/constants'
import { MenuIcon, MoveDownRightIcon, X } from 'lucide-react'
import Link from 'next/link'
import React, { Suspense } from 'react'
import NeonButton from './neon-button'
import ThemeToggle from './theme-toggle'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'
import { Skeleton } from './ui/skeleton'

const Header = () => {

    return (

        <header className='border mt-5 
        flex justify-between items-center
        rounded-full px-3 py-3
    border-mySecondary
        border-b-8
        border-r-8
        shadow-sm
        shadow-mySecondary
        fixed 
        left-[50%]
        
        translate-x-[-50%]
        w-[85vw]
        z-40
        bg-background
        '>
            <div>
                <h1>
                    <Link
                        href={'/'}
                        className=''
                    >

                        Abdus<br className='block sm:hidden' />Samad
                    </Link>
                </h1>
            </div>
            <div className='font-park
            flex items-center
            lg:gap-x-8
            md:gap-x-4
            sm:gap-x-2
            gap-x-1
            '>

                <nav className='flex items-center gap-5 max-lg:hidden'>
                    {links.map((link) => (
                        <Link href={link.href} key={link.href} className="relative inline-block group px-2 font-semibold">
                            <span className="relative z-10">{link.name}</span>
                            <span className="absolute inset-0 bg-gradient-to-l from-background via-background to-mySecondary transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></span>
                        </Link>
                    ))}
                </nav>
                <div className='lg:hidden'
                >
                    <Drawer
                    >
                        <DrawerTrigger>
                            <MenuIcon
                                size={26}
                                className='mt-2'
                            />
                        </DrawerTrigger>
                        <DrawerContent
                            className='bg-gradient
                  
                        bg-gradient-to-br from-background via-background to-mysecondary/55
                    '
                        >
                            <DrawerHeader>
                                <DrawerTitle className='gradient-text 
                            from-myPrimary via-mySecondary to-myPrimary 
                            '>MENU</DrawerTitle>
                                {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
                            </DrawerHeader>
                            <div className='px-5 justify-center sm:justify-between flex items-center flex-wrap gap-5'>
                                {
                                    links.map(link => (
                                        <Link
                                            className='bg-secondary p-5
                                            hover:bg-transparent
                                            border
                                            border-transparent
                                            hover:border-myPrimary
                                            transition-all
                                            '
                                            href={link.href} key={link.href}>{
                                                link.name}
                                        </Link>
                                    ))
                                }
                            </div>
                            <DrawerFooter className='flex justify-end '>
                                <DrawerClose className='border size-10 flex justify-center items-center
                            group
                            '>
                                    <X
                                        className='group-hover:rotate-90 transition-all'
                                    />
                                </DrawerClose>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
                <Suspense
                    fallback={
                        <Skeleton
                            className='size-7 rounded-full bg-foreground'
                        />
                    }
                >
                    <ThemeToggle />
                </Suspense>
                <div>
                    <NeonButton
                        href={`${baseUrl}#hire-me`}
                        className=' flex-nowrap text-white'
                    >
                        <span className='line-clamp-1 hidden sm:block'>HIRE ME</span>
                        <MoveDownRightIcon size={13}
                            fontWeight={900}
                            color='white' className='' />
                    </NeonButton>
                </div>
            </div>
        </header>
    )
}

export default Header