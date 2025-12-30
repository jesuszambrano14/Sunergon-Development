import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { TexasServiceMap } from "../components/TexasServiceMap";
import { useQuoteModal } from "../contexts/QuoteModalContext";

export function ContactPage() {
  const { openModal } = useQuoteModal();
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "(470) 363-1543",
      link: "tel:+14703631543",
      description: "Mon-Fri 7AM-6PM, Sat 8AM-2PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "jesusz@sunergongroup.com",
      link: "mailto:jesusz@sunergongroup.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      detail: "Dallas, Texas",
      link: "#",
      description: "Serving all of Texas"
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We provide construction services throughout Texas, with a focus on the Dallas-Fort Worth metroplex and surrounding regions."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. Small projects may take 2-4 weeks, while larger developments can span 6-18 months. We provide detailed timelines during consultation."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes, we offer free consultations and project estimates. Contact us to schedule an on-site assessment."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. We are fully licensed, bonded, and insured with comprehensive liability coverage for all our projects."
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002B5B] to-[#002B5B]/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F37021] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-[#F37021] text-sm">Get in Touch</span>
            </div>
            <h1 className="text-white mb-6">
              Let's Build Something Great Together
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Have a project in mind? Our team is ready to discuss your construction needs and provide expert guidance every step of the way.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.link}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F37021] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white mb-2">{method.title}</h3>
                  <p className="text-[#F37021] mb-2">{method.detail}</p>
                  <p className="text-gray-300 text-sm">{method.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F37021] to-[#F37021]/80 flex items-center justify-center shadow-lg shadow-[#F37021]/20">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-[#002B5B]">Send Us a Message</h2>
                    <p className="text-gray-600 text-sm">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-[#002B5B]">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John"
                        className="h-12 border-gray-200 focus:border-[#F37021] focus:ring-[#F37021] shadow-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-[#002B5B]">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe"
                        className="h-12 border-gray-200 focus:border-[#F37021] focus:ring-[#F37021] shadow-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#002B5B]">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com"
                        className="h-12 border-gray-200 focus:border-[#F37021] focus:ring-[#F37021] shadow-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#002B5B]">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="(470) 363-1543"
                        className="h-12 border-gray-200 focus:border-[#F37021] focus:ring-[#F37021] shadow-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-[#002B5B]">Service Needed *</Label>
                      <Select>
                        <SelectTrigger className="h-12 border-gray-200 focus:border-[#F37021] focus:ring-[#F37021] shadow-sm">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="grading">Grading & Earthwork</SelectItem>
                          <SelectItem value="paving">Paving</SelectItem>
                          <SelectItem value="demolition">Demolition</SelectItem>
                          <SelectItem value="utilities">Utilities</SelectItem>
                          <SelectItem value="concrete">Structural Concrete</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline" className="text-[#002B5B]">Project Timeline</Label>
                      <Select>
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
                      placeholder="City, State"
                      className="h-12 border-gray-200 focus:border-[#F37021] focus:ring-[#F37021] shadow-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#002B5B]">Project Details *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Please describe your project requirements, scope, and any specific details we should know..."
                      rows={6}
                      className="border-gray-200 focus:border-[#F37021] focus:ring-[#F37021] resize-none shadow-sm"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full h-12 bg-[#F37021] hover:bg-[#F37021]/90 text-white shadow-lg shadow-[#F37021]/20 hover:shadow-xl hover:shadow-[#F37021]/30 transition-all gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Office Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#002B5B] to-[#002B5B]/80 flex items-center justify-center shadow-lg shadow-[#002B5B]/20">
                    <Clock className="w-6 h-6 text-[#F37021]" />
                  </div>
                  <h3 className="text-[#002B5B]">Office Hours</h3>
                </div>
                
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="text-[#002B5B]">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-[#F37021] to-[#F37021]/90 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-white mb-4">24/7 Emergency Contact</h3>
                <p className="text-white/90 mb-4 text-sm">
                  For urgent construction emergencies or time-sensitive inquiries
                </p>
                <Button 
                  variant="outline"
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-[#F37021] transition-all"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Emergency Line
                </Button>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-br from-[#002B5B] to-[#002B5B]/90 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-white mb-4">Schedule a Consultation</h3>
                <p className="text-gray-200 mb-6 text-sm leading-relaxed">
                  Get expert advice on your construction project. Free on-site assessments available.
                </p>
                <Button 
                  variant="outline"
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-[#002B5B] transition-all"
                  onClick={openModal}
                >
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Texas Service Map */}
      <TexasServiceMap />

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-50 rounded-full shadow-sm mb-6">
              <span className="text-[#002B5B] text-sm">FAQ</span>
            </div>
            <h2 className="text-[#002B5B] mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
              >
                <h3 className="text-[#002B5B] mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
