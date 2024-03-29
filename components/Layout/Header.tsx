import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from '~/components/Button'
import useWindowEventListener from '~/hooks/useWindowEventListener'
import Logo from '~/public/logo.png'
import Image from 'next/image'

const links: { name: string; href: string; scroll?: boolean }[] = [
    {
        name: 'Accueil',
        href: '/',
        scroll: true,
    },
    {
        name: 'Solutions',
        href: '/#solutions',
    },
    {
        name: 'Services',
        href: '/#services',
    },
    {
        name: 'Partenaires',
        href: '/#partenaires',
    },
    {
        name: "L'entreprise",
        href: '/#entreprise',
    },
].map((link) => ({ ...link, scroll: link.scroll || false }))

const Header = () => {
    const [isTop, setIsTop] = useState(true)
    useWindowEventListener('scroll', () => setIsTop(window.scrollY < 100), {
        passive: true,
    })
    return (
        <header
            className={clsx(
                'sticky top-0 z-50 border-b bg-white',
                isTop ? 'border-transparent' : 'border-gray-200'
            )}
        >
            <Popover className="relative">
                <nav className="custom-container flex items-center justify-between py-3">
                    <div className="flex items-center space-x-10">
                        <Link
                            href="/"
                            className="flex items-center space-x-2 rounded-md focus:outline-none focus:ring focus:ring-primary-500"
                        >
                            <Image
                                src={Logo}
                                alt="SIDEELEC logo"
                                height={40}
                                width={40}
                                unoptimized
                                loading="eager"
                            />
                            <span className="text-2xl font-bold text-primary-500">
                                SIDEELEC
                            </span>
                        </Link>
                        <ul className="hidden items-center space-x-4 md:flex">
                            {links.map(({ name, ...rest }, index) => (
                                <li key={index}>
                                    <Link
                                        {...rest}
                                        className="rounded-md font-medium text-gray-500 transition-colors hover:text-gray-600 focus:outline-none focus:ring focus:ring-primary-500"
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button as={Link} href="/contact" size="small">
                            Contact
                        </Button>
                        <Popover.Button className="inline-flex items-center justify-center rounded-lg bg-gray-200 p-2.5 text-gray-800 transition-all hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 md:hidden">
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-5 w-5" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                </nav>
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
                                    <XMarkIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </Popover.Button>
                                <nav>
                                    <ul className="flex flex-col items-center justify-center space-y-6 text-xl">
                                        {links.map(
                                            ({ name, ...rest }, index) => (
                                                <li key={index}>
                                                    <Link
                                                        {...rest}
                                                        onClick={() => close()}
                                                        className="relative inline-flex items-center space-x-1 rounded-md font-medium text-gray-500 transition-colors hover:text-gray-600 focus:outline-none focus:ring focus:ring-primary-500"
                                                    >
                                                        {name}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </nav>
                            </>
                        )}
                    </Popover.Panel>
                </Transition>
            </Popover>
        </header>
    )
}

export default Header
