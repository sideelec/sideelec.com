import Link from 'next/link'
import globalContent from '~/content/global.json'

const Banner = () => {
    const { banner } = globalContent
    return (
        <Link
            href={banner.link}
            tabIndex={0}
            target="_blank"
            className="bg-gradient border-[3px] border-transparent py-1 text-left text-sm text-gray-50 transition-all duration-300 hover:opacity-80 focus:border-primary-200 focus:outline-none sm:text-base"
        >
            <div className="custom-container space-x-2">
                <span className="font-semibold">{banner.prefix}</span>
                <span>{banner.content}</span>
                <span className="font-semibold">En savoir plus</span>
            </div>
        </Link>
    )
}

export default Banner
