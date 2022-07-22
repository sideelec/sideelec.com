import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Hero from '~/components/sections/Home/Hero'
import Partners from '~/components/sections/Home/Partners'
import Services from '~/components/sections/Home/Services'
import Solutions from '~/components/sections/Home/Solutions'
import homeContent from '~/content/home.json'
import newsContent from '~/content/news.json'
// @ts-ignore
import { getPlaiceholder } from 'plaiceholder'

import { useMeta } from '~/hooks/useMeta'
import { BlurredImage } from '~/types/home'

export const getStaticProps: GetStaticProps<{
    heroBlurredImages: BlurredImage[]
    partnersBlurredImages: BlurredImage[]
}> = async () => {
    const handleHeroImages = async () => {
        const rawImages = newsContent.products.map(({ image }) => image)
        const blurredImages: BlurredImage[] = []
        for (const image of rawImages) {
            const { base64, img } = await getPlaiceholder(image)
            blurredImages.push({ ...img, blurDataURL: base64 })
        }
        return blurredImages
    }
    const handlePartnersImages = async () => {
        const rawImages = homeContent.partners.cards.map(({ image }) => image)
        const blurredImages: BlurredImage[] = []
        for (const image of rawImages) {
            const { base64, img } = await getPlaiceholder(image)
            blurredImages.push({ ...img, blurDataURL: base64 })
        }
        return blurredImages
    }

    const heroBlurredImages = await handleHeroImages()
    const partnersBlurredImages = await handlePartnersImages()

    return {
        props: {
            heroBlurredImages,
            partnersBlurredImages,
        },
    }
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
    heroBlurredImages,
    partnersBlurredImages,
}) => {
    const { hero } = homeContent
    const { Meta } = useMeta({
        title: 'Accueil',
        description: hero.description,
    })

    return (
        <>
            <Meta />
            <div>
                <Hero blurredImages={heroBlurredImages} />
                <div id="content">
                    <Solutions />
                    <Services />
                    <Partners blurredImages={partnersBlurredImages} />
                </div>
            </div>
        </>
    )
}

export default Home
