import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import ReactMarkdown from 'react-markdown'
import { useMeta } from '~/hooks/useMeta'
import { getAllSlugs, readMarkdownFile } from '~/utils/md'

import Link from 'next/link'

const CustomLink = (props: any) => {
    const href = props.href
    const isInternalLink =
        href && (href.startsWith('/') || href.startsWith('#'))

    if (isInternalLink) {
        return <Link {...props}>{props.children}</Link>
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const components = {
    a: CustomLink,
}

export async function getStaticPaths() {
    const slugs = getAllSlugs()
    const paths = slugs.map((s) => ({
        params: { slug: s.replaceAll('.md', '') },
    }))

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
    md: { frontmatter, content },
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { Meta } = useMeta({
        title: frontmatter.title,
    })
    return (
        <>
            <Meta />
            <div className="custom-container">
                <h1 className="block pb-24 pt-12 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                    {frontmatter.title}
                </h1>
                <ReactMarkdown
                    components={components}
                    className="prose max-w-none"
                >
                    {content}
                </ReactMarkdown>
            </div>
        </>
    )
}
