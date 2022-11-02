import Error from '~/components/Error'
import { useMeta } from '~/hooks/useMeta'

export default function Custom404() {
    const title = 'Page introuvable'
    const { Meta } = useMeta({
        title,
    })
    return (
        <>
            <Meta />
            <Error
                statusCode={404}
                title={title}
                description="Veuillez vérifier l'URL dans la barre d'adresse et réessayer."
            />
        </>
    )
}
