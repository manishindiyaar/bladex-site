import { Mail } from 'lucide-react'

export default function ContactForm() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Contact Information */}
        <div className="space-y-8 md:order-1">
          <div className="space-y-4">
            <div className="inline-block p-3 bg-[#1A1A1A] rounded-lg">
              <Mail className="w-6 h-6 text-[#4F90F0]" />
            </div>
            <h1 className="text-5xl font-semibold tracking-tight">Contact us</h1>
            <p className="text-lg text-gray-400 max-w-md">
              We are always looking for ways to streamline your work and creating something robust.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-gray-400 mb-1">Email</h3>
              <p className="text-gray-300">manishindiyaar@gmail.com</p>
            </div>

            <div>
              <h3 className="text-gray-400 mb-1">Phone</h3>
              <p className="text-gray-300">+919801441675</p>
            </div>

            <div>
              <h3 className="text-gray-400 mb-1">Support</h3>
              <p className="text-gray-300">info@bladexlab.com</p>
            </div>
          </div>
        </div>

        {/* Right Column - Google Form */}
        <div className="bg-[#111111] rounded-2xl p-1 h-[851px] w-full md:order-2">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdb7rH5eXIxPPJQvAEc-ZLDD-yncMVBK0EVmg1MQ83HxEiG7A/viewform?embedded=true"
            className="w-full h-full rounded-xl"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  )
}

