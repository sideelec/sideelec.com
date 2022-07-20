import { ArrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import HeroIcon from '~/components/HeroIcon'
import contact from '~/content/contact.json'
import { useMeta } from '~/hooks/useMeta'

interface CardProps {
    icon: string
    title: string
    description: string
    link: {
        url: string
        text: string
        external: boolean
    }
}

const Card = ({ icon, title, description, link }: CardProps) => {
    return (
        <div className="flex flex-col rounded-lg border bg-white shadow-md">
            <div className="p-6">
                <div className="bg-gradient inline-block rounded-lg p-2">
                    <HeroIcon name={icon} className="h-7 w-7 text-white" />
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-700">
                    {title}
                </h2>
                <p
                    className="mt-4 text-gray-500"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>
            <Link href={link.url}>
                <a
                    className="group mt-auto block rounded-b-lg border-t border-gray-100 bg-gray-50 p-6 font-semibold focus:outline-none focus:ring-2 focus:ring-gray-300"
                    target={link.external ? '_blank' : undefined}
                >
                    <div className="bg-gradient text-gradient flex items-center">
                        <span className="text-lg">{link.text}</span>
                        <ArrowRightIcon className="ml-2 h-4 w-4 text-primary-500 transition-all group-hover:ml-4" />
                    </div>
                </a>
            </Link>
        </div>
    )
}

const Contact = () => {
    const { Meta } = useMeta({
        title: contact.title,
        description: contact.description,
    })

    return (
        <>
            <Meta />
            <div>
                <div
                    className="relative bg-cover bg-center"
                    style={{ backgroundImage: `url('${contact.image}')` }}
                >
                    <div className="absolute inset-0 z-0 bg-black/80"></div>
                    <div className="custom-container relative px-4 pt-24 pb-48">
                        <h1 className="text-6xl font-bold uppercase text-white">
                            {contact.title}
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-gray-400">
                            {contact.description}
                        </p>
                    </div>
                </div>
                <div className="relative -mt-24 mb-24">
                    <div className="custom-container grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
                        {contact.cards.map((card, index) => (
                            <Card {...card} key={index} />
                        ))}
                    </div>
                </div>
                <div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repellat expedita minima, aliquam libero sit sint delectus
                    corrupti, deserunt at, dolore corporis saepe inventore.
                    Repellendus fuga omnis deserunt quibusdam veritatis aliquam
                    perferendis distinctio earum provident tenetur assumenda,
                    aperiam praesentium repudiandae consequuntur ea architecto
                    obcaecati. Aspernatur nisi non obcaecati numquam
                    dignissimos, adipisci accusamus ducimus quaerat inventore,
                    asperiores, labore quia beatae a doloribus? Iure aspernatur
                    ipsam, dicta natus iste voluptates, odit doloremque ratione
                    exercitationem repellendus magnam neque quis quos possimus
                    deleniti temporibus corporis modi. Quisquam et praesentium
                    consectetur sunt quo, incidunt in accusamus est rerum
                    impedit expedita quod hic tenetur ducimus unde ea dicta
                    ipsam vero molestias omnis magni odit! Odio debitis sunt ex?
                    Nemo maxime, in quos mollitia tempora neque quae fugiat
                    amet? Rem fugiat quos eum odio alias! Dolorem adipisci
                    repellendus odio provident dolores delectus, eius aperiam.
                    Iure quibusdam veniam hic officia illum cupiditate a ullam
                    atque, commodi tempore laboriosam qui totam et consequatur
                    quod adipisci itaque fugit dignissimos voluptatum
                    perspiciatis molestias magnam blanditiis cumque. Cupiditate
                    doloribus dolorum ipsa error, expedita asperiores neque
                    eaque rem nisi culpa? Consectetur quia perferendis
                    voluptatem repellat corporis, libero vel aut unde illum
                    praesentium dicta nam sed neque distinctio adipisci!
                    Corrupti molestias sunt consequuntur officia ipsam.
                </div>
            </div>
        </>
    )
}

export default Contact
