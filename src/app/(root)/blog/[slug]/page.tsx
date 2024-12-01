import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { BLOG_METADATA, BLOG_SLUGS, GET_BLOG } from '@/sanity/lib/queries';
import { components } from '@/sanity/portableTextComponents';
import ArticleRenderer from '@/components/article-renderer';
import { sanityFetch } from '@/sanity/lib/live';
import { client } from '@/sanity/lib/client';
import { Metadata, ResolvingMetadata } from 'next';
import { baseUrl, mdata, myName } from '@/lib/constants';

export const dynamic = "force-static"

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    parent: ResolvingMetadata
): Promise<Metadata> {
    const awaitedParams = await params
    const blog = await client.fetch(BLOG_METADATA, awaitedParams, { next: { tags: ['project'] } })
    // const previousImages = (await parent).openGraph?.images || []
    return {
        ...mdata,
        title: blog?.title,
        description: blog?.description,
        openGraph: {
            type: "article",
            images: {
                url: blog?.mainImage?.asset?.url || `${baseUrl}/opengraph-image.png`,
                width: 1200,
                height: 628
            },
            siteName: "Abdus Samad Portfolio",
            url: blog?.mainImage?.asset?.url || `${baseUrl}/opengraph-image.png`
        },
        twitter: {
            card: "summary_large_image",
            site: "@AbdusSamad85611",
            title: blog?.title || "",
            description: blog?.description || "",
            images: blog?.mainImage?.asset?.url || `${baseUrl}/twitter-image.png`,
            creator: myName
        },
        alternates: {
            canonical: `${baseUrl}/blog/${blog?.slug?.current}`
        },
    }
}

export async function generateStaticParams() {
    const blogs = await client.fetch(BLOG_SLUGS, {}, { next: { tags: ['project'] } })
    return blogs.map((blog) => ({
        slug: blog?.slug?.current
    }))
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const awaitedParams = (await params)

    if (!awaitedParams.slug) notFound();

    const { data: blog } = await sanityFetch({ query: GET_BLOG, params: awaitedParams, tag: "post" })
    if (!blog) notFound();

    return (
        <main className=" pt-32 max-w-screen-md mx-auto px-4">
            {/* Project Image */}
            <figure className="aspect-video border w-full relative">
                <Image
                    src={blog.mainImage?.asset?.url || '/myPhoto.png'}
                    alt={blog.mainImage?.alt || "blog Image"}
                    fill
                    className="object-cover"
                    priority // Consider adding priority for faster image loading
                />
            </figure>
            {/* Project Info */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">{blog.title}</h1>
                    <span

                    >
                        {blog.categories?.title}
                    </span>
                </div>
                <span className="font-park text-xs sm:text-base">{
                    new Date(blog.publishedAt?.toString() || "").toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric"
                    })
                }</span>
            </div>

            {/* Separator */}
            <Separator />

            {/* MDX Content */}
            <div className="max-w-2xl mx-auto  py-8">
                <ArticleRenderer
                    value={blog.body!}
                    components={components}

                />
            </div>
        </main>
    );
};

export default page;