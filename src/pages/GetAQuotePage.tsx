import React from 'react';
import { GetQuoteForm } from '../components/GetQuoteForm';

export function GetAQuotePage() {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#001F42] mb-4">Request a Project Quote</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Fill out the form below with your project details, and our team will contact you with a comprehensive estimate.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <GetQuoteForm />
        </div>
      </div>
    </div>
  );
}

export default GetAQuotePage;
