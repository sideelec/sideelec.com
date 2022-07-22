import Link from 'next/link'
import Button from '~/components/Button'
import HeroIcon from '~/components/HeroIcon'
import homeContent from '~/content/home.json'

interface CardProps {
    title: string
    description: string
    icon: string
}

const Card = ({ icon, title, description }: CardProps) => {
    return (
        <div className="space-y-2 rounded-lg p-2">
            <div className="inline-block rounded-lg bg-primary-400 p-2">
                <HeroIcon name={icon} className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-primary-100">{description}</p>
        </div>
    )
}

const Services = () => {
    const { services } = homeContent
    return (
        <div className="bg-gradient">
            <div className="custom-container py-24 px-4">
                <div>
                    <div className="flex items-center justify-between space-x-4">
                        <h2 className="mb-6 text-5xl font-bold uppercase text-white">
                            {services.title}
                        </h2>
                        <Button
                            as={Link}
                            href="/services"
                            size="small"
                            color="white"
                        >
                            {services.button}
                        </Button>
                    </div>
                    <p className="max-w-2xl text-base font-medium text-primary-100">
                        {services.description}
                    </p>
                </div>
                <div className="mt-9 grid gap-x-6 gap-y-12 sm:grid-cols-2">
                    {services.cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
