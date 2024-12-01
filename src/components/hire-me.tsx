import React from 'react'
import HireMeForm from './hire-me-form'

const HireMe = () => {
    return (
        <section
            id='hire-me'
            className='
            max-md:px-3
            max-w-screen-xl mx-auto
            py-10
            max-sm:px-3

            '
        >
            <h3 className='text-4xl xs:text-6xl flex  md:justify-between items-start md:items-center sm:py-16 py-10
            
            '>
                <span className=''>Hire Me</span>
            </h3>
            <HireMeForm />
        </section>
    )
}

export default HireMe