import '~/styles/main.scss'
import '~/lib/fonts'
import '~/lib/swiper'
import type { AppProps } from 'next/app'
import PlausibleProvider from 'next-plausible'
import { Transition } from '@headlessui/react'
import { publicEnv as env } from '~/lib/env'
import Banner from '~/components/Banner'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import { MetaContextValue, MetaContext } from '~/context/meta'
import { useScrollRestoration } from '~/hooks/useScrollRestoration'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const meta: MetaContextValue = {
    description: 'description',
    url: env.url,
    image: `${env.url}/logo.png`,
    titleTemplate: (title) => (title ? `${title} - SIDEELEC` : 'SIDEELEC'),
}

const App = ({ Component, pageProps, router }: AppProps) => {
    useScrollRestoration(router)
    return (
        <MetaContext.Provider value={meta}>
            <PlausibleProvider domain={env.domain}>
                <div className="flex min-h-screen flex-col">
                    <Toaster position="bottom-right" reverseOrder={true} />
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
