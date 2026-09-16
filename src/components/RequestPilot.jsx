import { useState } from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'

const JOURNEY_STEPS = [
  'Free Waste-Cost Assessment',
  'Data Review',
  'Two-Week Forecast Simulation',
  'Pilot Proposal',
  'Paid Onboarding',
  'Monthly Performance Review',
  'Potential Annual Subscription',
]

const INITIAL_FORM = {
  fullName: '',
  phoneNumber: '',
  emailAddress: '',
  organisationName: '',
}

export default function RequestPilot() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validateField = (name, value) => {
    const trimmed = value.trim()
    switch (name) {
      case 'fullName':
        if (!trimmed) return 'Please enter your full name.'
        if (trimmed.length < 2) return 'Full name must be at least 2 characters.'
        if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
          return 'Please enter a valid full name containing only letters and spaces.'
        }
        if (trimmed.replace(/\s+/g, '').length < 2) {
          return 'Full name must contain at least 2 letters.'
        }
        return ''

      case 'phoneNumber':
        if (!trimmed) return 'Please enter your phone number.'
        if (/[a-zA-Z]/.test(trimmed)) {
          return 'Please enter a valid phone number containing only digits.'
        }
        if (!/^[+]?[\d\s\-()]+$/.test(trimmed)) {
          return 'Please enter a valid phone number containing only digits.'
        }
        {
          const digits = trimmed.replace(/\D/g, '')
          if (digits.length < 7 || digits.length > 15) {
            return 'Please enter a valid phone number between 7 and 15 digits.'
          }
        }
        return ''

      case 'emailAddress':
        if (!trimmed) return 'Please enter your email address.'
        {
          const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/
          if (!emailRegex.test(trimmed)) {
            return 'Please enter a valid email address.'
          }
        }
        return ''

      case 'organisationName':
        if (!trimmed) return 'Please enter your organisation name.'
        if (trimmed.length < 2) return 'Organisation name must be at least 2 characters.'
        if (/^\d+$/.test(trimmed)) {
          return 'Please enter a valid organisation name.'
        }
        if (!/[a-zA-Z]/.test(trimmed)) {
          return 'Please enter a valid organisation name.'
        }
        if (!/^[a-zA-Z0-9\s&.,'\-()]+$/.test(trimmed)) {
          return 'Please enter a valid organisation name.'
        }
        return ''

      default:
        return ''
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // If field is already touched or has an error, revalidate on change
    if (touched[name] || errors[name]) {
      const err = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: err }))
    } else if (name === 'phoneNumber' && /[a-zA-Z]/.test(value)) {
      // Flag alphabet characters immediately while typing
      setTouched((prev) => ({ ...prev, phoneNumber: true }))
      setErrors((prev) => ({
        ...prev,
        phoneNumber: 'Please enter a valid phone number containing only digits.',
      }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const err = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: err }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {
      fullName: validateField('fullName', formData.fullName),
      phoneNumber: validateField('phoneNumber', formData.phoneNumber),
      emailAddress: validateField('emailAddress', formData.emailAddress),
      organisationName: validateField('organisationName', formData.organisationName),
    }

    setTouched({
      fullName: true,
      phoneNumber: true,
      emailAddress: true,
      organisationName: true,
    })
    setErrors(newErrors)

    const hasError = Object.values(newErrors).some((msg) => msg !== '')
    if (hasError) {
      return
    }

    try {
      // Read existing submissions safely — NEVER overwrite
      let existing = []
      try {
        const raw = localStorage.getItem('wastewisePilotSubmissions')
        const parsed = JSON.parse(raw || '[]')
        existing = Array.isArray(parsed) ? parsed : []
      } catch {
        existing = []
      }

      const newSubmission = {
        id: Date.now(),
        fullName: formData.fullName.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        emailAddress: formData.emailAddress.trim(),
        organisationName: formData.organisationName.trim(),
        submissionDateTime: new Date().toISOString(),
      }

      const updated = [...existing, newSubmission]
      localStorage.setItem('wastewisePilotSubmissions', JSON.stringify(updated))

      setFormData(INITIAL_FORM)
      setTouched({})
      setErrors({})
      setSubmitted(true)
    } catch {
      // Graceful error fallback
    }
  }

  return (
    <section id="request-pilot" className="py-20 lg:py-28 bg-[#1a3a2a] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Customer journey */}
        <div className="mb-14 reveal">
          <p className="text-center text-white/50 text-xs font-semibold uppercase tracking-widest mb-5">
            The WasteWise Commercial Journey
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {JOURNEY_STEPS.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="bg-white/10 border border-white/20 text-white/70 text-xs font-medium px-3 py-1.5 rounded-full">
                  {step}
                </span>
                {i < JOURNEY_STEPS.length - 1 && (
                  <ArrowRight size={12} className="text-white/30 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Value copy */}
          <div className="reveal">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 bg-white/10 text-white/70 border border-white/20">
              Request a Pilot
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
              See How WasteWise Could Improve Your Production Decisions.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Tell us about your fresh-food business and register your interest in a WasteWise pilot.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: 'Designed for your type of business',
                  body: 'Cafés, bakeries, gelato shops, dessert businesses, cloud kitchens and other fresh-food operators.',
                },
                {
                  title: 'Explore what WasteWise could do for you',
                  body: 'See how sales, waste, shelf life, weather and other demand factors could influence tomorrow\'s production.',
                },
                {
                  title: 'No account or payment required',
                  body: 'Submit your interest — no commitment needed to register for a pilot conversation.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="flex items-start gap-4">
                  <CheckCircle size={18} className="text-[#c9a84c] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">{title}</p>
                    <p className="text-white/60 text-sm mt-0.5">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal reveal-delay-2">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#f0faf5] border-2 border-[#2d5a3d] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-[#2d5a3d]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a3a2a] mb-3">
                    Thank you. Your pilot request has been submitted successfully.
                  </h3>
                  <p className="text-[#4a5568] text-sm leading-relaxed">
                    We appreciate your interest in WasteWise. We will be in touch to discuss how we can help your business.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-[#2d5a3d] hover:underline font-medium cursor-pointer"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="text-xl font-bold text-[#1a3a2a] mb-6">Request a Pilot</h3>

                  <div className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1a3a2a] mb-1.5" htmlFor="fullName">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. Jane Smith"
                        className={`w-full px-4 py-3 rounded-xl border text-[#1a3a2a] text-sm placeholder-gray-400 focus:outline-none transition-all ${
                          touched.fullName && errors.fullName
                            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 bg-red-50/20'
                            : 'border-gray-200 focus:border-[#2d5a3d] focus:ring-2 focus:ring-[#2d5a3d]/10'
                        }`}
                      />
                      {touched.fullName && errors.fullName && (
                        <p className="mt-1.5 text-xs text-red-600 font-medium">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1a3a2a] mb-1.5" htmlFor="phoneNumber">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. +44 7700 900123"
                        className={`w-full px-4 py-3 rounded-xl border text-[#1a3a2a] text-sm placeholder-gray-400 focus:outline-none transition-all ${
                          touched.phoneNumber && errors.phoneNumber
                            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 bg-red-50/20'
                            : 'border-gray-200 focus:border-[#2d5a3d] focus:ring-2 focus:ring-[#2d5a3d]/10'
                        }`}
                      />
                      {touched.phoneNumber && errors.phoneNumber && (
                        <p className="mt-1.5 text-xs text-red-600 font-medium">
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1a3a2a] mb-1.5" htmlFor="emailAddress">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.emailAddress}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. jane@yourbakery.co.uk"
                        className={`w-full px-4 py-3 rounded-xl border text-[#1a3a2a] text-sm placeholder-gray-400 focus:outline-none transition-all ${
                          touched.emailAddress && errors.emailAddress
                            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 bg-red-50/20'
                            : 'border-gray-200 focus:border-[#2d5a3d] focus:ring-2 focus:ring-[#2d5a3d]/10'
                        }`}
                      />
                      {touched.emailAddress && errors.emailAddress && (
                        <p className="mt-1.5 text-xs text-red-600 font-medium">
                          {errors.emailAddress}
                        </p>
                      )}
                    </div>

                    {/* Organisation */}
                    <div>
                      <label className="block text-sm font-semibold text-[#1a3a2a] mb-1.5" htmlFor="organisationName">
                        Organisation Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="organisationName"
                        name="organisationName"
                        type="text"
                        autoComplete="organization"
                        required
                        value={formData.organisationName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. Smith Bakery"
                        className={`w-full px-4 py-3 rounded-xl border text-[#1a3a2a] text-sm placeholder-gray-400 focus:outline-none transition-all ${
                          touched.organisationName && errors.organisationName
                            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 bg-red-50/20'
                            : 'border-gray-200 focus:border-[#2d5a3d] focus:ring-2 focus:ring-[#2d5a3d]/10'
                        }`}
                      />
                      {touched.organisationName && errors.organisationName && (
                        <p className="mt-1.5 text-xs text-red-600 font-medium">
                          {errors.organisationName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="mt-6 w-full bg-[#2d5a3d] hover:bg-[#1a3a2a] text-white font-semibold py-3.5 rounded-xl transition-all duration-200 text-sm shadow-sm hover:shadow-md cursor-pointer"
                  >
                    Request a Pilot
                  </button>

                  {/* Privacy note */}
                  <p className="text-center text-xs text-[#718096] mt-4">
                    For this frontend prototype, submitted details are stored locally in this browser.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
