import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Hero from '~/components/sections/Home/Hero'
import Partners from '~/components/sections/Home/Partners'
import Services from '~/components/sections/Home/Services'
import Solutions from '~/components/sections/Home/Solutions'
import homeContent from '~/content/home.json'
import newsContent from '~/content/news.json'
import { getPlaiceholder } from 'plaiceholder'

import { useMeta } from '~/hooks/useMeta'
import { BlurredImage } from '~/types/home'

export const getStaticProps: GetStaticProps<{
    blurredImages: BlurredImage[]
}> = async () => {
    const rawImages = newsContent.products.map((product) => product.image)
    const blurredImages: BlurredImage[] = []
    for (const image of rawImages) {
        const { base64, img } = await getPlaiceholder(image)
        blurredImages.push({ ...img, blurDataURL: base64 })
    }
    return {
        props: {
            blurredImages,
        },
    }
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
    blurredImages,
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
                <Hero blurredImages={blurredImages} />
                <div id="content">
                    <Solutions />
                    <Services />
                    <Partners />
                </div>
            </div>
        </>
    )
}

export default Home
