import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '~/components/Button'

interface Props {
    statusCode?: number
}

const Error: NextPage<Props> = ({ statusCode }) => {
    const router = useRouter()
    return (
        <div className="custom-container py-24 text-center">
            <h1 className="text-5xl font-bold">
                {statusCode
                    ? `Erreur ${statusCode}`
                    : "Une erreurs s'est produite"}
            </h1>
            <div className="mt-8 flex w-full justify-center space-x-2">
                <Button onClick={() => router.back()}>Page précédente</Button>
                <Link href="/" passHref>
                    <Button component="a" type="gray">
                        Accueil
                    </Button>
                </Link>
            </div>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
