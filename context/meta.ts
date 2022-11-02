import { createContext } from 'react'

export interface MetaContextValue {
    description: string
    url: string
    image: string
    // eslint-disable-next-line no-unused-vars
    titleTemplate: (title?: string) => string
}

export const MetaContext = createContext<MetaContextValue | null>(null)
