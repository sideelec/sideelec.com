import Link from 'next/link'
import HeroIcon from '~/components/HeroIcon'
import { ArrowRightIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import solutionsContent from '~/content/solutions.json'
import { BlurredImage } from '~/types/home'

interface CardProps {
    icon: string
    title: string
    description: string
    preview: string
    slug: string
    imageProps: BlurredImage
}

const Card = ({
    icon,
    title,
    description,
    preview,
    slug,
    imageProps,
}: CardProps) => {
    return (
        <Link
            href={`/solutions/${slug}`}
            className="group flex rounded-lg border border-gray-200 bg-white transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-400"
        >
            <div className="relative flex w-32 sm:w-48 md:w-32 lg:w-48">
                <Image
                    {...imageProps}
                    alt={title}
                    placeholder="blur"
                    className="rounded-l-lg object-cover"
                />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
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
                    {preview}
                </p>
            </div>
        </Link>
    )
}

interface GridProps {
    blurredImages: BlurredImage[]
}

const Grid: React.FC<GridProps> = ({ blurredImages }) => {
    const solutions = solutionsContent.solutions.map(
        ({ slug, title, description, preview, icon }, index) => ({
            slug,
            title,
            description,
            preview,
            icon,
            imageProps: blurredImages[index],
        })
    )
    return (
        <div className="custom-container pb-24">
            <div className="mt-9 grid gap-6 md:grid-cols-2">
                {solutions.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    )
}

export default Grid
