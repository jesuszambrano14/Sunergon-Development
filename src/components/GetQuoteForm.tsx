import React, { useState } from 'react';
import { Button, Checkbox, Label, Select, TextInput, Textarea, HelperText } from 'flowbite-react';
import { CheckCircle2, Send } from 'lucide-react';
import { useQuoteModal } from '../contexts/QuoteModalContext';

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
  const [otherService, setOtherService] = useState('');

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
    if (!formData.message.trim()) newErrors.message = 'Project description is required';

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
    <div className="bg-white dark:bg-gray-800">
      {submitSuccess ? (
        <div className="p-12 text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-2xl font-bold text-[#001F42]">Quote Request Sent!</h3>
          <p className="text-gray-600 max-w-sm mx-auto">
            Thank you for reaching out. Our estimating team will review your details and contact you within 24-48 hours.
          </p>
          <Button 
            onClick={() => setSubmitSuccess(false)}
            className="mx-auto bg-[#001F42] hover:bg-[#002B5B] border-none"
          >
            Send Another Request
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-20">
            {/* Left Column - Contact Information */}
            <div className="w-full md:w-[46%] flex flex-col space-y-8">
              <h3 className="text-lg font-bold text-[#001F42] dark:text-white border-b border-gray-100 pb-3">Contact Information</h3>
              
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700">Full Name *</Label>
                <div className="max-w-[380px]">
                  <TextInput
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    color={errors.fullName ? 'failure' : 'gray'}
                    placeholder="John Doe"
                    required
                  />
                  {errors.fullName && <HelperText color="failure">{errors.fullName}</HelperText>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-sm font-semibold text-gray-700">Company Name (optional)</Label>
                <div className="max-w-[380px]">
                  <TextInput
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Company Ltd."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address *</Label>
                <div className="max-w-[380px]">
                  <TextInput
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    color={errors.email ? 'failure' : 'gray'}
                    placeholder="john@example.com"
                    required
                  />
                  {errors.email && <HelperText color="failure">{errors.email}</HelperText>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number *</Label>
                <div className="max-w-[380px]">
                  <TextInput
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    color={errors.phone ? 'failure' : 'gray'}
                    placeholder="(123) 456-7890"
                    required
                  />
                  {errors.phone && <HelperText color="failure">{errors.phone}</HelperText>}
                </div>
              </div>
            </div>

            {/* Vertical Divider (Desktop) */}
            <div className="hidden md:block w-px self-stretch bg-gray-100 mt-16"></div>

            {/* Right Column - Project Details */}
            <div className="w-full md:w-[46%] flex flex-col space-y-8">
              <h3 className="text-lg font-bold text-[#001F42] dark:text-white border-b border-gray-100 pb-3">Project Details</h3>
              
              <div className="space-y-2">
                <Label htmlFor="projectLocation" className="text-sm font-semibold text-gray-700">Project Location *</Label>
                <div className="max-w-[380px]">
                  <TextInput
                    id="projectLocation"
                    name="projectLocation"
                    value={formData.projectLocation}
                    onChange={handleInputChange}
                    color={errors.projectLocation ? 'failure' : 'gray'}
                    placeholder="City, State"
                    required
                  />
                  {errors.projectLocation && <HelperText color="failure">{errors.projectLocation}</HelperText>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType" className="text-sm font-semibold text-gray-700">Project Type *</Label>
                <div className="max-w-[380px]">
                  <Select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                  >
                    {projectTypeOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-sm font-semibold text-gray-700">Services Needed</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-gray-50 rounded-xl">
                  {serviceOptions.map(service => (
                    <div key={service} className="flex items-center gap-2">
                      <Checkbox
                        id={`service-${service}`}
                        checked={formData.servicesNeeded.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                      />
                      <Label htmlFor={`service-${service}`} className="cursor-pointer text-sm font-medium text-gray-600">
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectTimeline" className="text-sm font-semibold text-gray-700">Project Timeline</Label>
                <div className="max-w-[380px]">
                  <Select
                    id="projectTimeline"
                    name="projectTimeline"
                    value={formData.projectTimeline}
                    onChange={handleInputChange}
                  >
                    {timelineOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectBudget" className="text-sm font-semibold text-gray-700">Approximate Budget (optional)</Label>
                <div className="max-w-[380px]">
                  <TextInput
                    id="projectBudget"
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleInputChange}
                    placeholder="$ 0.00"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Full Width - Message */}
          <div className="mt-12 space-y-3">
            <Label htmlFor="message" className="text-lg font-bold text-[#001F42]">Project Description *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              color={errors.message ? 'failure' : 'gray'}
              className="resize-none rounded-xl"
              placeholder="Tell us more about your project..."
              required
            />
            {errors.message && <HelperText color="failure">{errors.message}</HelperText>}
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#F37021] hover:bg-[#D85A0F] enabled:hover:bg-[#D85A0F] border-none text-white py-3 text-lg font-bold shadow-md transition-all"
            >
              <div className="flex items-center justify-center gap-2">
                {isSubmitting ? 'Sending Request...' : (
                  <>
                    <Send size={18} />
                    <span>Request a Quote</span>
                  </>
                )}
              </div>
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
