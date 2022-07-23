import { useMeta } from '~/hooks/useMeta'
import solutionsContent from '~/content/solutions.json'
import Hero from '~/components/sections/Solutions/Hero'
import Grid from '~/components/sections/Solutions/Grid'
import type { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next'
import { BlurredImage } from '~/types/home'
import { getPlaiceholder } from 'plaiceholder'
import MdxLoader from '~/components/MdxLoader'

export const getStaticProps: GetStaticProps<{
    blurredImages: BlurredImage[]
}> = async () => {
    const rawImages = solutionsContent.solutions.map((product) => product.image)
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

const Solutions: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
    blurredImages,
}) => {
    const solutions = solutionsContent
    const { Meta } = useMeta({
        title: solutions.title,
        description: solutions.description,
    })

    return (
        <>
            <Meta />
            <div className="bg-gradient-to-tr from-gray-100 via-gray-50 to-gray-50">
                <Hero />
                <Grid blurredImages={blurredImages} />
                <div className="custom-container pb-24">
                    <MdxLoader path="/solutions" />
                </div>
            </div>
        </>
    )
}

export default Solutions
