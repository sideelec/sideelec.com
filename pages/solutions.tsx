import { useMeta } from '~/hooks/useMeta'

const Solutions = () => {
    const { Meta } = useMeta({})

    return (
        <>
            <Meta />
            <div>solutions</div>
        </>
    )
}

export default Solutions
