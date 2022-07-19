import Head from 'next/head'
import { useContext } from 'react'
import { MetaContext } from '~/context/meta'

interface UseMetaProps {
    title?: string
    description?: string
}

export const useMeta = (newMeta: UseMetaProps = {}) => {
    const defaultMeta = useContext(MetaContext)
    if (defaultMeta === null) {
        throw new Error('useMeta must be used within a MetaContextProvider')
    }

    const meta = {
        description: defaultMeta.description,
        // eslint-disable-next-line no-unused-vars
        ...(({ title, ...rest }) => rest)(newMeta),
    }

    const Meta = () => (
        <Head>
            <title>{defaultMeta.titleTemplate(newMeta.title)}</title>
            {Object.entries(meta).map(([name, content]) => (
                <meta key={name} name={name} content={content} />
            ))}
        </Head>
    )

    return { Meta, meta }
}
