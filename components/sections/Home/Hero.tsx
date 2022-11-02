import Link from 'next/link'
import Button from '~/components/Button'
import homeContent from '~/content/home.json'
import Image from 'next/image'

export default function Hero() {
    const { hero } = homeContent

    return (
        <div className="custom-container py-10 lg:py-24">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                    <h1 className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                        <span className="block text-gray-900">
                            {hero.title1}
                        </span>
                        <span className="bg-gradient text-gradient block">
                            {hero.title2}
                        </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        {hero.description}
                    </p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 md:flex">
                        <Button
                            as={Link}
                            href="/contact"
                            className="w-full justify-center lg:w-auto lg:justify-start"
                        >
                            {hero.cta.contact}
                        </Button>
                        <Button
                            as={Link}
                            href="/#solutions"
                            scroll={false}
                            color="gray"
                            className="w-full justify-center lg:w-auto lg:justify-start"
                        >
                            {hero.cta.knowMore}
                        </Button>
                    </div>
                </div>
                <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
                    <div className="relative mx-auto h-72 w-full overflow-hidden rounded-lg shadow-lg lg:max-w-md">
                        <Image
                            className="object-cover object-center"
                            src={hero.image.url}
                            alt={hero.image.alt}
                            fill
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
