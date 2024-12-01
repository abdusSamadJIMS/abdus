// import Header from "@/components/header";
// import Footer from "@/components/footer";
// import { SanityLive } from "@/sanity/lib/live";
import { ThemeProvider } from "next-themes";
// import localFont from "next/font/local";
import { Metadata } from "next";



// const asgardWideMedium = localFont({
//     src: "./../fonts/AsgardTrial-WideMedium.ttf",
//     variable: '--font-asgard-wide-medium',
//     preload: true,
//     weight: "100 900"
// })

// const parkinsans = localFont({
//     src: "./../fonts/Parkinsans-VariableFont_wght.ttf",
//     variable: '--font-parkinsans',
//     preload: true,
//     weight: "400 700",
// })

export const metadata: Metadata = {
    title: {
        default: "Admin",
        template: "%s • Abdus Samad",
    },
    description: "A dynamic portfolio showcasing Abdus Samad expertise in web development, creative projects, and innovative solutions using modern technologies",
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <html lang="en" suppressHydrationWarning>
            <body
                suppressHydrationWarning
            // className={` ${asgardWideMedium.className} ${parkinsans.variable}  antialiased`}
            >


                <ThemeProvider
                    disableTransitionOnChange

                    themes={['light', 'dark']}
                    attribute={'class'}
                    defaultTheme="dark"
                >
                    {/* <Header /> */}
                    {children}
                    {/* <SanityLive /> */}

                    {/* <Footer /> */}
                </ThemeProvider>
            </body>
        </html>
    );
}
