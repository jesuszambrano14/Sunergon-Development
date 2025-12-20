import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Target, FileText } from "lucide-react";
import { useQuoteModal } from "../contexts/QuoteModalContext";

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

export function Contact() {
  const { openModal } = useQuoteModal();
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
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
    <section className="py-20 md:py-24 bg-gray-50 relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F37021] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#002B5B] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute w-full h-full bg-grid-pattern opacity-[0.015]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-[#002B5B] to-[#001F42] rounded-2xl overflow-hidden shadow-2xl reveal fade-up once">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* CTA Content */}
            <div className="lg:col-span-5 p-6 md:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-2 rounded-full mb-6">
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">Expert Construction Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
                Ready to Build Excellence <span className="text-[#F37021] font-extrabold">Together?</span>
              </h2>
              <p className="text-lg text-gray-100 mb-8 leading-relaxed">
                From initial site preparation to final structural elements, we deliver precision, durability, and dependable execution for projects of all sizes.
              </p>
              <div className="space-y-4 mb-8">
                {["Comprehensive consultation", "Detailed project estimates", "Transparent communication", "Expert execution"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F37021]" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="flex items-center gap-2 bg-white text-[#002B5B] hover:bg-white/90 px-6 py-3 rounded-lg transition-all duration-300 hover:gap-3"
                onClick={openModal}
              >
                <FileText className="w-5 h-5" />
                Request a Detailed Quote
                <ArrowRight className="w-5 h-5 hidden sm:block" />
              </Button>
              
              {/* Contact Info - Only visible on mobile */}
              <div className="lg:hidden mt-8 pt-8 border-t border-white/20">
                <h4 className="text-white font-semibold mb-4">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <a href="tel:+14703631543" className="text-white hover:text-[#F37021] transition-colors">
                      (470) 363-1543
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <a href="mailto:info@sunergon.com" className="text-white hover:text-[#F37021] transition-colors">
                      info@sunergon.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white">
                      3400 Peachtree Rd NE, Atlanta, GA
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="lg:col-span-7 bg-white p-6 md:p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-[#001F42] mb-6">Request a Consultation</h3>
              
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-5 rounded-lg mb-6">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-[#001F42] font-semibold">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`h-12 border-gray-200 ${errors.fullName ? 'border-red-400 bg-red-50' : ''} focus:border-[#F37021] focus:ring-[#F37021] shadow-sm`}
                        placeholder="John Doe"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#001F42] font-semibold">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`h-12 border-gray-200 ${errors.email ? 'border-red-400 bg-red-50' : ''} focus:border-[#F37021] focus:ring-[#F37021] shadow-sm`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#001F42] font-semibold">
                      Phone (optional)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12 border-gray-200 focus:border-[#F37021] focus:ring-[#F37021] shadow-sm"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#001F42] font-semibold">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`border-gray-200 ${errors.message ? 'border-red-400 bg-red-50' : ''} focus:border-[#F37021] focus:ring-[#F37021] shadow-sm resize-none`}
                      placeholder="Tell us about your project needs..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#F37021] hover:bg-[#D85A0F] text-white py-3 px-8 rounded-lg transition-colors duration-200 font-medium w-full md:w-auto flex items-center justify-center gap-2"
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
              
              {/* Desktop Contact Info */}
              <div className="hidden lg:block mt-10 pt-8 border-t border-gray-200">
                <h4 className="text-[#001F42] font-bold mb-4">Contact Information</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <div className="w-10 h-10 rounded-full bg-[#F37021]/10 flex items-center justify-center mb-2">
                      <Phone className="w-5 h-5 text-[#F37021]" />
                    </div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Phone</p>
                    <a href="tel:+14703631543" className="text-[#001F42] hover:text-[#F37021] font-semibold transition-colors">
                      (470) 363-1543
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-10 h-10 rounded-full bg-[#F37021]/10 flex items-center justify-center mb-2">
                      <Mail className="w-5 h-5 text-[#F37021]" />
                    </div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                    <a href="mailto:info@sunergon.com" className="text-[#001F42] hover:text-[#F37021] font-semibold transition-colors">
                      info@sunergon.com
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <div className="w-10 h-10 rounded-full bg-[#F37021]/10 flex items-center justify-center mb-2">
                      <MapPin className="w-5 h-5 text-[#F37021]" />
                    </div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Address</p>
                    <span className="text-[#001F42] font-semibold">
                      3400 Peachtree Rd NE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
