import Link from 'next/link'
import Button from '~/components/Button'
import globalContent from '~/content/global.json'

const Contact = () => {
    const { contact } = globalContent
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2">
            <div
                className="relative hidden bg-cover bg-center md:block"
                style={{ backgroundImage: `url('${contact.image}')` }}
            >
                <div className="bg-gradient absolute inset-0 z-0 opacity-60"></div>
            </div>
            <div className="bg-gray-800 px-6 py-16 md:col-span-2 lg:col-span-1">
                <div className="max-w-xl">
                    <div className="space-y-2">
                        <div className="bg-gradient text-gradient font-medium">
                            {contact.subtitle}
                        </div>
                        <div className="text-4xl font-bold uppercase text-white sm:text-5xl">
                            {contact.title}
                        </div>
                        <div className="text-gray-400">
                            {contact.description}
                        </div>
                    </div>
                    <Button
                        as={Link}
                        href="/contact"
                        className="mt-6 inline-block"
                    >
                        {contact.contact}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Contact
