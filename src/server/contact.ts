import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

export type ContactFormData = z.infer<typeof contactSchema>

export const sendContactEmail = createServerFn({ method: 'POST' })
  .inputValidator((data: ContactFormData) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const { name, email, subject, message } = data

    // Check if Resend API key is configured
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      // Development mode - log the message
      console.log('Contact form submission (dev mode):', { name, email, subject, message })
      return {
        success: true as const,
        message: 'Message received (development mode)',
        messageId: 'dev-' + Date.now()
      }
    }

    // Production mode - send via Resend
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(apiKey)

      const { data: emailData, error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['sekiboh@gmail.com'],
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br />')}</p>
        `
      })

      if (error) {
        console.error('Resend error:', error)
        throw new Error('Failed to send email')
      }

      return {
        success: true as const,
        message: 'Email sent successfully',
        messageId: emailData?.id
      }
    } catch (error) {
      console.error('Email send error:', error)
      throw new Error('Failed to send message. Please try again later.')
    }
  })
