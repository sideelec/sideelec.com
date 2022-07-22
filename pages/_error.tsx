import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '~/components/Button'
import { useMeta } from '~/hooks/useMeta'

interface Props {
    statusCode?: number
}

const Error: NextPage<Props> = ({ statusCode }) => {
    const router = useRouter()
    const { Meta } = useMeta({
        title: statusCode
            ? `Erreur ${statusCode}`
            : "Une erreur s'est produite",
    })
    return (
        <>
            <Meta />
            <div className="custom-container flex flex-grow flex-col px-4">
                <div className="my-auto flex-shrink-0 py-16 sm:py-32">
                    <p className="bg-gradient text-gradient text-base font-semibold uppercase tracking-wide">
                        Erreur {statusCode}
                    </p>
                    <h1 className="mt-2 text-5xl font-bold uppercase text-gray-900">
                        {statusCode === 404
                            ? 'Page introuvable'
                            : 'Problème serveur'}
                    </h1>
                    <p className="mt-2 text-lg text-gray-500">
                        {statusCode === 404
                            ? "Désolé, nous n'avons pas trouvé la page que vous recherchez."
                            : "Une erreur s'est produite"}
                    </p>

                    <div className="mt-6 flex space-x-4">
                        <Button onClick={() => router.back()}>
                            Page précédente
                        </Button>

                        <Button as={Link} href="/" color="gray">
                            Accueil
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
