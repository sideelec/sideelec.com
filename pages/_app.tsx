import 'focus-visible'
import '~/styles/main.scss'
import '~/lib/fonts'
import type { AppProps } from 'next/app'
import PlausibleProvider from 'next-plausible'
import { publicEnv as env } from '~/lib/env'
import Header from '~/components/Layout/Header'
import Footer from '~/components/Layout/Footer'
import { MetaContextValue, MetaContext } from '~/context/meta'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import Banner from '~/components/Layout/Banner'

const meta: MetaContextValue = {
    description: 'description',
    url: env.url,
    image: `${env.url}/logo.png`,
    titleTemplate: (title) => (title ? `${title} - SIDEELEC` : 'SIDEELEC'),
}

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <MetaContext.Provider value={meta}>
            <PlausibleProvider domain={env.domain}>
                <Toaster position="bottom-right" reverseOrder={true} />
                <Banner />
                <Header />
                <main>
                    <Component {...pageProps} />
                </main>
                <Footer />
            </PlausibleProvider>
        </MetaContext.Provider>
    )
}

export default App
