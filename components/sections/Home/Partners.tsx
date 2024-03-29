import homeContent from '~/content/home.json'
import Image from 'next/image'

type CardProps = typeof homeContent.partners.cards[0]

function Card({ name, image }: CardProps) {
    return (
        <div className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <Image
                className="!relative max-h-12 object-scale-down object-center"
                src={image}
                alt={`Logo ${name}`}
                fill
            />
        </div>
    )
}

export default function Partners() {
    const { partners } = homeContent
    return (
        <div id="partenaires" className="py-16 sm:py-24 lg:py-32">
            <div className="custom-container text-center">
                <h2 className="text-gradient bg-gradient text-xl font-semibold">
                    {partners.subtitle}
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {partners.title}
                </p>
                <div className="mt-12">
                    <div className="grid grid-cols-2 gap-1 md:grid-cols-3">
                        {partners.cards
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((card, index) => (
                                <Card key={index} {...card} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
