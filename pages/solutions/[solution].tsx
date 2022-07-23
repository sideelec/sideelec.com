import type {
    GetStaticProps,
    GetStaticPaths,
    InferGetStaticPropsType,
    NextPage,
} from 'next'
import MdxLoader from '~/components/MdxLoader'
import solutionsContent from '~/content/solutions.json'

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
}> = ({ params }) => {
    const solution = solutionsContent.solutions.find(
        ({ slug }) => slug === params!.solution
    )!
    return {
        props: {
            solution,
        },
    }
}

const Solution: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
    solution,
}) => {
    return (
        <div>
            <h1>Solution</h1>
            <MdxLoader
                path={`/solutions/${solution.slug}`}
                props={{ title: solution.title }}
            />
        </div>
    )
}

export default Solution
