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
    loading?: boolean
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
            loading = false,
            disabled,
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
                    'inline-flex items-center rounded-lg font-medium uppercase transition-all focus:outline-none focus:ring-2',
                    colorClass,
                    sizeClass,
                    disabled && '!bg-gray-300 !bg-[image:none] !text-white',
                    loading && '!bg-opacity-75',
                    disabled &&
                        loading &&
                        '!cursor-not-allowed !bg-opacity-100',
                    className
                )}
                {...{ disabled, ...rest }}
            >
                {loading && (
                    <svg
                        className="-ml-1 mr-3 h-4 w-4 animate-spin text-current motion-reduce:hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                )}
                {children}
            </Component>
        )
    }
)

export default Button
