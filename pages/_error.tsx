import type { NextPage } from 'next'
import { useMeta } from '~/hooks/useMeta'
import Error from '~/components/Error'

interface Props {
    statusCode?: number
}

const CustomError: NextPage<Props> = ({ statusCode }) => {
    const { Meta } = useMeta({
        title: statusCode
            ? `Erreur ${statusCode}`
            : "Une erreur s'est produite",
    })
    return (
        <>
            <Meta />
            <Error
                statusCode={statusCode || 'Erreur'}
                title={
                    statusCode === 404 ? 'Page introuvable' : 'Problème serveur'
                }
                description="Une erreur s'est produite, veuillez réessayer"
            />
        </>
    )
}

CustomError.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default CustomError
