import Header from "@/components/header";
import Footer from "@/components/footer";
// import { ThemeProvider } from "next-themes";
// import localFont from "next/font/local";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { Toaster } from "@/components/ui/toaster";
// import { client } from "@/sanity/lib/client";
import { AUTHOR_SOCIAL } from "@/sanity/lib/queries";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";



const asgardWideMedium = localFont({
    src: "./../fonts/AsgardTrial-WideMedium.ttf",
    variable: '--font-asgard-wide-medium',
    preload: true,
    weight: "100 900"
})

const parkinsans = localFont({
    src: "./../fonts/Parkinsans-VariableFont_wght.ttf",
    variable: '--font-parkinsans',
    preload: true,
    weight: "400 700",
})


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { data: social } = await sanityFetch({ query: AUTHOR_SOCIAL, tag: "author" })
    return (
        <html lang="en"
            suppressHydrationWarning
        >
            <body
                suppressHydrationWarning
                className={` ${asgardWideMedium.className} ${parkinsans.variable}  antialiased`}
            >
                <ThemeProvider
                    disableTransitionOnChange

                    themes={['light', 'dark']}
                    attribute={'class'}
                    defaultTheme="dark"
                >

                    <Header />
                    {children}
                    <Footer
                        social={social}
                    />
                    <Toaster />
                    <SanityLive />
                </ThemeProvider>
            </body>
        </html>
    );
}
