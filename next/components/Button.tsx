import clsx from 'clsx'
import React, { forwardRef } from 'react'

type Props = {
    component?: React.Component | string
    children: React.ReactNode
    type?: 'primary' | 'gray' | 'white'
    size?: 'small' | 'medium'
} & React.HTMLAttributes<any>

const Button = forwardRef<any, Props>(
    (
        {
            component = 'button',
            children,
            type = 'primary',
            size = 'medium',
            className,
            ...rest
        },
        ref
    ) => {
        const typeClass = {
            primary:
                'bg-gradient text-white hover:from-primary-500 hover:to-primary-400',
            gray: 'bg-gray-700 text-gray-100 hover:bg-gray-600',
            white: 'bg-white text-gray-700 hover:bg-gray-50',
        }[type]
        const sizeClass = {
            small: 'py-1 px-4',
            medium: 'px-6 py-3',
        }[size]

        const Element = component as React.ElementType

        return (
            <Element
                ref={ref}
                className={clsx(
                    'rounded-lg font-medium uppercase transition-all',
                    typeClass,
                    sizeClass,
                    className
                )}
                {...rest}
            >
                {children}
            </Element>
        )
    }
)

export default Button
