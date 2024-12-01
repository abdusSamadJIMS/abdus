'use client'

import dynamic from 'next/dynamic'
import { useMemo } from 'react'

const MapRender = () => {
    const Map = useMemo(() => dynamic(
        () => import('@/components/map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])

    return (
        <>
            <div className=" mx-auto my-auto  h-[97%] w-[98%] ">
                <Map posix={[28.707687, 77.255664]}
                    zoom={11}
                />
            </div>
        </>
    )
}

export default MapRender