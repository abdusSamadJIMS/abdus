import NeonButton from "@/components/neon-button"
import { sanityFetch } from "@/sanity/lib/live"
import { AUTHOR_SOCIAL } from "@/sanity/lib/queries"
import { GithubIcon, InstagramIcon, LinkedinIcon, MoveDownRightIcon, TwitterIcon } from "lucide-react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Metadata } from 'next'
import { baseUrl, mdata, myName } from '@/lib/constants'



export const metadata: Metadata = {
    ...mdata,
    title: "Contact Me",
    description: `
    Contact me on social media or email me directly. I'd love to hear from you.
    `,
    openGraph: {
        type: "website",
        countryName: "India",
        description: mdata.description!,
        title: mdata.title!,
        url: `${baseUrl}/opengraph-image.png`,
        images: {
            url: `${baseUrl}/opengraph-image.png`,
        }
    },
    twitter: {
        card: "summary_large_image",
        creator: myName,
        description: mdata.description!,
        site: "https://x.com/AbdusSamad85611?s=09",
        title: mdata.title!,
        images: {
            url: `${baseUrl}/twitter-image.png`,
        },
    },
    alternates: {
        canonical: `${baseUrl}/contact`
    }

}


const MapRenderer = dynamic(() => import('@/components/map-renderer'))

const page = async () => {
    const { data: social } = await sanityFetch({ query: AUTHOR_SOCIAL, tag: "author" })

    return (
        <main
            className="  bg-gradient-to-b
        from-background
        via-background
        to-myPrimary/30"
        >
            <section
                className='
        min-h-[70vh]
        max-w-screen-xl
        mx-auto
        pt-32
      
        max-sm:px-3
        pb-10
        
        '
            >
                <div className="grid gap-4 md:gap-16 grid-cols-1 sm:grid-cols-2">
                    <div className=" rounded-lg 
                bg-gradient-to-t
                to-myPrimary/55
                from-mySecondary/40
                overflow-hidden h-72 sm:h-96 flex justify-center items-center ">

                        <MapRenderer />
                    </div>
                    <div className="flex flex-col justify-between 
                gap-y-8 text-sm sm:text-base
                ">
                        <div>
                            <h3>Address</h3>
                            <p className="font-park text-muted-foreground text-xs sm:text-sm">New Delhi,India</p>
                        </div>
                        <div>
                            <h3>Email</h3>
                            <Link href={'mailto:samadmalik04@gmail.com'} className="font-park text-muted-foreground text-xs sm:text-sm">samadmalik04@gmail.com</Link>
                        </div>
                        <div>
                            <h3>Whatsapp</h3>
                            <Link href={'https://wa.me/918010512106'} className="font-park text-muted-foreground text-xs sm:text-sm">+91 8010 512106</Link>
                        </div>
                        <div className='flex
                   gap-3 justify-between max-w-[15rem]
                    '>
                            <Link
                                href={social?.socialMedia?.twitter || ""}
                            >

                                <TwitterIcon
                                    className='border p-3
                            rounded-full
                            '
                                    size={50}
                                />
                            </Link>
                            <Link
                                href={social?.socialMedia?.instagram || ""}
                            >

                                <InstagramIcon
                                    className='border p-3
                            rounded-full
                            '
                                    size={50}
                                />
                            </Link>
                            <Link
                                href={social?.socialMedia?.github || ""}
                            >

                                <GithubIcon
                                    className='border p-3
                            rounded-full
                            '
                                    size={50}
                                />
                            </Link>
                            <Link
                                href={social?.socialMedia?.linkedIn || ""}
                            >

                                <LinkedinIcon
                                    className='border 
                            rounded-full
                            p-3
                            
                            '
                                    size={50}
                                />
                            </Link>
                        </div>
                        <NeonButton
                            href={`${baseUrl}#hire-me`}
                            className=' flex-nowrap text-white w-36'
                        >
                            <span className='line-clamp-1 '>HIRE ME</span>
                            <MoveDownRightIcon size={13}
                                fontWeight={900}
                                color='white' className='' />
                        </NeonButton>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default page