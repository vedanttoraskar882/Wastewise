import emailjs from '@emailjs/browser'

// Target recipient email
export const TARGET_EMAIL = 'Biralprajapati9@gmail.com'

// EmailJS credentials from environment variables or direct fallback
export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
}

/**
 * Sends pilot request submission data directly to Biralprajapati9@gmail.com via EmailJS.
 *
 * @param {Object} submission
 * @param {string} submission.fullName
 * @param {string} submission.phoneNumber
 * @param {string} submission.emailAddress
 * @param {string} submission.organisationName
 * @param {string} submission.submissionDateTime
 */
export async function sendPilotRequestEmail(submission) {
  const { fullName, phoneNumber, emailAddress, organisationName, submissionDateTime } = submission

  const formattedDate = new Date(submissionDateTime).toLocaleString('en-GB', {
    dateStyle: 'full',
    timeStyle: 'short',
  })

  const templateParams = {
    to_email: TARGET_EMAIL,
    to_name: 'Biral Prajapati',
    from_name: fullName,
    full_name: fullName,
    phone_number: phoneNumber,
    email_address: emailAddress,
    reply_to: emailAddress,
    organisation_name: organisationName,
    submission_date: formattedDate,
    message: `New Pilot Request Received:
----------------------------------
Full Name: ${fullName}
Phone Number: ${phoneNumber}
Email Address: ${emailAddress}
Organisation Name: ${organisationName}
Submission Time: ${formattedDate}
----------------------------------`,
  }

  // Attempt delivery if EmailJS credentials are provided
  if (EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey) {
    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      )
      return { success: true, response }
    } catch (error) {
      console.warn('EmailJS delivery error:', error)
      return { success: false, error }
    }
  } else {
    // Log parameters for debugging and testing
    console.info(
      `EmailJS configured for destination: ${TARGET_EMAIL}. (Waiting for Service ID, Template ID, and Public Key in .env)`,
      templateParams
    )
    return { success: false, pendingConfig: true }
  }
}
