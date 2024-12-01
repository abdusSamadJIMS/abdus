import { SpinnerIcon } from '@sanity/icons'

const Loading = () => {
    return (
        <main
            className='h-screen
    bg-gradient-to-br
    from-background
    via-background
    to-myPrimary/30
    
    '
        >
            <section
                className='
            max-w-4xl
            mx-auto
            h-full
            px-3
            flex flex-col justify-center items-center
            '
            >
                <div>
                    <SpinnerIcon
                        className='size-32
                        animate-spin
                        text-muted-foreground
                        '
                    />
                </div>
            </section>
        </main>
    )
}

export default Loading
{/* <div>
    <h1 className='sm:text-4xl'>
        Oops! Page Not Found
    </h1>
    <Link
        className='
        flex gap-1 items-center
        text-blue-400
        text-xs
        sm:text-3xl
        hover:text-blue-700
        transition-colors
        '
        href={'/'}                    >
        <Home />
        Back to Homepage
    </Link>
</div> */}