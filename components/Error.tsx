import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from '~/components/Button'

type Props = {
    statusCode: number | string
    title: string
    description: string
}

export default function Error({ statusCode, title, description }: Props) {
    const router = useRouter()
    return (
        <div className="min-h-[calc(100vh-200px)] bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
            <div className="mx-auto max-w-max">
                <div className="sm:flex">
                    <p className="text-gradient bg-gradient text-4xl font-bold tracking-tight sm:text-5xl">
                        {statusCode}
                    </p>
                    <div className="sm:ml-6">
                        <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                {title}
                            </h1>
                            <p className="mt-1 text-base text-gray-500">
                                {description}
                            </p>
                        </div>
                        <div className="mt-10 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                            <Button
                                onClick={() => router.back()}
                                className="justify-center sm:justify-start"
                            >
                                Page précédente
                            </Button>

                            <Button
                                as={Link}
                                href="/"
                                color="gray"
                                className="justify-center sm:justify-start"
                            >
                                Accueil
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
