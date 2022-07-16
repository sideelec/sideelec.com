import type { NextPage } from 'next'
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
import { useMeta } from '~/hooks/useMeta'

const Home: NextPage = () => {
    const Hero = () => {
        const { hero } = homeContent

        const Slider = () => {
            const { products } = newsContent

            const Slide = ({
                product: { title, description, image, content },
            }: {
                product: typeof products[0]
            }) => (
                <div className="grid h-full grid-cols-3 bg-gray-700">
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

            return (
                <div>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        className="aspect-video max-w-md rounded-md border-2 border-gray-500 lg:max-w-lg xl:max-w-xl"
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
                        {products.map((product) => (
                            <SwiperSlide key={product.title}>
                                <Slide product={product} />
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

        return (
            <div className="bg-gray-800 py-12">
                <div className="custom-container flex flex-col items-center justify-between space-y-4 px-4 lg:flex-row lg:space-x-4 lg:space-y-0">
                    <div>
                        <h1 className="text-6xl font-bold uppercase text-white">
                            {hero.title}
                        </h1>
                        <p className="mt-4 max-w-lg text-lg text-gray-400">
                            {hero.description}
                        </p>
                        <div className="mt-8 flex items-center space-x-4">
                            <Link href="/#content" passHref>
                                <Button component="a">
                                    {hero.cta.knowMore}
                                </Button>
                            </Link>
                            <Link href="/contact" passHref>
                                <Button component="a" type="gray">
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

    const { Meta } = useMeta({ title: 'Accueil' })

    return (
        <div>
            <Meta />
            <Hero />
            <div id="content">
                {/* <Solutions /> */}
                {/* <Services /> */}
                {/* <Partners /> */}
            </div>
        </div>
    )
}

export default Home
