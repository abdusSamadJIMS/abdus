import { Metadata } from 'next'
import { baseUrl, mdata, myName } from '@/lib/constants'



export const metadata: Metadata = {
    ...mdata,
    title: "Terms of Use",
    description: "Read the Terms of Use for Abdus Samad's portfolio to understand the guidelines, usage policies, and rights for accessing and interacting with the website.",
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
        canonical: `${baseUrl}/terms-of-use`
    }
}

const TermsOfUse = () => {
    return (
        <main className='pt-32 max-w-4xl mx-auto font-park px-3'>
            <section className="prose my-prose mx-auto">


                <h1>Terms of Use</h1>
                <p>
                    <strong>Effective Date:</strong> 2024-12-01
                </p>
                <p>
                    Welcome to my portfolio website. By accessing or using this website, you
                    agree to comply with and be bound by these Terms of Use. Please read them
                    carefully before proceeding.
                </p>

                <hr />

                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing this website, you agree to these Terms of Use and all
                    applicable laws and regulations. If you do not agree, please refrain
                    from using the website.
                </p>

                <hr />

                <h2>2. Intellectual Property</h2>
                <ul>
                    <li>
                        All content on this website, including text, images, code, and design,
                        is my intellectual property unless otherwise stated.
                    </li>
                    <li>
                        You may not reproduce, distribute, modify, or repurpose any content
                        without my express written permission.
                    </li>
                </ul>

                <hr />

                <h2>3. User Conduct</h2>
                <p>While using this website, you agree not to:</p>
                <ul>
                    <li>Engage in any unlawful or harmful activities.</li>
                    <li>
                        Interfere with the functionality or security of the website, including
                        attempts to hack or disrupt services.
                    </li>
                    <li>Post or transmit malicious, defamatory, or offensive content.</li>
                </ul>

                <hr />

                <h2>4. Third-Party Links</h2>
                <p>
                    This website may include links to third-party websites. I am not
                    responsible for the content, privacy practices, or terms of these
                    external sites. Visiting third-party links is at your own risk.
                </p>

                <hr />

                <h2>5. Disclaimer of Warranties</h2>
                <p>
                    This website is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. I make
                    no warranties, express or implied, regarding the accuracy, reliability,
                    or availability of the content or services provided.
                </p>

                <hr />

                <h2>6. Limitation of Liability</h2>
                <p>
                    To the fullest extent permitted by law, I am not liable for any damages
                    resulting from your use of this website, including but not limited to:
                </p>
                <ul>
                    <li>Direct, indirect, incidental, or consequential damages.</li>
                    <li>Loss of data or business opportunities.</li>
                </ul>

                <hr />

                <h2>7. Modifications to Terms</h2>
                <p>
                    I reserve the right to update or modify these Terms of Use at any time.
                    Changes will be posted on this page with a revised &quot;Effective Date.&quot; By
                    continuing to use the website after updates, you agree to the new terms.
                </p>

                <hr />

                <h2>8. Termination</h2>
                <p>
                    I reserve the right to restrict or terminate your access to the website
                    at any time, without notice, if you violate these Terms of Use or engage
                    in activities harmful to the website or other users.
                </p>

                <hr />

                <h2>9. Governing Law</h2>
                <p>
                    These Terms of Use are governed by the laws of [Insert Jurisdiction].
                    Any disputes arising from these terms will be resolved exclusively in
                    the courts of [Insert Location].
                </p>

                <hr />

                <h2>10. Contact Me</h2>
                <p>
                    If you have any questions or concerns about these Terms of Use, please
                    contact me at:
                </p>
                <p>
                    <strong>Email:</strong> samadmalik04@gmail.com
                    <br />
                    <strong>Location:</strong> New Delhi, India
                </p>
            </section>
        </main>
    );
};

export default TermsOfUse;
