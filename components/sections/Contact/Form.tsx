import Formik from '~/components/Formik'
import Button from '~/components/Button'
import { contactSchema } from '~/lib/validation'
import { Transition } from '@headlessui/react'
import toast from 'react-hot-toast'
import clsx from 'clsx'
import contactContent from '~/content/contact.json'
import { XIcon } from '@heroicons/react/solid'
import React from 'react'

const notify = ({
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
                                    <XIcon
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
        <div id="form" className="custom-container py-24">
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
