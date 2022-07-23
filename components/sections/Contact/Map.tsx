import { ExternalLinkIcon } from '@heroicons/react/outline'
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
                href="https://www.openstreetmap.org/?mlat=43.6191&amp;mlon=1.4411#map=15/43.6191/1.4411"
                target="_blank"
                className="absolute top-2 right-2 capitalize"
                color="gray"
                size="small"
            >
                <span>Consulter</span>
                <ExternalLinkIcon className="ml-2 -mr-1 h-4 w-4" />
            </Button>
        </div>
    )
}

const Content = () => {
    const { map } = contactContent
    return (
        <div>
            <h2 className="mb-6 text-5xl font-bold uppercase text-gray-800">
                {map.title}
            </h2>
            <p
                className="max-w-lg text-base font-medium text-gray-500"
                dangerouslySetInnerHTML={{
                    __html: map.description,
                }}
            />
            <div className="mt-4 overflow-hidden rounded-lg border border-gray-200">
                {map.hours.map(({ day, hours }, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-3 odd:bg-white even:bg-gray-50"
                    >
                        <div className="whitespace-nowrap px-6 py-3 text-base font-medium text-gray-900">
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
            <div className="h-12 bg-gradient-to-b from-white to-gray-50"></div>
            <div className="bg-gray-50">
                <div className="custom-container py-12">
                    <div className="grid gap-8 md:grid-cols-2">
                        {iframe}
                        <Content />
                    </div>
                </div>
            </div>
            <div className="h-12 bg-gradient-to-b from-gray-50 to-white"></div>
        </>
    )
}

export default Map
