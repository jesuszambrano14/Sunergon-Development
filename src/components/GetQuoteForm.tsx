import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { CheckCircle2, Send } from 'lucide-react';
import { FormField, inputStyles, checkboxGroupStyles, checkboxItemStyles } from './ui/form-field';
import { CustomSelect } from './ui/custom-select';
import '../styles/select-fix.css';

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

const initialFormData: QuoteFormData = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  projectLocation: '',
  projectType: 'Commercial',
  servicesNeeded: [],
  projectTimeline: 'As soon as possible',
  projectBudget: '',
  message: '',
};

const projectTypeOptions = ['Commercial', 'Industrial', 'Residential', 'Public/Government', 'Other'];
const serviceOptions = ['Grading & Earthwork', 'Utility Installation', 'Paving Solutions', 'Structural Concrete', 'Demolition', 'Other'];
const timelineOptions = ['As soon as possible', 'Within 1-3 months', 'Within 3-6 months', '6+ months', 'Flexible'];

export function GetQuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({}); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof QuoteFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => {
      const current = prev.servicesNeeded;
      if (current.includes(service)) {
        return { ...prev, servicesNeeded: current.filter(s => s !== service) };
      }
      return { ...prev, servicesNeeded: [...current, service] };
    });
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.projectLocation.trim()) newErrors.projectLocation = 'Location is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  return (
    <div className="bg-white">
      {submitSuccess ? (
        <div className="p-12 text-center space-y-4 rounded-xl">
          <div className="mx-auto w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-2xl font-bold text-[#001F42]">Quote Request Sent!</h3>
          <p className="text-gray-600 max-w-sm mx-auto">
            Thank you for reaching out. Our estimating team will review your details and contact you within 24-48 hours.
          </p>
          <Button 
            onClick={() => setSubmitSuccess(false)}
            className="mx-auto h-10 bg-[#F37021] hover:bg-[#F37021]/90 text-white shadow-lg shadow-[#F37021]/20 hover:shadow-xl hover:shadow-[#F37021]/30 transition-all gap-2 text-sm"
          >
            Send Another Request
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-20">
            {/* Left Column - Contact Information */}
            <div className="w-full md:w-[46%] flex flex-col space-y-6">
              <h3 className="text-lg font-bold text-[#002B5B] border-b border-gray-100 pb-3 mb-5">Contact Information</h3>
              
              <div className="max-w-[380px] mb-4">
                <FormField
                  label="Full Name"
                  htmlFor="fullName"
                  required
                  error={errors.fullName}
                >
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={inputStyles}
                    placeholder="John Doe"
                    required
                  />
                </FormField>
              </div>

              <div className="max-w-[380px] mb-4">
                <FormField
                  label="Company Name (optional)"
                  htmlFor="companyName"
                >
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className={inputStyles}
                    placeholder="Company Ltd."
                  />
                </FormField>
              </div>

              <div className="max-w-[380px] mb-4">
                <FormField
                  label="Email Address"
                  htmlFor="email"
                  required
                  error={errors.email}
                >
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={inputStyles}
                    placeholder="john@example.com"
                    required
                  />
                </FormField>
              </div>

              <div className="max-w-[380px] mb-4">
                <FormField
                  label="Phone Number"
                  htmlFor="phone"
                  required
                  error={errors.phone}
                >
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={inputStyles}
                    placeholder="(123) 456-7890"
                    required
                  />
                </FormField>
              </div>
            </div>

            {/* Vertical Divider (Desktop) */}
            <div className="hidden md:block w-px self-stretch bg-gray-100 mt-16"></div>

            {/* Right Column - Project Details */}
            <div className="w-full md:w-[46%] flex flex-col space-y-6">
              <h3 className="text-lg font-bold text-[#002B5B] border-b border-gray-100 pb-3 mb-5">Project Details</h3>
              
              <div className="max-w-[380px] mb-4">
                <FormField
                  label="Project Location"
                  htmlFor="projectLocation"
                  required
                  error={errors.projectLocation}
                >
                  <Input
                    id="projectLocation"
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={handleInputChange}
                    className={inputStyles}
                    placeholder="City, State"
                    required
                  />
                </FormField>
              </div>

              <div className="max-w-[380px] mb-4">
                <FormField
                  label="Project Type"
                  htmlFor="projectType"
                  required
                >
                  <CustomSelect
                    id="projectType"
                    options={projectTypeOptions.length > 0 ? projectTypeOptions : ['Commercial', 'Industrial', 'Residential', 'Public/Government', 'Other']}
                    value={formData.projectType}
                    onChange={(value: string) => {
                      const e = { target: { name: 'projectType', value } };
                      handleInputChange(e as React.ChangeEvent<HTMLSelectElement>);
                    }}
                    placeholder="Select project type"
                  />
                </FormField>
              </div>

              <div className="max-w-[380px] mb-4">
                <FormField
                  label="Services Needed"
                >
                  <div className={checkboxGroupStyles}>
                    {serviceOptions.map(service => (
                      <label 
                        key={service} 
                        className={checkboxItemStyles}
                        htmlFor={`service-${service}`}
                      >
                        <input
                          type="checkbox"
                          id={`service-${service}`}
                          checked={formData.servicesNeeded.includes(service)}
                          onChange={() => handleCheckboxChange(service)}
                          className="h-4 w-4 rounded border-gray-300 text-[#F37021] focus:ring-[#F37021] focus:ring-opacity-30"
                        />
                        <span className="cursor-pointer text-sm text-gray-600">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </FormField>
              </div>

              <div className="max-w-[380px] mb-4">
                <FormField
                  label="Project Timeline"
                  htmlFor="projectTimeline"
                >
                  <CustomSelect
                    id="projectTimeline"
                    options={timelineOptions.length > 0 ? timelineOptions : ['As soon as possible', 'Within 1-3 months', 'Within 3-6 months', '6+ months', 'Flexible']}
                    value={formData.projectTimeline}
                    onChange={(value: string) => {
                      const e = { target: { name: 'projectTimeline', value } };
                      handleInputChange(e as React.ChangeEvent<HTMLSelectElement>);
                    }}
                    placeholder="Select timeline"
                  />
                </FormField>
              </div>

              <div className="max-w-[380px] mb-4">
                <FormField
                  label="Approximate Budget (optional)"
                  htmlFor="projectBudget"
                >
                  <Input
                    id="projectBudget"
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleInputChange}
                    className={inputStyles}
                    placeholder="$ 0.00"
                  />
                </FormField>
              </div>
            </div>
          </div>


          {/* Submit Button */}
          <div className="mt-12 pt-6 pb-2 border-t border-gray-100 bg-gray-50/50 -mx-8 md:-mx-10 px-8 md:px-10 rounded-b-xl">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-10 bg-[#F37021] hover:bg-[#F37021]/90 text-white shadow-lg shadow-[#F37021]/20 hover:shadow-xl hover:shadow-[#F37021]/30 transition-all gap-2 text-sm"
            >
              {isSubmitting ? 'Sending Request...' : (
                <>
                  <Send className="w-5 h-5" />
                  Request a Quote
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
