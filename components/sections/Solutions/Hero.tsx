import solutions from '~/content/solutions.json'

const Hero = () => {
    return (
        <div className="custom-container pt-24 pb-12">
            <h1 className="text-6xl font-bold uppercase text-gray-800">
                {solutions.title}
            </h1>
            <h2 className="mt-4 max-w-xl text-xl font-medium text-gray-500">
                {solutions.description}
            </h2>
            <div className="bg-gradient mt-12 h-0.5 w-64 max-w-[50%] rounded-full" />
        </div>
    )
}

export default Hero
