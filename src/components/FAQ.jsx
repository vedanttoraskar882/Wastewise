import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQS = [
  {
    q: 'What is WasteWise?',
    a: 'WasteWise is an AI-powered production-planning platform for fresh-food businesses. It is designed to help operators decide how much of each product to prepare using demand, waste risk, shelf life and other relevant factors.',
  },
  {
    q: 'How is WasteWise different from normal forecasting software?',
    a: 'Traditional forecasting tools estimate future demand. WasteWise is designed to go further by converting expected demand into a waste-aware recommended production quantity — answering the question: what should I actually produce, not just what might sell.',
  },
  {
    q: 'Who is WasteWise designed for?',
    a: 'WasteWise initially targets fresh-food SMEs including cafés, bakeries, gelato shops, dessert businesses, sandwich shops, cloud kitchens and small QSRs. The business model can later expand to multi-site operators and larger food-service environments.',
  },
  {
    q: 'What data can WasteWise use?',
    a: 'WasteWise is designed around product information, sales history, waste data and contextual factors such as weather, holidays, events and seasonality.',
  },
  {
    q: 'Do I need to replace my POS system?',
    a: 'No. The initial product model is designed to allow businesses to begin with CSV sales information and manual waste logging. POS integrations are intended as a later-stage expansion.',
  },
  {
    q: 'Does WasteWise consider shelf life?',
    a: 'Yes. Shelf life is important because very short-life products require different production decisions from products that remain sellable for longer. A product with a one-day shelf life is treated very differently from one lasting several days.',
  },
  {
    q: 'Does WasteWise consider weather?',
    a: 'Yes. Weather can materially affect demand for products such as gelato, cold drinks, salads, hot pastries and other seasonal food products. Temperature and rainfall can both influence production recommendations.',
  },
  {
    q: 'How does WasteWise improve over time?',
    a: 'The system is designed to compare forecast demand, actual sales and recorded waste. This feedback loop can improve future production recommendations — making the system more accurate the more it is used.',
  },
  {
    q: 'Can WasteWise support multiple locations?',
    a: 'The business plan includes multi-site intelligence so growing operators can compare branch performance and identify locations producing unusually high levels of waste.',
  },
  {
    q: 'Will operators understand why WasteWise made a recommendation?',
    a: 'Yes. WasteWise is designed around explainable recommendations. Guidance can include simple reasons based on weekday patterns, weather, recent demand and recent waste — in plain language a food operator can act on immediately.',
  },
  {
    q: 'How much does WasteWise cost?',
    a: 'The Year 1 pricing model is: Starter at £79 per user/month, Professional at £149 per user/month, and Growth at £349 per account/month. There is also a modelled onboarding charge of £9 per user/month in Year 1.',
  },
  {
    q: 'Does WasteWise require expensive hardware?',
    a: 'No. WasteWise is planned as a cloud-hosted SaaS platform and the early onboarding model is designed around digital sales information and waste records rather than dedicated waste-measurement hardware.',
  },
  {
    q: 'How is business data intended to be protected?',
    a: 'The planned full platform architecture includes UK/EU-region cloud hosting, encryption in transit and at rest, role-based access and UK GDPR-oriented data handling. Note: these capabilities relate to the planned production platform, not this frontend prototype.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 reveal">
          <span className="badge-forest inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-4xl font-extrabold text-[#1a3a2a] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#4a5568] text-lg">
            Everything you need to know about WasteWise.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 reveal">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#2d5a3d]/30 transition-colors"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 bg-white hover:bg-[#f9f5ee] transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="text-[#1a3a2a] font-semibold text-sm">{faq.q}</span>
                <span className="shrink-0 text-[#2d5a3d]">
                  {openIndex === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>
              <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-[#4a5568] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
