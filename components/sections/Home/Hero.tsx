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

interface SlideProps {
    title: string
    description: string
    image: string
    content: string
}

const Slide = ({ title, description, image, content }: SlideProps) => (
    <div className="relative grid h-full grid-cols-3 bg-gray-700">
        <div className="bg-gradient absolute top-2 left-2 rounded-md p-2 py-1 text-sm text-white">
            Nouveautés !
        </div>
        <img
            src={image}
            alt={title}
            className="h-full rounded-l-md object-cover"
        />
        <div className="col-span-2 p-4 text-white">
            <h3 className="mb-1 text-2xl font-semibold">{title}</h3>
            <p className="mb-6 text-gray-300">{description}</p>
            <p className="text-gray-200">{content}</p>
        </div>
    </div>
)

const Slider = () => {
    const { products } = newsContent

    return (
        <div className="max-w-full">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                className="aspect-video max-w-lg rounded-md border-2 border-gray-500 md:max-w-sm lg:max-w-lg xl:max-w-xl"
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
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <Slide {...product} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="mt-4 flex justify-between">
                <button
                    type="button"
                    className="swiper-prev-button transition-all hover:scale-90"
                    aria-label="Slide précédent"
                >
                    <ArrowNarrowLeftIcon className="h-8 w-8 text-gray-300" />
                </button>
                <button
                    type="button"
                    className="swiper-next-button transition-all hover:scale-90"
                    aria-label="Slide suivant"
                >
                    <ArrowNarrowRightIcon className="h-8 w-8 text-gray-300" />
                </button>
            </div>
        </div>
    )
}

const Hero = () => {
    const { hero } = homeContent

    return (
        <div className="bg-gray-800 py-12">
            <div className="custom-container flex flex-col items-center justify-between space-y-16 px-4 md:flex-row md:space-x-8 md:space-y-0">
                <div>
                    <h1 className="text-6xl font-bold uppercase text-white">
                        {hero.title}
                    </h1>
                    <p className="mt-4 max-w-lg text-lg text-gray-400">
                        {hero.description}
                    </p>
                    <div className="mt-8 flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
                        <Link href="/#content" passHref>
                            <Button
                                component="a"
                                className="w-full text-center lg:w-auto lg:text-left"
                            >
                                {hero.cta.knowMore}
                            </Button>
                        </Link>
                        <Link href="/contact" passHref>
                            <Button
                                component="a"
                                type="gray"
                                className="w-full text-center lg:w-auto lg:text-left"
                            >
                                {hero.cta.contact}
                            </Button>
                        </Link>
                    </div>
                </div>
                <Slider />
            </div>
        </div>
    )
}

export default Hero