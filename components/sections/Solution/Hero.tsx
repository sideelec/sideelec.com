import Image from 'next/image'
import HeroIcon from '~/components/HeroIcon'
import Button from '~/components/Button'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import solutionsContent from '~/content/solutions.json'
import { BlurredImage } from '~/types/home'

interface HeroProps {
    solution: typeof solutionsContent.solutions[0]
    blurredImage: BlurredImage
}

export default function Hero({ solution, blurredImage }: HeroProps) {
    return (
        <>
            <div className="relative">
                <div className="absolute inset-0 z-10 bg-black/50"></div>
                <div className="custom-container absolute inset-0 z-10">
                    <Button
                        as={Link}
                        href="/solutions"
                        className="mt-4"
                        size="small"
                        color="white"
                    >
                        <ArrowLeftIcon className="mr-2 -ml-1 h-4 w-4" />
                        <span>Solutions</span>
                    </Button>
                </div>
                <div className="relative z-0 flex h-48 items-center overflow-hidden">
                    <Image
                        {...blurredImage}
                        placeholder="blur"
                        className="w-full object-cover"
                        priority
                        alt=""
                    />
                </div>
            </div>
            <div className="custom-container relative z-10">
                <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div className="bg-gradient inline-flex rounded-2xl">
                        <HeroIcon
                            name={solution.icon}
                            className="h-24 w-24 rounded-2xl p-4 text-white ring-4 ring-white sm:h-32 sm:w-32"
                            aria-hidden="true"
                        />
                    </div>
                    <div className="sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                        <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                            <h1 className="text-4xl font-bold leading-[normal] text-gray-800 md:text-6xl">
                                {solution.title}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
                    <h1 className="text-5xl font-bold text-gray-800">
                        {solution.title}
                    </h1>
                </div>
            </div>
        </>
    )
}
