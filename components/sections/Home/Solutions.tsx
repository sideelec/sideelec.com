import HeroIcon from '~/components/HeroIcon'
import homeContent from '~/content/home.json'

const Card = ({
    name,
    description,
    icon,
}: typeof homeContent.solutions.cards[0]) => {
    return (
        <div className="pt-6">
            <div className="flow-root rounded-lg bg-gray-100 px-6 pb-8">
                <div className="-mt-6">
                    <div>
                        <span className="bg-gradient inline-flex items-center justify-center rounded-md p-3 shadow-lg">
                            <HeroIcon
                                name={icon}
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                            />
                        </span>
                    </div>
                    <h3 className="mt-8 text-xl font-semibold tracking-tight text-gray-900">
                        {name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

const Solutions = () => {
    const { solutions } = homeContent
    return (
        <div className="relative bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-gradient bg-gradient text-xl font-semibold">
                    {solutions.subtitle}
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {solutions.title}
                </p>
                <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                    {solutions.description}
                </p>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {solutions.cards.map((solution) => (
                            <Card key={solution.name} {...solution} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solutions
