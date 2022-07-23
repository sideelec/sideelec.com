import homeContent from '~/content/home.json'

interface CardProps {
    name: string
    image: string
}

const Card = ({ name, image }: CardProps) => {
    return (
        <div className="flex h-20 justify-center rounded-md border border-gray-100 bg-white p-2">
            <img src={image} alt={`Logo ${name}`} className="object-contain" />
        </div>
    )
}

const Partners = () => {
    const { partners } = homeContent
    return (
        <div className="bg-gray-50">
            <div className="custom-container py-24">
                <div>
                    <h2 className="mb-6 text-5xl font-bold uppercase text-gray-800">
                        {partners.title}
                    </h2>
                    <p className="max-w-2xl text-base font-medium text-gray-500">
                        {partners.description}
                    </p>
                </div>
                <div className="mt-9 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {partners.cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners
