import React from 'react'

const InfiniteTextScroll = () => {
    return (
        <div id="animated-text-strip"
            className='cursor-default
            bg-background
            py-10
            border-t
            border-b
            border-foreground/30
font-park font-medium
            '
        >
            <span className="marquee gradient-text
 from-secondary via-foreground to-secondary">Frontend&nbsp;&nbsp;&nbsp;Backend&nbsp;&nbsp;&nbsp;FullStack&nbsp;&nbsp;&nbsp;UI/UX&nbsp;&nbsp;&nbsp;Product&nbsp;Design&nbsp;&nbsp;&nbsp;</span>
            <span className="marquee gradient-text
 from-secondary via-foreground to-secondary">Frontend&nbsp;&nbsp;&nbsp;Backend&nbsp;&nbsp;&nbsp;FullStack&nbsp;&nbsp;&nbsp;UI/UX&nbsp;&nbsp;&nbsp;Product&nbsp;Design&nbsp;&nbsp;&nbsp;</span>
            <span className="marquee gradient-text
 from-secondary via-foreground to-secondary">Frontend&nbsp;&nbsp;&nbsp;Backend&nbsp;&nbsp;&nbsp;FullStack&nbsp;&nbsp;&nbsp;UI/UX&nbsp;&nbsp;&nbsp;Product&nbsp;Design&nbsp;&nbsp;&nbsp;</span>


        </div>
    )
}

export default InfiniteTextScroll