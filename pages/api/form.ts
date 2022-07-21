import { NextApiResponse, NextApiRequest } from 'next'
import { createTransport } from 'nodemailer'
import { InferType, object, string } from 'yup'
import { privateEnv as env } from '~/lib/env'

const bodySchema = object({
    name: string().required(),
    subject: string().required(),
    message: string().required(),
    email: string().email().required(),
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed, use POST.')
    }

    try {
        await bodySchema.validate(req.body)
    } catch (err) {
        return res.status(400).json({
            error: err,
        })
    }

    const { host, port, user, pass } = env.smtp
    const transporter = createTransport({
        host,
        port,
        secure: false,
        requireTLS: true,
        auth: {
            user,
            pass,
        },
    })

    const { subject, email, message, name }: InferType<typeof bodySchema> =
        req.body

    transporter.sendMail({
        from: user,
        to: user,
        subject: `Email de ${name} (${email}): ${subject}`,
        text: message,
    })
    return res.status(200).json({
        statusCode: 200,
        message: 'Email envoyé',
    })
}
