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
                <div className="grid h-full grid-cols-4 bg-gray-700">
                    <img
                        src={image}
                        alt={title}
                        className="h-full rounded-l-md object-cover"
                    />
                    <div className="col-span-3 p-4 text-white">
                        <h3 className="mb-1 text-2xl font-semibold">{title}</h3>
                        <p className="mb-6 text-gray-300">{description}</p>
                        <p className="text-gray-200">{content}</p>
                    </div>
                </div>
            )

            return (
                <div className="">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="aspect-video max-w-xl rounded-md border-2 border-gray-500"
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
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.title}>
                                <Slide product={product} />
                            </SwiperSlide>
                        ))}
                        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
                        {/* <SwiperSlide>Slide 2</SwiperSlide> */}
                        {/* <SwiperSlide>Slide 3</SwiperSlide> */}
                        {/* <SwiperSlide>Slide 4</SwiperSlide> */}
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
            <div className="bg-gradient-to-tr from-gray-900 to-gray-800 py-12">
                <div className="custom-container flex items-center justify-between px-4">
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
    return (
        <div>
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
