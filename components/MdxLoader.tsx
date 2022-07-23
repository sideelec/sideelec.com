import { MDXProvider } from '@mdx-js/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const CustomLink = (props: any) => {
    const href = props.href
    const isInternalLink =
        href && (href.startsWith('/') || href.startsWith('#'))

    if (isInternalLink) {
        return (
            <Link href={href}>
                <a {...props}>{props.children}</a>
            </Link>
        )
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const components = {
    a: CustomLink,
}

interface Props {
    path: string
    props?: any
}

const MdxLoader: React.FC<Props> = ({ path, props }) => {
    try {
        const Component = dynamic(() => import(`~/content/mdx${path}.mdx`))
        return (
            <MDXProvider components={components}>
                <div className="prose max-w-none md:prose-xl">
                    <Component {...props} />
                </div>
            </MDXProvider>
        )
    } catch (e) {
        return null
    }
}

export default MdxLoader
