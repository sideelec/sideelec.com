import homeContent from '~/content/home.json'
import { BlurredImage } from '~/types/home'
import Image from 'next/image'

interface PartnersProps {
    blurredImages: BlurredImage[]
}

interface CardProps {
    name: string
    imageProps: BlurredImage
}

const Card = ({ name, imageProps }: CardProps) => {
    return (
        <div className="flex h-20 justify-center rounded-md border border-gray-100 bg-white p-2">
            <Image
                {...imageProps}
                placeholder="blur"
                alt={`Logo ${name}`}
                className="h-full object-contain"
            />
        </div>
    )
}

const Partners: React.FC<PartnersProps> = ({ blurredImages }) => {
    const { partners } = homeContent
    const cards = partners.cards.map(({ name }, index) => ({
        name,
        imageProps: blurredImages[index],
    }))
    return (
        <div className="bg-gray-50">
            <div className="custom-container py-24 px-4">
                <div>
                    <h2 className="mb-6 text-5xl font-bold uppercase text-gray-800">
                        {partners.title}
                    </h2>
                    <p className="max-w-2xl text-base font-medium text-gray-500">
                        {partners.description}
                    </p>
                </div>
                <div className="mt-9 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partners
