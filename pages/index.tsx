import type { NextPage } from 'next'
import Hero from '~/components/sections/Home/Hero'
import Partners from '~/components/sections/Home/Partners'
import Services from '~/components/sections/Home/Services'
import Solutions from '~/components/sections/Home/Solutions'
import homeContent from '~/content/home.json'

import { useMeta } from '~/hooks/useMeta'

const Home: NextPage = () => {
    const { hero } = homeContent
    const { Meta } = useMeta({
        title: 'Accueil',
        description: hero.description,
    })

    return (
        <>
            <Meta />
            <div>
                <Hero />
                <div id="content">
                    <Solutions />
                    <Services />
                    <Partners />
                </div>
            </div>
        </>
    )
}

export default Home
