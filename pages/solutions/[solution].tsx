import type {
    GetStaticProps,
    GetStaticPaths,
    InferGetStaticPropsType,
    NextPage,
} from 'next'
import Image from 'next/image'
import MdxLoader from '~/components/MdxLoader'
import solutionsContent from '~/content/solutions.json'
import HeroIcon from '~/components/HeroIcon'
import Button from '~/components/Button'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useMeta } from '~/hooks/useMeta'
import { BlurredImage } from '~/types/home'
import { getPlaiceholder } from 'plaiceholder'

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
                <div className="relative">
                    <div className="absolute inset-0 z-10 bg-black/50"></div>
                    <div className="custom-container absolute inset-0 z-10">
                        <Button
                            as={Link}
                            href="/solutions"
                            className="mt-4"
                            size="small"
                            color="white"
                        >
                            <ArrowLeftIcon className="mr-2 -ml-1 h-4 w-4" />
                            <span>Solutions</span>
                        </Button>
                    </div>
                    <div className="relative z-0 flex h-48 items-center overflow-hidden">
                        <Image
                            {...blurredImage}
                            placeholder="blur"
                            className="w-full object-cover"
                            priority
                            alt=""
                        />
                    </div>
                </div>
                <div className="custom-container relative z-10">
                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                        <div className="bg-gradient flex rounded-2xl">
                            <HeroIcon
                                name={solution.icon}
                                className="h-24 w-24 rounded-2xl p-4 text-white ring-4 ring-white sm:h-32 sm:w-32"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="mt-12 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
                                <h1 className="truncate text-6xl font-bold text-gray-900">
                                    {solution.title}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
                        <h1 className="truncate text-2xl font-bold text-gray-900">
                            {solution.title}
                        </h1>
                    </div>
                </div>
                <div className="custom-container prose mt-8">
                    <p>{solution.description}</p>
                    <MdxLoader path={`/solutions/${solution.slug}`} />
                </div>
            </div>
        </>
    )
}

export default Solution
