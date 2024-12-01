import { Metadata } from 'next'
import { baseUrl, mdata, myName } from '@/lib/constants'



export const metadata: Metadata = {
    ...mdata,
    title: "Privacy Policy",
    description: `I am providing this privacy policy to explain how I collect, use, and share your personal information when you visit my website, ${baseUrl}. I hope you find it easy to understand. I am committed to providing a safe and secure environment for you to browse my website and provide me with your personal information. By using this website, you are agreeing to the terms and conditions of this privacy policy. If you do not agree, please do not use this website.`,
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
        canonical: `${baseUrl}/privacy-policy`,
    }

}


const page = () => {

    return (
        <main className='pt-32 max-w-4xl mx-auto font-park px-3'>
            <section className='prose my-prose mx-auto'>
                <h1>Privacy Policy for Abdus Samad Portfolio Website</h1>
                <p>
                    <strong>Effective Date:</strong> 2024-12-01
                </p>
                <p>
                    <strong>Last Updated:</strong> 2024-12-01
                </p>
                <p>
                    Thank you for visiting my portfolio website. Your privacy is important
                    to me. This Privacy Policy outlines how I collect, use, and protect
                    your information when you visit my website.
                </p>

                <hr />

                <h2>1. Information I Collect</h2>
                <p>I collect two types of information:</p>

                <h3>1.1. Personal Information</h3>
                <p>If you choose to contact me via a form or email, I may collect your:</p>
                <ul>
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Any other information you voluntarily provide in your message</li>
                </ul>

                <h3>1.2. Non-Personal Information</h3>
                <p>I may collect non-identifiable information about your visit, such as:</p>
                <ul>
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Pages visited</li>
                    <li>Date and time of your visit</li>
                    <li>Referring website</li>
                </ul>
                <p>
                    This data is collected using tools like cookies or analytics platforms
                    to improve the user experience.
                </p>

                <hr />

                <h2>2. How I Use Your Information</h2>
                <h3>2.1. Personal Information</h3>
                <ul>
                    <li>To respond to your inquiries or messages.</li>
                    <li>To provide requested information or services.</li>
                    <li>
                        To communicate updates related to my portfolio or projects (only if
                        you consent).
                    </li>
                </ul>

                <h3>2.2. Non-Personal Information</h3>
                <ul>
                    <li>To analyze and improve the performance of my website.</li>
                    <li>To identify technical issues and ensure website security.</li>
                </ul>

                <hr />

                <h2>3. Sharing Your Information</h2>
                <p>
                    I do not sell, rent, or share your personal information with third
                    parties, except in the following cases:
                </p>
                <ul>
                    <li>When required by law or legal processes.</li>
                    <li>If necessary to protect my rights or the security of my website.</li>
                </ul>

                <hr />

                <h2>4. Cookies and Tracking Technologies</h2>
                <p>
                    Cookies are small text files stored on your device when you visit a
                    website. My portfolio website may use cookies to:
                </p>
                <ul>
                    <li>Enhance your browsing experience.</li>
                    <li>Collect analytics data to understand how users interact with the site.</li>
                </ul>
                <p>
                    You can manage or disable cookies in your browser settings. However,
                    some features of the website may not function properly if cookies are
                    disabled.
                </p>

                <hr />

                <h2>5. Data Security</h2>
                <p>
                    I take appropriate measures to protect your information from
                    unauthorized access, alteration, or destruction. However, please note
                    that no method of electronic storage or transmission over the Internet
                    is 100% secure.
                </p>

                <hr />

                <h2>6. Links to Third-Party Websites</h2>
                <p>
                    My portfolio may include links to third-party websites for your
                    convenience. I am not responsible for the privacy practices or content
                    of these external sites. Please review their privacy policies if you
                    visit them.
                </p>

                <hr />

                <h2>7. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Request access to the personal data I hold about you.</li>
                    <li>Request correction or deletion of your personal data.</li>
                    <li>
                        Withdraw your consent for me to use your data, where applicable.
                    </li>
                </ul>
                <p>
                    To exercise any of these rights, please contact me at [your email
                    address].
                </p>

                <hr />

                <h2>8. Changes to This Privacy Policy</h2>
                <p>
                    I reserve the right to update this Privacy Policy from time to time.
                    Any changes will be posted on this page, and the &quot;Last Updated&quot; date
                    will be revised.
                </p>

                <hr />

                <h2>9. Contact Me</h2>
                <p>
                    If you have any questions or concerns about this Privacy Policy, please
                    contact me at:
                </p>
                <p>
                    <strong>Email:</strong> samadmalik04@gmail.com
                    <br />
                    <strong>Location:</strong> New Delhi, India
                </p>

            </section>
        </main>
    )
}

export default page