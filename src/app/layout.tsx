// import Header from "@/components/header";
// import Footer from "@/components/footer";
// import { SanityLive } from "@/sanity/lib/live";
// import { ThemeProvider } from "next-themes";
// import localFont from "next/font/local";
import { Metadata } from "next";
import '@/app/globals.css'
import { baseUrl, mdata, myName } from '@/lib/constants'


export const metadata: Metadata = {
  ...mdata,
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
  manifest: `${baseUrl}/favicon/site.webmanifest`,
  icons: {
    icon: ['/favicon.ico?v=1'],
    apple: ['apple-touch-icon.png?v=4'],
    shortcut: ['apple-touch-icon.png'],

  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body

      // className={` ${asgardWideMedium.className} ${parkinsans.variable}  antialiased`}
      >
        {/* <ThemeProvider
          disableTransitionOnChange

          themes={['light', 'dark']}
          attribute={'class'}
          defaultTheme="dark"
        > */}
        {/* <Header /> */}
        {children}
        {/* <SanityLive /> */}

        {/* <Footer /> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
