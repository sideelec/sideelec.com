import { createContext } from 'react'

export interface MetaContextValue {
    description: string
    url: string
    image: string
    titleTemplate: (title?: string) => string
}

export const MetaContext = createContext<MetaContextValue | null>(null)
