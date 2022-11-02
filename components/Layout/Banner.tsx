import clsx from 'clsx'
import Link from 'next/link'
import globalContent from '~/content/global.json'

const Banner = () => {
    const { banner } = globalContent
    const hasLink = banner.link !== null
    const Component = (hasLink ? Link : 'div') as any
    const linkProps = hasLink ? { href: banner.link, target: '_blank' } : {}
    return (
        <Component
            {...linkProps}
            tabIndex={0}
            className={clsx(
                'border-[3px] border-transparent bg-orange-600 py-1 text-left text-sm text-white transition-all duration-300 sm:text-base',
                hasLink &&
                    'hover:opacity-80 focus:border-primary-200 focus:outline-none'
            )}
        >
            <div className="custom-container space-x-2">
                <span className="font-semibold">{banner.prefix}</span>
                <span>{banner.content}</span>
                {hasLink && (
                    <span className="font-semibold">En savoir plus</span>
                )}
            </div>
        </Component>
    )
}

export default Banner
