import dynamic from 'next/dynamic'

interface Props {
    path: string
    props?: any
}

const MdxLoader: React.FC<Props> = ({ path, props }) => {
    const Component = dynamic(() => import(`~/content/mdx${path}.mdx`))
    return <Component {...props} />
}

export default MdxLoader
