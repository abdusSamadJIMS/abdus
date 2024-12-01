import { RESUMEResult } from '@/sanity/types'
import { DownloadIcon } from 'lucide-react'
// import Link from 'next/link'
import React from 'react'

const DownloadCV = ({ resume }: { resume: RESUMEResult }) => {
    return (
        <a href={`${resume?.resume?.asset?.url}?dl`}
            download={'Abdus-Samad-CV'}
            className='bg-myPrimary/10 xs:size-56 size-36 flex justify-center items-center rounded-full
            cursor-pointer
            absolute
            right-0
            bottom-40
            shadow
            hover:bg-myPrimary/20
            transition-all
            '
        >
            <span className='bg-myPrimary/25 xs:size-44 size-28 flex justify-center items-center rounded-full'>
                <span className='font-park uppercase font-thin xs:text-xs
                text-[0.5rem]
                bg-myPrimary
                    rounded-full
                    xs:size-32
                    size-16
                    flex justify-center items-center flex-col xs:gap-y-3 
                    max-xs:text-center
                '>
                    <DownloadIcon className='max-xs:size-4' />
                    Download<br className='block xs:hidden' /> CV
                </span>
            </span>
        </a>
    )
}

export default DownloadCV