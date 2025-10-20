import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F37021] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-6">
            <span className="text-[#002B5B] text-sm">Contact Us</span>
          </div>
          <h2 className="text-[#002B5B] mb-6">Let's Build Together</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Get in touch with our team for a consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#002B5B]">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe"
                      className="h-12 border-gray-200 focus:border-[#F37021] focus:ring-[#F37021] shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#002B5B]">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com"
                      className="h-12 border-gray-200 focus:border-[#F37021] focus:ring-[#F37021] shadow-sm"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#002B5B]">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(555) 123-4567"
                    className="h-12 border-gray-200 focus:border-[#F37021] focus:ring-[#F37021] shadow-sm"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[#002B5B]">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project requirements..."
                    rows={6}
                    className="border-gray-200 focus:border-[#F37021] focus:ring-[#F37021] resize-none shadow-sm"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full h-12 bg-[#F37021] hover:bg-[#F37021]/90 text-white shadow-lg shadow-[#F37021]/20 hover:shadow-xl hover:shadow-[#F37021]/30 transition-all"
                >
                  Submit Request
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-[#002B5B] mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F37021] to-[#F37021]/80 flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#F37021]/20">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <a href="tel:+15551234567" className="text-[#002B5B] hover:text-[#F37021] transition-colors">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#002B5B] to-[#002B5B]/80 flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#002B5B]/20">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a href="mailto:info@sunergon.com" className="text-[#002B5B] hover:text-[#F37021] transition-colors break-all">
                      info@sunergon.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F37021] to-[#F37021]/80 flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#F37021]/20">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Location</p>
                    <p className="text-[#002B5B]">
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
                    <p className="text-[#002B5B]">
                      Mon-Fri: 7AM - 6PM<br />
                      Sat: 8AM - 2PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#002B5B] to-[#002B5B]/90 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-white mb-4">Ready to Start?</h3>
              <p className="text-gray-200 mb-6 text-sm leading-relaxed">
                Request a free consultation and let's discuss how we can bring your construction project to life.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-2 border-white text-white hover:bg-white hover:text-[#002B5B] transition-all"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}