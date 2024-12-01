import { cn } from '@/lib/utils';
import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'


interface NeonButtonProps extends LinkProps {
    children: ReactNode;
    className?: string;
}
const NeonButton = (props: (NeonButtonProps)) => {
    return (
        <Link
            {...props}
            className={cn('flex gap-1 uppercase items-center font-semibold bg-gradient-to-r from-myPrimary to-mySecondary px-4 py-2 rounded-full shadow-md shadow-secondary', props.className)}
        >
            {props.children}
        </Link>
    )
}

export default NeonButton