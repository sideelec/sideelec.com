import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import Button from '~/components/Button'
import homeContent from '~/content/home.json'
import newsContent from '~/content/news.json'
import {
    ArrowNarrowLeftIcon,
    ArrowNarrowRightIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'
import { BlurredImage } from '~/types/home'

interface HeroProps {
    blurredImages: BlurredImage[]
}

interface SlideProps {
    title: string
    description: string
    imageProps: BlurredImage
    content: string
}

const Slide = ({ title, description, imageProps, content }: SlideProps) => {
    return (
        <div className="relative grid h-full grid-cols-3 bg-gray-700">
            <Image
                {...imageProps}
                alt={title}
                placeholder="blur"
                className="h-full rounded-l-md object-cover"
            />
            <div className="col-span-2 p-4 text-white">
                <h3 className="mb-1 text-2xl font-semibold">{title}</h3>
                <p className="mb-6 text-gray-300">{description}</p>
                <p className="text-gray-200">{content}</p>
            </div>
        </div>
    )
}

const Slider: React.FC<HeroProps> = ({ blurredImages }) => {
    const products = newsContent.products.map((product, index) => ({
        title: product.title,
        description: product.description,
        imageProps: blurredImages[index],
        content: product.content,
    }))

    return (
        <>
            <div className="mb-2 text-lg font-medium text-gray-300">
                Nouveautés !
            </div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                className="aspect-video max-w-lg rounded-md border-2 border-gray-600 md:max-w-xl lg:max-w-lg xl:max-w-xl"
                loop
                navigation={{
                    prevEl: '.swiper-prev-button',
                    nextEl: '.swiper-next-button',
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
            >
                {products.map((product, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Slide {...product} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className="mt-4 flex justify-between">
                <button
                    type="button"
                    className="swiper-prev-button rounded-xl transition-all hover:scale-90 focus:outline-none focus:ring focus:ring-gray-600"
                    aria-label="Slide précédent"
                >
                    <ArrowNarrowLeftIcon className="h-8 w-8 text-gray-300" />
                </button>
                <button
                    type="button"
                    className="swiper-next-button rounded-xl transition-all hover:scale-90 focus:outline-none focus:ring focus:ring-gray-600"
                    aria-label="Slide suivant"
                >
                    <ArrowNarrowRightIcon className="h-8 w-8 text-gray-300" />
                </button>
            </div>
        </>
    )
}

const Hero: React.FC<HeroProps> = ({ blurredImages }) => {
    const { hero } = homeContent

    return (
        <>
            <div className="bg-gray-800 py-10 sm:pt-16 lg:pt-8 lg:pb-14">
                <div className="custom-container px-4">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                        <div className="mx-auto max-w-lg sm:max-w-xl sm:text-center lg:flex lg:items-center lg:text-left">
                            <div className="lg:py-24">
                                <h1 className="mt-4 text-6xl font-bold text-white sm:mt-5 lg:mt-6">
                                    <span className="block">SIDEELEC</span>
                                </h1>
                                <h2 className="bg-gradient text-gradient pb-3 text-3xl font-semibold sm:pb-5">
                                    Sécurité informatique
                                </h2>
                                <p className="text-lg text-gray-300 md:text-xl">
                                    Nous sommes spécialisés dans la distribution
                                    de systèmes de sécurité depuis plus de 20
                                    ans.
                                </p>
                                <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 md:flex">
                                    <Button
                                        as={Link}
                                        href="/#content"
                                        className="w-full justify-center lg:w-auto lg:justify-start"
                                    >
                                        {hero.cta.knowMore}
                                    </Button>
                                    <Button
                                        as={Link}
                                        href="/contact"
                                        color="gray"
                                        className="w-full justify-center lg:w-auto lg:justify-start"
                                    >
                                        {hero.cta.contact}
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 flex items-center lg:mt-0">
                            <div className="mx-auto max-w-full">
                                <Slider blurredImages={blurredImages} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
