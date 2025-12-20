import React, { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for the field being typed in
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // For now, just log the form data to console
      console.log('Form submitted:', formData);
      
      // Simulate a submission delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            message: ''
          });
        }, 3000);
      }, 1000);
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-[#001F42] mb-6">Get in Touch</h3>
      
      {submitSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-5 rounded-lg mb-6">
          <p className="font-medium">Thank you for your message!</p>
          <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <label htmlFor="fullName" className="block text-[#001F42] text-sm font-medium mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:border-[#F37021] focus:ring-1 focus:ring-[#F37021] outline-none transition-colors`}
              placeholder="Your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>
          
          <div className="space-y-1">
            <label htmlFor="email" className="block text-[#001F42] text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:border-[#F37021] focus:ring-1 focus:ring-[#F37021] outline-none transition-colors`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          
          <div className="space-y-1">
            <label htmlFor="phone" className="block text-[#001F42] text-sm font-medium mb-1">
              Phone (optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#F37021] focus:ring-1 focus:ring-[#F37021] outline-none transition-colors"
              placeholder="(123) 456-7890"
            />
          </div>
          
          <div className="space-y-1">
            <label htmlFor="message" className="block text-[#001F42] text-sm font-medium mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200'} focus:border-[#F37021] focus:ring-1 focus:ring-[#F37021] outline-none transition-colors resize-none`}
              placeholder="Tell us about your project needs..."
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#F37021] hover:bg-[#D85A0F] text-white py-3 rounded-lg transition-colors duration-200 font-medium flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <span className="inline-block animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
