'use client'

import { SubmissionForm } from '@/components/submission-form'

export default function AddYourListingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Add Your Listing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your real estate development, tourist attraction, or restaurant with visitors to Abeokuta
          </p>
        </div>
        
        <SubmissionForm onClose={() => window.history.back()} isModal={false} />
      </div>
    </div>
  )
}
