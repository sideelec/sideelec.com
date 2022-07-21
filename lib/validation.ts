import { InferType, object, string } from 'yup'

export const contactSchema = object({
    name: string()
        .min(5, 'Trop court')
        .max(50, 'Trop long')
        .required('Obligatoire'),
    subject: string()
        .min(5, 'Trop court')
        .max(50, 'Trop long')
        .required('Obligatoire'),
    message: string()
        .min(20, 'Trop court')
        .max(1500, 'Trop long')
        .required('Obligatoire'),
    email: string().email('Email invalide').required('Obligatoire'),
})

export type ContactSchema = InferType<typeof contactSchema>
