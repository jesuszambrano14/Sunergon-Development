import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Target } from "lucide-react";

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
              <div className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-2 rounded-full mb-6 animate-fadeIn">
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">Expert Construction Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-slideUp" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
                Ready to Build Excellence <span className="text-[#F37021] font-extrabold">Together?</span>
              </h2>
              <p className="text-lg text-gray-100 mb-8 animate-fadeIn leading-relaxed">
                From initial site preparation to final structural elements, we deliver precision, durability, and dependable execution for projects of all sizes.
              </p>
              <div className="space-y-4 mb-8 animate-fadeIn">
                {["Comprehensive consultation", "Detailed project estimates", "Transparent communication", "Expert execution"].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F37021]" />
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
              
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
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-sunergon-orange text-text-light hover:bg-sunergon-orange-dark py-4 rounded-lg transition-colors group font-medium shadow-md"
                    >
                      Submit Request
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 reveal fade-left once">
              <h3 className="text-2xl font-bold text-sunergon-navy-dark mb-6 text-shadow-sm">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sunergon-orange to-sunergon-orange/80 flex items-center justify-center flex-shrink-0 shadow-lg shadow-sunergon-orange/20">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted-dark mb-1 font-medium">Phone</p>
                    <a href="tel:+14703631543" className="text-sunergon-navy-dark hover:text-sunergon-orange transition-colors font-semibold">
                      (470) 363-1543
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#002B5B] to-[#002B5B]/80 flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#002B5B]/20">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted-dark mb-1 font-medium">Email</p>
                    <a href="mailto:info@sunergongroup.com" className="text-sunergon-navy-dark hover:text-sunergon-orange transition-colors font-semibold break-all">
                      jesusz@sunergongroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sunergon-orange to-sunergon-orange/80 flex items-center justify-center flex-shrink-0 shadow-lg shadow-sunergon-orange/20">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Coverage Area</p>
                    <p className="text-[#002B5B] font-medium">
                      Serving all of Texas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#002B5B] to-[#002B5B]/80 flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#002B5B]/20">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Business Hours</p>
                    <p className="text-[#002B5B] font-medium">
                      Mon-Fri: 7AM - 6PM<br />
                      Sat: 8AM - 2PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Quick Links */}
            <div className="bg-gradient-to-br from-[#002B5B] to-[#002B5B]/90 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Building className="w-5 h-5" />
                <h3 className="text-xl font-bold">Our Services</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  { name: "Grading & Earthwork", link: "/services" },
                  { name: "Utilities Installation", link: "/services" },
                  { name: "Paving Solutions", link: "/services" },
                  { name: "Demolition Services", link: "/services" },
                  { name: "Structural Concrete", link: "/services" },
                ].map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.link} 
                      className="flex items-center gap-2 text-gray-200 hover:text-white group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F37021]"></span>
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href = '/projects'}
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-[#002B5B] transition-all group"
                >
                  View Our Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-[#002B5B] mb-8 text-center">Trusted by Clients Across Texas</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-[#F37021] mb-2">25+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-[#F37021] mb-2">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-[#F37021] mb-2">100%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl font-bold text-[#F37021] mb-2">50+</div>
              <div className="text-sm text-gray-600">Texas Counties</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}