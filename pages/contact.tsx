import Hero from '~/components/sections/Contact/Hero'
import Map from '~/components/sections/Contact/Map'
import Form from '~/components/sections/Contact/Form'
import contactContent from '~/content/contact.json'
import { useMeta } from '~/hooks/useMeta'

export default function Contact() {
    const { title, description } = contactContent.hero
    const { Meta } = useMeta({
        title,
        description,
    })

    return (
        <>
            <Meta />
            <Hero />
            <Map />
            <Form />
        </>
    )
}
