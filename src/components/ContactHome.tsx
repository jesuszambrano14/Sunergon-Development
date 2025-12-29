import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { useQuoteModal } from "../contexts/QuoteModalContext";
import SectionBackgroundAccents from "./ui/SectionBackground";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  timeline: string;
  location: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactHome() {
  const { openModal } = useQuoteModal();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    timeline: '',
    location: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
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
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
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
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            service: '',
            timeline: '',
            location: '',
            message: ''
          });
        }, 3000);
      }, 1000);
    }
  };

  return (
    <section 
      className="pb-24 md:pb-28 bg-gray-50 relative overflow-hidden" 
      id="contact-home"
      style={{ paddingTop: '40px' }}
    >
      {/* Background Elements */}
      <SectionBackgroundAccents 
        variant="default" 
        showGrid={true}
        circlePositions={['top-right', 'bottom-left']} 
        density="medium"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-6">
            <span className="text-[#001F42] text-sm font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F42] mb-6 leading-tight">Request a Quote</h2>
          <div className="w-24 h-1 bg-[#F37021] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your project needs and how we can deliver precision, durability, and dependable execution
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F37021] to-[#F37021]/80 flex items-center justify-center shadow-lg shadow-[#F37021]/20">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#002B5B]">Get a Quote</h3>
                  <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-5 rounded-lg mb-6">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-[#002B5B]">First Name *</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className={`h-12 border-gray-200 ${errors.firstName ? 'border-red-400 bg-red-50' : ''} focus:border-[#F37021] focus:ring-[#F37021] shadow-sm`}
                        required
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-[#002B5B]">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className={`h-12 border-gray-200 ${errors.lastName ? 'border-red-400 bg-red-50' : ''} focus:border-[#F37021] focus:ring-[#F37021] shadow-sm`}
                        required
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#002B5B]">Email Address *</Label>
                      <Input 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        placeholder="john@example.com"
                        className={`h-12 border-gray-200 ${errors.email ? 'border-red-400 bg-red-50' : ''} focus:border-[#F37021] focus:ring-[#F37021] shadow-sm`}
                        required
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#002B5B]">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel" 
                        placeholder="(470) 363-1543"
                        className={`h-12 border-gray-200 ${errors.phone ? 'border-red-400 bg-red-50' : ''} focus:border-[#F37021] focus:ring-[#F37021] shadow-sm`}
                        required
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-[#002B5B]">Service Needed</Label>
                      <Select onValueChange={(value: string) => handleSelectChange('service', value)}>
                        <SelectTrigger className="h-12 border-gray-200 focus:border-[#F37021] focus:ring-[#F37021] shadow-sm">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="grading">Grading & Earthwork</SelectItem>
                          <SelectItem value="paving">Paving & Flatwork</SelectItem>
                          <SelectItem value="concrete">Structural Concrete</SelectItem>
                          <SelectItem value="utilities">Utilities & Underground</SelectItem>
                          <SelectItem value="commercial">Commercial Construction</SelectItem>
                          <SelectItem value="public">Public / Municipal Construction</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="text-[#002B5B]">Project Timeline</Label>
                      <Select onValueChange={(value: string) => handleSelectChange('timeline', value)}>
                        <SelectTrigger className="h-12 border-gray-200 focus:border-[#F37021] focus:ring-[#F37021] shadow-sm">
                          <SelectValue placeholder="When do you need to start?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediately</SelectItem>
                          <SelectItem value="1month">Within 1 month</SelectItem>
                          <SelectItem value="3months">Within 3 months</SelectItem>
                          <SelectItem value="6months">Within 6 months</SelectItem>
                          <SelectItem value="planning">Just planning</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-[#002B5B]">Project Location</Label>
                    <Input 
                      id="location" 
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, State"
                      className="h-12 border-gray-200 focus:border-[#F37021] focus:ring-[#F37021] shadow-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#002B5B]">Project Details *</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your project requirements and scope..."
                      rows={5}
                      className={`border-gray-200 ${errors.message ? 'border-red-400 bg-red-50' : ''} focus:border-[#F37021] focus:ring-[#F37021] shadow-sm resize-none`}
                      required
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-[#F37021] hover:bg-[#F37021]/90 text-white shadow-lg shadow-[#F37021]/20 hover:shadow-xl hover:shadow-[#F37021]/30 transition-all gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Request
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Office Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#002B5B] to-[#002B5B]/80 flex items-center justify-center shadow-lg shadow-[#002B5B]/20">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#002B5B]">Office Hours</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="text-[#002B5B] font-medium">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="text-gray-700">Saturday</span>
                  <span className="text-[#002B5B] font-medium">8:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Sunday</span>
                  <span className="text-[#002B5B] font-medium">Closed</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-[#F37021] to-[#F37021]/90 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-xl font-bold text-white mb-4">24/7 Emergency Contact</h3>
              <p className="text-white/90 mb-4 text-sm">
                For urgent construction emergencies or time-sensitive inquiries
              </p>
              <Button 
                variant="outline"
                className="w-full border-2 border-white text-white hover:bg-white hover:text-[#F37021] transition-all"
                onClick={() => window.location.href = 'tel:+14703631543'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call (470) 363-1543
              </Button>
            </div>

            {/* Schedule Consultation */}
            <div className="bg-gradient-to-br from-[#002B5B] to-[#002B5B]/90 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-xl font-bold text-white mb-4">Schedule a Consultation</h3>
              <p className="text-gray-200 mb-6 text-sm leading-relaxed">
                Get expert advice on your construction project with a free on-site assessment.
              </p>
              <Button 
                variant="outline"
                className="w-full border-2 border-white text-white hover:bg-white hover:text-[#002B5B] transition-all"
                onClick={openModal}
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHome;
