import * as SolidIcons from '@heroicons/react/24/solid'
import * as OutlineIcons from '@heroicons/react/24/outline'
import dynamic from 'next/dynamic'
import { ComponentType } from 'react'

export type IconName = keyof typeof SolidIcons | keyof typeof OutlineIcons

type Props = {
    name: string
    className?: string
}

const HeroIcon = ({ name, className = '' }: Props) => {
    const outline = name.endsWith('Outline')
    if (outline) {
        name = name.replace('Outline', '')
    }
    try {
        const Icon: ComponentType<{ className: string }> = outline
            ? // @ts-ignore
              dynamic(() =>
                  import('@heroicons/react/24/outline').then((mod) => mod[name])
              )
            : // @ts-ignore
              dynamic(() =>
                  import('@heroicons/react/24/solid').then((mod) => mod[name])
              )

        return <Icon className={className} aria-hidden={true} />
    } catch (error) {
        throw 'Icon not found'
    }
}

export default HeroIcon
