import HeroIcon from '~/components/HeroIcon'
import homeContent from '~/content/home.json'

type CardProps = typeof homeContent.services.cards[0]

function Card({ name, description, icon }: CardProps) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-left">
            <div>
                <span className="bg-gradient inline-flex items-center justify-center rounded-lg p-2">
                    <HeroIcon
                        name={icon}
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                    />
                </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">{name}</h3>
            <p className="mt-2 text-gray-700">{description}</p>
        </div>
    )
}

export default function Services() {
    const { services } = homeContent
    return (
        <div
            id="services"
            className="relative bg-gray-50 py-16 sm:py-24 lg:py-32"
        >
            <div className="custom-container px-4 text-center">
                <h2 className="text-gradient bg-gradient text-xl font-semibold">
                    {services.subtitle}
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {services.title}
                </p>
                <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                    {services.description}
                </p>
                <div className="mt-12">
                    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
                        {services.cards.map((service) => (
                            <Card key={service.name} {...service} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
