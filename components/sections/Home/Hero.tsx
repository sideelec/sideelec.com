import Link from 'next/link'
import Button from '~/components/Button'
import homeContent from '~/content/home.json'

export default function Hero() {
    const { hero } = homeContent

    return (
        <div className="custom-container mx-auto px-4 py-10 lg:py-24">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                    <h1>
                        <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                            <span className="block text-gray-900">
                                Distribution de
                            </span>
                            <span className="bg-gradient text-gradient block">
                                systèmes de sécurité
                            </span>
                        </span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        Depuis 20 ans, nous accompagnons les installateurs de
                        matériel de sécurité informatique. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Esse, sint.
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
                            color="gray"
                            className="w-full justify-center lg:w-auto lg:justify-start"
                        >
                            {hero.cta.knowMore}
                        </Button>
                    </div>
                </div>
                <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
                    <div className="relative mx-auto w-full overflow-hidden rounded-lg shadow-lg lg:max-w-md">
                        <img
                            className="w-full"
                            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
