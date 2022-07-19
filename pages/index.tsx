import type { NextPage } from 'next'
import Hero from '~/components/sections/Home/Hero'
import Solutions from '~/components/sections/Home/Solutions'

import { useMeta } from '~/hooks/useMeta'

const Home: NextPage = () => {
    const { Meta } = useMeta({ title: 'Accueil' })

    return (
        <div>
            <Meta />
            <Hero />
            <div id="content">
                <Solutions />
                {/* <Services /> */}
                {/* <Partners /> */}
            </div>
        </div>
    )
}

export default Home
