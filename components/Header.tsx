import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Button from './Button'

const links: { name: string; href: string }[] = [
    {
        name: 'Accueil',
        href: '/',
    },
    {
        name: 'Solutions',
        href: '/solutions',
    },
    {
        name: 'Services',
        href: '/services',
    },
    {
        name: "L'entreprise",
        href: '/l-entreprise',
    },
    {
        name: 'Nouveautés',
        href: '/nouveautes',
    },
]

const Header = () => {
    const { pathname } = useRouter()

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <Popover className="relative">
                <div className="custom-container flex items-center justify-between px-4 py-3">
                    <div className="flex items-center space-x-6">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
                        >
                            <img
                                src="/logo.png"
                                alt="SIDEELEC logo"
                                height={40}
                                width={40}
                            />
                            <span className="text-2xl font-bold text-primary-500">
                                SIDEELEC
                            </span>
                        </Link>
                        <div className="hidden items-center space-x-4 md:flex">
                            {links.map(({ href, name }, index) => (
                                <Link
                                    href={href}
                                    key={index}
                                    className="rounded-md font-medium text-gray-500 transition-colors hover:text-gray-600 focus:outline-none focus:ring focus:ring-primary-500"
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button as={Link} href="/contact" size="small">
                            Contact
                        </Button>
                        <Popover.Button className="inline-flex items-center justify-center rounded-lg bg-gray-200 p-1.5 text-gray-800 transition-all hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 md:hidden">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-5 w-5" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                </div>
                <Transition
                    enter="duration-200 ease-out"
                    enterFrom="scale-95 opacity-0"
                    enterTo="scale-100 opacity-100"
                    leave="duration-100 ease-in"
                    leaveFrom="scale-100 opacity-100"
                    leaveTo="scale-95 opacity-0"
                    as={React.Fragment}
                >
                    <Popover.Panel
                        focus
                        className="fixed inset-0 z-50 flex origin-center transform items-center justify-center bg-white p-4 transition md:hidden"
                    >
                        {({ close }) => (
                            <>
                                <Popover.Button className="absolute top-4 right-4 inline-flex items-center justify-center rounded-md bg-gray-200 p-1.5 text-gray-800 transition-all hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
                                    <span className="sr-only">Close menu</span>
                                    <XIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </Popover.Button>
                                <div className="flex flex-col items-center justify-center space-y-6 text-xl">
                                    {links.map(({ href, name }, index) => (
                                        <Link
                                            key={index}
                                            href={href}
                                            onClick={() => close()}
                                            className={clsx(
                                                'relative inline-flex items-center space-x-1 rounded-md font-medium text-gray-500 transition-colors hover:text-gray-600 focus:outline-none focus:ring focus:ring-primary-500',
                                                (href === '/'
                                                    ? pathname === '/'
                                                    : pathname.startsWith(
                                                          href
                                                      )) &&
                                                    'bg-gradient text-gradient font-bold'
                                            )}
                                        >
                                            {name}
                                        </Link>
                                    ))}
                                </div>
                            </>
                        )}
                    </Popover.Panel>
                </Transition>
            </Popover>
        </header>
    )
}

export default Header
