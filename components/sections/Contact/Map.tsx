import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from '~/components/Button'
import contactContent from '~/content/contact.json'

const Iframe = () => {
    return (
        <div className="relative min-h-[24rem] overflow-hidden rounded-lg border border-gray-200">
            <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                src="https://www.openstreetmap.org/export/embed.html?bbox=1.421012878417969%2C43.608674481668174%2C1.4611816406250002%2C43.62952125581191&amp;layer=mapnik&amp;marker=43.619092600020785%2C1.4410834999999906"
                style={{ border: 0 }}
            ></iframe>
            <Button
                as={Link}
                href="https://www.google.com/maps/place/54+Rue+de+Negreneys,+31200+Toulouse,+France"
                target="_blank"
                className="absolute top-2 right-2 capitalize"
                color="gray"
                size="small"
            >
                <span>Voir sur Google Maps</span>
                <ArrowTopRightOnSquareIcon className="ml-2 -mr-1 h-4 w-4" />
            </Button>
        </div>
    )
}

const Content = () => {
    const { map } = contactContent
    return (
        <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {map.title}
            </h2>
            <p
                className="mx-auto mt-5 max-w-prose text-xl text-gray-500"
                dangerouslySetInnerHTML={{
                    __html: map.description,
                }}
            />
            <div className="mt-12 overflow-hidden rounded-lg border border-gray-200">
                {map.hours.map(({ day, hours }, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-3 odd:bg-white even:bg-gray-50"
                    >
                        <div className="whitespace-nowrap px-6 py-3 text-base font-medium text-gray-800">
                            {day}
                        </div>
                        <div className="col-span-2 whitespace-nowrap px-6 py-3 text-base text-gray-600">
                            {hours}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Map = () => {
    const [iframe, setIframe] = useState<React.ReactNode | null>(null)
    useEffect(() => setIframe(<Iframe />), [])
    return (
        <>
            <div className="bg-gray-50">
                <div className="custom-container py-12">
                    <div className="grid gap-8 md:grid-cols-2">
                        {iframe}
                        <Content />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Map
