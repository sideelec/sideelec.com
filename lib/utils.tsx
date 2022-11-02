import toast from 'react-hot-toast'
import clsx from 'clsx'
import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Transition } from '@headlessui/react'
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export const notify = ({
    title,
    content,
    variant,
}: {
    title: string
    content: string
    variant: 'success' | 'error'
}) => {
    toast.custom(({ visible, id }) => (
        <Transition
            show={visible}
            appear={true}
            as={React.Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                    <div className="flex items-stretch">
                        <div
                            className={clsx(
                                'w-2 flex-shrink-0 rounded-full',
                                {
                                    success: 'bg-emerald-500',
                                    error: 'bg-red-500',
                                }[variant]
                            )}
                        ></div>
                        <div className="ml-3 w-0 flex-1 pt-0.5">
                            <p className="text-sm font-medium text-gray-800">
                                {title}
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                {content}
                            </p>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            <div className="flex">
                                <button
                                    type="button"
                                    className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                    onClick={() => toast.dismiss(id)}
                                >
                                    <span className="sr-only">Close</span>
                                    <XMarkIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    ))
}

export const LEGAL_DOCUMENTS_DIR = join(process.cwd(), 'content/legal')

export function readMarkdownFile<T extends Record<string, any>>(slug: string) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(LEGAL_DOCUMENTS_DIR, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const frontmatter: T = data as any
    return { frontmatter, content }
}

export function getAllSlugs() {
    return fs.readdirSync(LEGAL_DOCUMENTS_DIR)
}
