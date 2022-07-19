import { ArrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Button from '~/components/Button'
import HeroIcon from '~/components/HeroIcon'
import homeContent from '~/content/home.json'

interface CardProps {
    icon: string
    title: string
    description: string
    precision: string
    link: string
}

const Card = ({ icon, title, description, precision, link }: CardProps) => {
    return (
        <Link href={link}>
            <a className="group flex flex-col justify-between rounded-lg border border-gray-200 bg-gradient-to-tr from-gray-200 to-gray-100 p-6 transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-100">
                <div className="space-y-2">
                    <div className="flex items-start justify-between">
                        <div className="bg-gradient inline-block rounded-lg p-2">
                            <HeroIcon
                                name={icon}
                                className="h-7 w-7 text-white"
                            />
                        </div>
                        <ArrowRightIcon className="h-5 w-5 text-gray-700 transition-transform group-hover:-rotate-45 group-hover:scale-150" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700">
                        {title}
                    </h3>
                    <p className="text-gray-500">{description}</p>
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-500">
                    {precision}
                </p>
            </a>
        </Link>
    )
}

const Solutions = () => {
    const { solutions } = homeContent
    return (
        <div className="">
            <div className="custom-container py-24 px-4">
                <div>
                    <div className="flex items-center justify-between space-x-4">
                        <h2 className="bg-gradient text-gradient mb-6 text-5xl font-bold uppercase">
                            {solutions.title}
                        </h2>
                        <Link href="/solutions" passHref>
                            <Button component="a" size="small">
                                {solutions.button}
                            </Button>
                        </Link>
                    </div>
                    <p className="max-w-2xl text-base font-medium text-gray-500">
                        {solutions.description}
                    </p>
                </div>
                <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {solutions.cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Solutions