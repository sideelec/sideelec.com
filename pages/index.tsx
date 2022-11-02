import Hero from '~/components/sections/Home/Hero'
import Partners from '~/components/sections/Home/Partners'
import Services from '~/components/sections/Home/Services'
import Solutions from '~/components/sections/Home/Solutions'
import homeContent from '~/content/home.json'
import { useMeta } from '~/hooks/useMeta'
import Company from '~/components/sections/Home/Company'

export default function Home() {
    const { hero } = homeContent
    const { Meta } = useMeta({
        title: 'Accueil',
        description: hero.description,
    })

    return (
        <>
            <Meta />
            <Hero />
            <Solutions />
            <Services />
            <Partners />
            <Company />
        </>
    )
}
