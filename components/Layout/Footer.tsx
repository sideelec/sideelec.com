import Link from 'next/link'
import { useRouter } from 'next/router'
import Contact from './Contact'

const legalLinks: { name: string; href: string }[] = [
    {
        name: 'Mentions légales',
        href: '/legal/mentions-legales',
    },
    {
        name: 'Politique de confidentialité',
        href: '/legal/politique-de-confidentialite',
    },
]

const Footer = () => {
    const { pathname } = useRouter()
    return (
        <div className="mt-auto">
            {!['/contact', '/404'].includes(pathname) && <Contact />}
            <footer className="border-t border-gray-200 bg-gray-50">
                <div className="custom-container flex flex-col-reverse items-center justify-between py-4 md:flex-row">
                    <div className="mt-2 text-center text-sm text-gray-500 md:mt-0">
                        &copy; {new Date().getFullYear()} SIDEELEC. Tous droits
                        réservés. Site réalisé par{' '}
                        <Link
                            href="https://florian-lefebvre.dev"
                            target="_blank"
                            className="rounded-md font-semibold text-primary-500 underline focus:outline-none focus:ring focus:ring-primary-500"
                        >
                            Florian LEFEBVRE
                        </Link>
                        .
                    </div>
                    <div className="flex items-center space-x-4">
                        {legalLinks.map(({ href, name }) => (
                            <Link
                                key={href}
                                href={href}
                                className="rounded-md text-sm text-gray-500 transition-colors hover:text-gray-600 focus:outline-none focus:ring focus:ring-primary-500"
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
