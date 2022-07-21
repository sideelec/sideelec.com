import clsx from 'clsx'
import { forwardRef } from 'react'
import {
    PolymorphicComponentPropsWithRef,
    PolymorphicRef,
} from '~/types/polymorphic'
interface Props {
    children: React.ReactNode
    color?: 'primary' | 'gray' | 'white'
    size?: 'small' | 'medium'
}

type ButtonProps<C extends React.ElementType> =
    PolymorphicComponentPropsWithRef<C, Props>

type ButtonComponent = <
    C extends React.ElementType = 'button'
>({}: ButtonProps<C>) => React.ReactElement | null

const Button: ButtonComponent = forwardRef(
    <C extends React.ElementType = 'button'>(
        {
            as,
            children,
            color = 'primary',
            size = 'medium',
            className,
            ...rest
        }: ButtonProps<C>,
        ref?: PolymorphicRef<C>
    ) => {
        const colorClass = {
            primary:
                'bg-gradient text-white hover:from-primary-500 hover:to-primary-400 focus:ring-primary-200',
            gray: 'bg-gray-700 text-gray-100 hover:bg-gray-600 focus:ring-gray-500',
            white: 'bg-white text-gray-700 hover:bg-gray-50 focus:ring-primary-500',
        }[color]
        const sizeClass = {
            small: 'py-1 px-4',
            medium: 'px-6 py-3',
        }[size]

        const Component = as || 'button'

        return (
            <Component
                ref={ref}
                className={clsx(
                    'rounded-lg font-medium uppercase transition-all focus:outline-none focus:ring-2',
                    colorClass,
                    sizeClass,
                    className
                )}
                {...rest}
            >
                {children}
            </Component>
        )
    }
)

export default Button
