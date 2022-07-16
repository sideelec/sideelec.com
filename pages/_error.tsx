import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Button from '~/components/Button'

interface Props {
    statusCode?: number
}

const Error: NextPage<Props> = ({ statusCode }) => {
    const router = useRouter()
    return (
        <div>
            <p>{statusCode ? `Error ${statusCode}` : 'An error occurred'}</p>
            <Button onClick={() => router.back()}>Go back</Button>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
