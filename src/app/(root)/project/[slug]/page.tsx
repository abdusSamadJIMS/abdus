import ArticleRenderer from '@/components/article-renderer';
// import { projects } from '@/lib/constants';
// import { client } from '@/sanity/lib/client';
import { sanityFetch } from '@/sanity/lib/live';
import { PROJECT, PROJECT_METADATA, PROJECT_SLUGS } from '@/sanity/lib/queries';
import { components } from '@/sanity/portableTextComponents';
import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { client } from '@/sanity/lib/client';
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
    const project = await client.fetch(PROJECT_METADATA, awaitedParams, { next: { tags: ['project'] } })
    return {
        ...mdata,
        title: project?.title,
        description: project?.description || mdata.description,
        openGraph: {
            type: "article",
            images: {
                url: project?.mainImage?.asset?.url || `${baseUrl}/opengraph-image.png`,
                width: 1200,
                height: 628
            },
            siteName: "Abdus Samad Portfolio",
            url: project?.mainImage?.asset?.url || `${baseUrl}/opengraph-image.png`
        },
        twitter: {
            card: "summary_large_image",
            site: "@AbdusSamad85611",
            title: project?.title || "",
            description: project?.description || "",
            images: project?.mainImage?.asset?.url || `${baseUrl}/twitter-image.png`,
            creator: myName
        },
        alternates: {
            canonical: `${baseUrl}/project/${project?.slug?.current}`
        },
    }
}

export async function generateStaticParams() {
    const projects = await client.fetch(PROJECT_SLUGS, {}, { next: { tags: ['project'] } })
    return projects.map((project) => ({
        slug: project.slug?.current
    }))
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const awaitedParams = (await params)

    if (!awaitedParams.slug) notFound();
    // const project = await client.fetch(PROJECT, awaitedParams, { next: { revalidate: 43200 } })
    // const project = await client.fetch(PROJECT, awaitedParams, { tag: "project", useCdn: false })
    const { data: project } = await sanityFetch({ query: PROJECT, params, tag: "project" })
    if (!project) notFound();


    return (
        <main className=" pt-32 max-w-screen-xl mx-auto px-4">
            {/* Project Image */}
            <div className="aspect-video border w-full relative">
                <Image
                    src={
                        project.mainImage?.asset?.url ? project.mainImage?.asset?.url :
                            (project.isCompleted ? "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" : "https://abdus-samad-portfolio.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F211122%2Fpexels-photo-211122.jpeg&w=1920&q=75")
                    }
                    alt={project.mainImage?.alt || "Project Image"}
                    fill
                    className="object-cover"
                    priority // Consider adding priority for faster image loading
                />
            </div>

            {/* Project Info */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">{project.title}</h1>
                    {
                        project.link &&
                        <Link
                            href={project.link}
                            target="_blank"
                            className="text-blue-500 hover:text-blue-700 font-park"
                        >
                            {project.link}
                        </Link>
                    }
                </div>
                <span className="font-park text-xs sm:text-base">{
                    project.isCompleted ? `Completed on ${project.completedAt}` : "In Progress"

                }</span>
            </div>

            {/* Separator */}
            <Separator />

            {/* MDX Content */}
            <div className="max-w-3xl mx-auto  py-8">
                {
                    project.body &&
                    <ArticleRenderer
                        value={project.body}
                        components={components}
                    />
                }
            </div>
        </main>
    );
};

export default page;
