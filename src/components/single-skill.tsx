import { cn } from '@/lib/utils'
import React from 'react'

const SingleSkill = ({ icon, level, name }: { name: string, level: number, icon: React.JSX.Element }) => {
    return (
        <div className=' border-t border-b border-foreground/30 flex justify-center py-7 '>
            <div className={cn('grid grid-cols-2 items-center w-[25rem]   ')}>

                <div className={cn('flex justify-start items-center text-xl gap-1 ')}>
                    <span className='md:size-10 size-6'>
                        {icon}
                    </span>
                    <h4 className='line-clamp-1 '>{name}</h4>
                </div>
                <div className=' flex-1 flex line-clamp-1'>

                    <div className='flex gap-1'>
                        {
                            Array.from({ length: level }).map((_, i) => (
                                <div
                                    key={i}
                                    className='sm:size-4 size-2 rounded-full bg-myPrimary '
                                />
                            ))

                        }
                        {
                            Array.from({ length: 10 - level }).map((_, i) => (
                                <div
                                    key={i}
                                    className='sm:size-4 size-2 rounded-full bg-myPrimary/30 '
                                />
                            ))

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleSkill