import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import ReactMarkdown from 'react-markdown'
import { getAllSlugs, readMarkdownFile } from '~/lib/utils'

export async function getStaticPaths() {
    const slugs = getAllSlugs()
    const paths = slugs.map((s) => ({
        params: { slug: s.replaceAll('.md', '') },
    }))

    console.log(paths)

    return {
        paths,
        fallback: false,
    }
}

type Frontmatter = { title: string }

export const getStaticProps: GetStaticProps<{
    md: { frontmatter: Frontmatter; content: string }
}> = async ({ params }) => {
    const md = readMarkdownFile<Frontmatter>(params!.slug as string)

    return {
        props: {
            md,
        },
    }
}

export default function LegalDocument({
    md,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div className="custom-container mx-auto px-4">
            <h1 className="block pb-24 pt-12 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                {md.frontmatter.title}
            </h1>
            <ReactMarkdown className="prose max-w-none">
                {md.content}
            </ReactMarkdown>
        </div>
    )
}
