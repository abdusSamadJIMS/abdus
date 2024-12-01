import { ArrowDownRightIcon } from 'lucide-react'
import React from 'react'
import SingleSkill from './single-skill'
import { skills } from '@/lib/constants'

const HomeSkills = () => {
    return (
        <section
            className='min-h-screen
        bg-gradient-to-r
        from-background
        via-background
        to-myPrimary/40
        cursor-default
        '

        >
            <h3 className='text-4xl xs:text-6xl text-center flex justify-center items-center py-20'>
                <span className='flex items-center'>My Skills
                    <ArrowDownRightIcon
                        className='text-myPrimary  font-bold
                                sm:size-20
                                size-10
                                '
                    /></span>
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 font-park font-semibold
            max-sm:px-3
            '>
                {
                    skills.map((skill) => (
                        <SingleSkill
                            icon={skill.icon}
                            name={skill.name}
                            level={skill.level}
                            key={skill.name} />
                    ))
                }
            </div>
        </section>
    )
}

export default HomeSkills