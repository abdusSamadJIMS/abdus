import { PortableText, PortableTextProps } from 'next-sanity'
import React from 'react'
const ArticleRenderer = (props: PortableTextProps) => {
    return (
        <article className="prose prose-lg  font-park
    prose-h1:text-foreground
    prose-h2:text-foreground
    prose-h3:text-foreground
    prose-h4:text-foreground
    prose-h5:text-foreground
    prose-h6:text-foreground
    prose-pre:text-foreground
    prose-strong:text-foreground
    prose-pre:bg-background
    prose-pre:border
    prose-p:text-muted-foreground
    prose-li:text-muted-foreground
    prose-li:font-thin

    prose-code:text-red-400 prose-code:whitespace-pre-wrap
    prose-code:flex
    prose-code:bg-background
    prose-code:p-2
    prose-code:text-sm
    prose-code:border
    prose-code:rounded-sm
    prose-code:font-thin


    ">
            <PortableText
                value={props.value}
                components={props.components}
            />
        </article>
    )
}

export default ArticleRenderer