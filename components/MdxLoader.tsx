import dynamic from 'next/dynamic'

interface Props {
    path: string
    props?: any
}

const MdxLoader: React.FC<Props> = ({ path, props }) => {
    try {
        const Component = dynamic(() => import(`~/content/mdx${path}.mdx`))
        return (
            <div className="prose md:prose-xl">
                <Component {...props} />
            </div>
        )
    } catch (e) {
        return null
    }
}

export default MdxLoader
