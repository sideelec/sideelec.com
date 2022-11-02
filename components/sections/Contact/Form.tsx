import Formik from '~/components/Formik'
import Button from '~/components/Button'
import { contactSchema } from '~/lib/validation'
import { Transition } from '@headlessui/react'
import contactContent from '~/content/contact.json'
import React from 'react'
import { notify } from '~/lib/utils'

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
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Prénom et Nom
                        </label>
                        <Formik.Field
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            className="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            placeholder="5 à 50 caractères"
                        />
                        <Error name="name" />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <Formik.Field
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            placeholder="exemple@email.com"
                        />
                        <Error name="email" />
                    </div>
                    <div>
                        <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Objet
                        </label>
                        <Formik.Field
                            id="subject"
                            name="subject"
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            placeholder="5 à 50 caractères"
                        />
                        <Error name="subject" />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Message
                        </label>
                        <Formik.Field
                            component="textarea"
                            id="message"
                            name="message"
                            rows={10}
                            className="mt-1 block min-h-[10rem] w-full rounded-md border border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            placeholder="20 à 1500 caractères"
                        />
                        <Error name="message" />
                    </div>
                    <div className="flex justify-end">
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

export default function Form() {
    const { form } = contactContent
    return (
        <div className="bg-gray-50 py-24">
            <div className="custom-container px-4">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                {form.title}
                            </h3>
                            <p className="mx-auto mt-5 max-w-prose text-xl text-gray-700">
                                {form.description}
                            </p>
                            <p className="mt-8 text-base text-gray-600">
                                {form.notice}
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-8 md:col-span-2 md:mt-0">
                        <FormManagement />
                    </div>
                </div>
            </div>
        </div>
    )
}
