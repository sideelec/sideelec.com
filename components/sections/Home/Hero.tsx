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
import { ArrowRightIcon } from '@heroicons/react/solid'

interface HeroProps {
    blurredImages: BlurredImage[]
}

interface SlideProps {
    slug: string
    title: string
    description: string
    imageProps: BlurredImage
}

const Slide = ({ slug, title, description, imageProps }: SlideProps) => {
    return (
        <>
            <Link
                href={`/nouveautes/${slug}`}
                className="block bg-gray-700 p-2 sm:flex"
                aria-label={`Voir ${title}`}
            >
                <div className="relative mb-4 flex w-full flex-shrink-0 items-stretch sm:mb-0 sm:mr-4 sm:w-56">
                    <Image
                        {...imageProps}
                        alt={title}
                        placeholder="blur"
                        className="rounded-md object-cover"
                    />
                </div>
                <div>
                    <div className="bg-gradient text-gradient font-semibold tracking-wide">
                        Nouveauté
                    </div>
                    <h4 className="mb-2 text-3xl font-semibold text-white">
                        {title}
                    </h4>
                    <p className="mb-4 text-gray-200">{description}</p>
                    <Button
                        as="div"
                        color="white"
                        size="small"
                        className="inline-flex"
                    >
                        <span>En savoir plus</span>
                        <ArrowRightIcon className="ml-2 -mr-1 h-4 w-4" />
                    </Button>
                </div>
            </Link>
            <div className="h-7 bg-gray-800"></div>
        </>
    )
}

const Slider: React.FC<HeroProps> = ({ blurredImages }) => {
    const products = newsContent.products.map(
        ({ slug, title, description }, index) => ({
            slug,
            title,
            description,
            imageProps: blurredImages[index],
        })
    )

    return (
        <>
            <Swiper
                autoHeight={true}
                spaceBetween={0}
                slidesPerView={1}
                className="max-w-lg rounded-md border-2 border-gray-600 bg-gray-700 sm:max-w-xl lg:max-w-lg xl:max-w-xl"
                loop
                effect="fade"
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
                <div className="custom-container">
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
                            <div className="mx-auto max-w-full lg:mr-0">
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
