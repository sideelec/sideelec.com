import '~/styles/main.scss'
import '~/lib/fonts'
import '~/lib/swiper'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import PlausibleProvider from 'next-plausible'
import { Transition } from '@headlessui/react'
import env from '~/lib/env'
import Banner from '~/components/Banner'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import { MetaContextValue, MetaContext } from '~/context/meta'

const meta: MetaContextValue = {
    description: 'description',
    url: env.url,
    image: `${env.url}/logo.png`,
    titleTemplate: (title) => (title ? `${title} - SIDEELEC` : 'SIDEELEC'),
}

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()
    return (
        <MetaContext.Provider value={meta}>
            <PlausibleProvider domain={env.url}>
                <div className="flex min-h-screen flex-col">
                    <Banner />
                    <Header />
                    <Transition
                        key={router.route}
                        as="div"
                        appear={true}
                        show={true}
                        enter="transition-opacity duration-300 ease-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-300 ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Component {...pageProps} />
                    </Transition>
                    <Footer />
                </div>
            </PlausibleProvider>
        </MetaContext.Provider>
    )
}

export default App
