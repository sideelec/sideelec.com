import type {
    GetStaticProps,
    GetStaticPaths,
    InferGetStaticPropsType,
    NextPage,
} from 'next'
import MdxLoader from '~/components/MdxLoader'
import solutionsContent from '~/content/solutions.json'
import { useMeta } from '~/hooks/useMeta'
import { BlurredImage } from '~/types/home'
import { getPlaiceholder } from 'plaiceholder'
import Hero from '~/components/sections/Solution/Hero'

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: solutionsContent.solutions.map(({ slug }) => ({
            params: {
                solution: slug,
            },
        })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<{
    solution: typeof solutionsContent.solutions[0]
    blurredImage: BlurredImage
}> = async ({ params }) => {
    const solution = solutionsContent.solutions.find(
        ({ slug }) => slug === params!.solution
    )!
    const { base64, img } = await getPlaiceholder(solution.image)
    const blurredImage: BlurredImage = {
        ...img,
        blurDataURL: base64,
    }
    return {
        props: {
            solution,
            blurredImage,
        },
    }
}

const Solution: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
    solution,
    blurredImage,
}) => {
    const { Meta } = useMeta({
        title: solution.title,
        description: solution.description,
    })

    return (
        <>
            <Meta />
            <div className="mb-24">
                <Hero solution={solution} blurredImage={blurredImage} />
                <div className="custom-container mt-2 md:mt-8">
                    <p className="mb-8 text-xl text-gray-500">
                        {solution.description}
                    </p>
                    <MdxLoader path={`/solutions/${solution.slug}`} />
                </div>
            </div>
        </>
    )
}

export default Solution
