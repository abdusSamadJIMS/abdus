'use client'
import { Card, CardContent } from "./ui/card"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { useRef } from "react"
// import { blogPosts } from "@/lib/constants"
import Image from "next/image"
import Link from "next/link"
import { GET_10_BLOGSResult } from "@/sanity/types"

const BlogCarousel = ({ blogs }: { blogs: GET_10_BLOGSResult }) => {

    const plugin = useRef(
        Autoplay({ delay: 1600, stopOnInteraction: true })
    )
    return (
        <Carousel
            plugins={[plugin.current]}
            className="lg:w-[90vw] md:w-[85vw] sm:w-[70vw]  max-sm:px-2  font-park mx-auto border-none
            "
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="border-none">
                {blogs.map((blog, index) => (
                    <CarouselItem key={index}
                        className="sm:basis-1/2 lg:basis-1/3 p-0 m-0 bg-background "
                    >
                        <div
                            className="p-1">
                            <Card

                                className="rounded-none !p-0 "
                            >
                                <Link
                                    href={`/blog/${blog.slug?.current}`}
                                >
                                    <CardContent className="flex flex-col aspect-square items-center justify-between gap-y-3
                                p-5
                                ">
                                        <div
                                            className="
                                        border
                                        h-[70%]
                                        w-full
                                        relative
                                        "
                                        >

                                            <Image
                                                src={blog.mainImage?.asset?.url || "/myPhoto.jpg"}
                                                alt={blog.mainImage?.alt || "blog image"}
                                                fill
                                                className="object-cover "
                                            />
                                        </div>
                                        <div className="text-start self-start">
                                            <h5 className="line-clamp-2">{blog.title}</h5>
                                        </div>
                                        <div className="self-start justify-self-end">
                                            <span>{
                                                new Date(blog.publishedAt?.toString() || "").toLocaleDateString("en-US", {
                                                    month: "long",
                                                    year: "numeric"
                                                })
                                            }</span>
                                        </div>
                                    </CardContent>
                                </Link>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default BlogCarousel