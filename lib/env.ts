const domain = process.env.NEXT_PUBLIC_DOMAIN || ''
const url = `https://${domain}`

export const publicEnv = {
    domain,
    url,
}

export const privateEnv = {
    smtp: {
        host: process.env.SMTP_HOST || '',
        port: parseInt(process.env.SMTP_PORT || '587'),
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
    },
}
