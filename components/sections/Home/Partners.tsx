import homeContent from '~/content/home.json'

interface CardProps {
    name: string
    image: string
}

const Card = ({ name, image }: CardProps) => {
    return (
        <div className="flex justify-center">
            <img src={image} alt={`Logo ${name}`} className="h-12" />
        </div>
    )
}

const Partners = () => {
    const { partners } = homeContent
    return (
        <div className="">
            <div className="custom-container py-24 px-4">
                <div>
                    <h2 className="bg-gradient text-gradient mb-6 text-5xl font-bold uppercase">
                        {partners.title}
                    </h2>
                    <p className="max-w-2xl text-base font-medium text-gray-500">
                        {partners.description}
                    </p>
                </div>
                <div className="mt-9 grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {partners.cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners
