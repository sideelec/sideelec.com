import 'focus-visible'
import '~/styles/main.scss'
import type { AppProps } from 'next/app'
import PlausibleProvider from 'next-plausible'
import { publicEnv as env } from '~/lib/env'
import Header from '~/components/Layout/Header'
import Footer from '~/components/Layout/Footer'
import { MetaContextValue, MetaContext } from '~/context/meta'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Barlow } from '@next/font/google'

const barlow = Barlow({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    preload: true,
})

const meta: MetaContextValue = {
    description: 'description',
    url: env.url,
    image: `${env.url}/logo.png`,
    titleTemplate: (title) => (title ? `${title} - SIDEELEC` : 'SIDEELEC'),
}

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <div className={barlow.className}>
            <MetaContext.Provider value={meta}>
                <PlausibleProvider domain={env.domain}>
                    <Toaster position="bottom-right" reverseOrder={true} />
                    {/* <Banner /> */}
                    <Header />
                    <main>
                        <Component {...pageProps} />
                    </main>
                    <Footer />
                </PlausibleProvider>
            </MetaContext.Provider>
        </div>
    )
}

export default App
