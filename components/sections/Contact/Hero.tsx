import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import HeroIcon from '~/components/HeroIcon'
import contactContent from '~/content/contact.json'

interface CardProps {
    icon: string
    title: string
    description: string
    link: {
        url: string
        text: string
        external: boolean
    }
}

const Card = ({ icon, title, description, link }: CardProps) => {
    return (
        <div className="flex flex-col rounded-lg border bg-white shadow-md">
            <div className="p-6">
                <div className="bg-gradient inline-block rounded-lg p-2">
                    <HeroIcon name={icon} className="h-7 w-7 text-white" />
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-700">
                    {title}
                </h2>
                <ReactMarkdown className="mt-4 text-gray-500">
                    {description}
                </ReactMarkdown>
            </div>
            <Link
                href={link.url}
                className="group mt-auto block rounded-b-lg border-t border-gray-100 bg-gray-50 p-6 font-semibold focus:outline-none focus:ring-2 focus:ring-gray-300"
                target={link.external ? '_blank' : undefined}
            >
                <div className="bg-gradient text-gradient flex items-center">
                    <span className="text-lg">{link.text}</span>
                    <ArrowRightIcon className="ml-2 h-4 w-4 text-primary-500 transition-all group-hover:ml-4" />
                </div>
            </Link>
        </div>
    )
}

const Hero = () => {
    const { hero } = contactContent
    return (
        <>
            <div
                className="relative bg-cover bg-center"
                style={{ backgroundImage: `url('${hero.image}')` }}
            >
                <div className="absolute inset-0 z-0 bg-black/80"></div>
                <div className="custom-container relative pt-24 pb-48">
                    <h1 className="mt-1 block text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
                        {hero.title}
                    </h1>
                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        {hero.description}
                    </p>
                </div>
            </div>
            <div className="relative -mt-24 mb-24">
                <div className="custom-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {hero.cards.map((card, index) => (
                        <Card {...card} key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Hero
