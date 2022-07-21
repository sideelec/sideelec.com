import Formik from '~/components/Formik'
import Button from '~/components/Button'
import { contactSchema } from '~/lib/validation'
import { Transition } from '@headlessui/react'
import toast from 'react-hot-toast'
import clsx from 'clsx'
import contactContent from '~/content/contact.json'

const notify = ({
    title,
    content,
    variant,
}: {
    title: string
    content: string
    variant: 'success' | 'error'
}) => {
    toast.custom(({ visible }) => (
        <Transition
            show={visible}
            appear={true}
            as="div"
            enter="transition-all ease-in-out duration-400"
            enterFrom="opacity-0 translate-x-full"
            enterTo="opacity-100 translate-x-0"
            leave="transition-all ease-in-out duration-500"
            leaveFrom="opacity-100 translate-x-0"
            leaveTo="opacity-0 translate-x-full"
            className="pointer-events-auto flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
        >
            <div className="h-full p-2">
                <div
                    className={clsx(
                        'h-full w-2 rounded-full',
                        {
                            success: 'bg-emerald-500',
                            error: 'bg-red-500',
                        }[variant]
                    )}
                ></div>
            </div>
            <div className="p-2 pl-1">
                <div className="mb-1 font-semibold text-gray-800">{title}</div>
                <div className="text-sm leading-tight text-gray-500">
                    {content}
                </div>
            </div>
        </Transition>
    ))
}

const Error = ({ name }: { name: string }) => {
    return (
        <Formik.ErrorMessage
            name={name}
            render={(msg) => (
                <Transition
                    show={true}
                    appear={true}
                    as="div"
                    enter="transition-all duration-300 ease-out"
                    enterFrom="opacity-0 min-h-0"
                    enterTo="opacity-100 min-h-auto"
                    leave="transition-all duration-300 ease-in"
                    leaveFrom="opacity-100 min-h-auto"
                    leaveTo="opacity-0 h-0"
                    className="mt-1 text-sm text-red-500"
                >
                    {msg}
                </Transition>
            )}
        />
    )
}

const FormManagement = () => {
    return (
        <Formik.Formik
            initialValues={{
                name: '',
                email: '',
                subject: '',
                message: '',
            }}
            validationSchema={contactSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                    const res = await fetch('/api/form', {
                        method: 'POST',
                        body: JSON.stringify(values),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
                    if (res.status !== 200) {
                        const body = await res.json()
                        notify({
                            title: 'Une erreur est survenue',
                            content: body.message,
                            variant: 'error',
                        })
                        return
                    }
                } catch (e: any) {
                    notify({
                        title: 'Une erreur est survenue',
                        content: (e as Error).message,
                        variant: 'error',
                    })
                    return
                }
                setSubmitting(false)
                resetForm()
                notify({
                    title: 'Message envoyé',
                    content: "C'est bon !",
                    variant: 'success',
                })
            }}
        >
            {({ isSubmitting, isValid }) => (
                <Formik.Form className="grid grid-cols-1 gap-y-6">
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Prénom et Nom
                        </label>
                        <Formik.Field
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            placeholder="Prénom et nom (50 caractères max)"
                        />
                        <Error name="name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <Formik.Field
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            placeholder="Email (50 caractères max)"
                        />
                        <Error name="email" />
                    </div>
                    <div>
                        <label htmlFor="subject" className="sr-only">
                            Objet
                        </label>
                        <Formik.Field
                            id="subject"
                            name="subject"
                            type="text"
                            className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            placeholder="Objet"
                        />
                        <Error name="subject" />
                    </div>
                    <div>
                        <label htmlFor="message" className="sr-only">
                            Message
                        </label>
                        <Formik.Field
                            component="textarea"
                            id="message"
                            name="message"
                            rows={10}
                            className="block min-h-[10rem] w-full rounded-md border border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            placeholder="Message (1500 caractères max)"
                        />
                        <Error name="message" />
                    </div>
                    <div>
                        <Button
                            type="submit"
                            disabled={!isValid || isSubmitting}
                            loading={isSubmitting}
                        >
                            Envoyer
                        </Button>
                    </div>
                </Formik.Form>
            )}
        </Formik.Formik>
    )
}

const Form = () => {
    const { form } = contactContent
    return (
        <div id="form" className="custom-container px-4 py-24">
            <h2 className="mb-6 text-5xl font-bold uppercase text-gray-800">
                {form.title}
            </h2>
            <p className="max-w-lg text-base font-medium text-gray-500">
                {form.description}
            </p>
            <div className="mt-12 max-w-2xl">
                <FormManagement />
            </div>
        </div>
    )
}

export default Form
