import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { CheckCircle2 } from 'lucide-react';

interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectLocation: string;
  projectType: string;
  servicesNeeded: string[];
  projectTimeline: string;
  projectBudget: string;
  message: string;
}

interface QuoteFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  projectLocation?: string;
  message?: string;
}

export function GetQuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectLocation: '',
    projectType: 'Commercial',
    servicesNeeded: [],
    projectTimeline: 'As soon as possible',
    projectBudget: '',
    message: ''
  });

  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [otherService, setOtherService] = useState('');

  // Service options
  const serviceOptions = [
    'Grading & Earthwork',
    'Utility Installation',
    'Paving Solutions',
    'Structural Concrete',
    'Demolition',
    'Other'
  ];

  // Timeline options
  const timelineOptions = [
    'As soon as possible',
    '1–3 months',
    '3–6 months',
    '6+ months'
  ];

  // Project type options
  const projectTypeOptions = [
    'Commercial',
    'Industrial',
    'Municipal / Public',
    'Residential / Private'
  ];

  const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Basic validation - at least 10 digits
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 10;
  };

  const validateForm = (): boolean => {
    const newErrors: QuoteFormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.projectLocation.trim()) {
      newErrors.projectLocation = 'Project location is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for the field being typed in
    if (errors[name as keyof QuoteFormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const handleCheckboxChange = (service: string) => {
    const updatedServices = [...formData.servicesNeeded];
    
    if (updatedServices.includes(service)) {
      // Remove the service if already selected
      const index = updatedServices.indexOf(service);
      updatedServices.splice(index, 1);
    } else {
      // Add the service
      updatedServices.push(service);
    }

    setFormData({
      ...formData,
      servicesNeeded: updatedServices
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // This is just a placeholder for the file upload functionality
    console.log('File selected:', e.target.files);
    // In a real implementation, you would handle the file upload here
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Include other service in services needed if specified
      let finalFormData = {...formData};
      
      if (otherService && formData.servicesNeeded.includes('Other')) {
        finalFormData.servicesNeeded = formData.servicesNeeded.filter(s => s !== 'Other');
        finalFormData.servicesNeeded.push(`Other: ${otherService}`);
      }

      // For now, just log the form data to console
      console.log('Quote form submitted:', finalFormData);

      // Simulate a submission delay
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);

        // Reset form after successful submission
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormData({
            fullName: '',
            companyName: '',
            email: '',
            phone: '',
            projectLocation: '',
            projectType: 'Commercial',
            servicesNeeded: [],
            projectTimeline: 'As soon as possible',
            projectBudget: '',
            message: ''
          });
          setOtherService('');
        }, 5000); // Keep success message visible for 5 seconds
      }, 1000);
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden">
      {submitSuccess ? (
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-[#001F42] mb-2">Thank You!</h3>
          <p className="text-gray-700 mb-6">
            Our team will review your project details and contact you shortly.
          </p>
          <div className="animate-pulse">
            <p className="text-sm text-gray-500">This window will close automatically</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {/* Left Column - Contact Information */}
            <div className="space-y-6 md:border-r border-gray-100 md:pr-6">
              <h3 className="text-lg font-bold text-[#001F42] mb-4">Contact Information</h3>
              
              <div className="space-y-2">
                <Label htmlFor="fullName" className="font-medium text-[#001F42]">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`border ${errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-[#F37021] focus:ring-[#F37021]`}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName" className="font-medium text-[#001F42]">
                  Company Name <span className="text-gray-500 text-xs">(optional)</span>
                </Label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="border-gray-200 focus:border-[#F37021] focus:ring-[#F37021]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium text-[#001F42]">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-[#F37021] focus:ring-[#F37021]`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="font-medium text-[#001F42]">
                  Phone <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-[#F37021] focus:ring-[#F37021]`}
                  placeholder="(123) 456-7890"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Right Column - Project Details */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-[#001F42] mb-4">Project Details</h3>
              
              <div className="space-y-2">
                <Label htmlFor="projectLocation" className="font-medium text-[#001F42]">
                  Project Location <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="projectLocation"
                  name="projectLocation"
                  value={formData.projectLocation}
                  onChange={handleInputChange}
                  className={`border ${errors.projectLocation ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-[#F37021] focus:ring-[#F37021]`}
                  placeholder="City, State"
                />
                {errors.projectLocation && <p className="text-red-500 text-xs mt-1">{errors.projectLocation}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType" className="font-medium text-[#001F42]">
                  Project Type <span className="text-red-500">*</span>
                </Label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-200 focus:border-[#F37021] focus:ring-[#F37021] h-10"
                >
                  {projectTypeOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label className="font-medium text-[#001F42] block mb-2">
                  Services Needed
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceOptions.map(service => (
                    <div key={service} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`service-${service}`}
                        checked={formData.servicesNeeded.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                        className="rounded border-gray-300 text-[#F37021] focus:ring-[#F37021] mr-2 h-4 w-4"
                      />
                      <Label htmlFor={`service-${service}`} className="cursor-pointer">
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
                {formData.servicesNeeded.includes('Other') && (
                  <Input
                    placeholder="Please specify"
                    value={otherService}
                    onChange={(e) => setOtherService(e.target.value)}
                    className="mt-2 border-gray-200 focus:border-[#F37021] focus:ring-[#F37021]"
                  />
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectTimeline" className="font-medium text-[#001F42]">
                  Project Timeline
                </Label>
                <select
                  id="projectTimeline"
                  name="projectTimeline"
                  value={formData.projectTimeline}
                  onChange={handleInputChange}
                  className="w-full rounded-md border-gray-200 focus:border-[#F37021] focus:ring-[#F37021] h-10"
                >
                  {timelineOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectBudget" className="font-medium text-[#001F42]">
                  Approximate Budget <span className="text-gray-500 text-xs">(optional)</span>
                </Label>
                <Input
                  id="projectBudget"
                  name="projectBudget"
                  value={formData.projectBudget}
                  onChange={handleInputChange}
                  className="border-gray-200 focus:border-[#F37021] focus:ring-[#F37021]"
                  placeholder="$"
                />
              </div>
            </div>
          </div>

          {/* Full Width - Message */}
          <div className="mt-6 space-y-2">
            <Label htmlFor="message" className="font-medium text-[#001F42]">
              Project Description <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className={`w-full border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'} focus:border-[#F37021] focus:ring-[#F37021] resize-none`}
              placeholder="Tell us about your project, site conditions, and any plans/specs."
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          {/* File Upload */}
          <div className="mt-6">
            <Label className="font-medium text-[#001F42] block mb-2">
              Upload Plans or Drawings <span className="text-gray-500 text-xs">(optional)</span>
            </Label>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                onChange={handleFileChange}
                multiple
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 mb-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-gray-500">Drag and drop files here or <span className="text-[#F37021]">browse</span></p>
                  <p className="text-xs text-gray-400 mt-1">PDF, DWG, or image files (max 20MB)</p>
                </div>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#F37021] hover:bg-[#D85A0F] text-white py-3 px-6 rounded-lg transition-colors duration-200 font-medium w-full shadow-md hover:shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                  Processing...
                </>
              ) : (
                'Request a Quote'
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
