import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock, ArrowRight, Globe, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
const logo = new URL("../images/sunergondev-01-removebg-preview.png", import.meta.url).href;
import SectionBackgroundAccents from "./ui/SectionBackground";

export function Footer() {
  const location = useLocation();
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  
  const services = [
    { name: "Grading & Earthwork", path: "/services" },
    { name: "Utilities", path: "/services" },
    { name: "Demolition", path: "/services" },
    { name: "Paving", path: "/services" },
    { name: "Structural Concrete", path: "/services" },
  ];

  const projectTypes = [
    "Commercial Development",
    "Municipal Projects",
    "Industrial Construction",
    "Residential Development",
  ];

  return (
    <div>
      {/* CTA Banner - Kept separate from the footer (hidden on About, Projects, and Contact pages) */}
      {location.pathname !== '/about' && location.pathname !== '/projects' && location.pathname !== '/contact' && (
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#002B5B] text-white rounded-2xl shadow-xl border border-[#002B5B] overflow-hidden reveal fade-up once">
              <div className="grid grid-cols-1 md:grid-cols-3 items-center">
                <div className="p-8 md:p-10 md:col-span-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
                  <p className="text-gray-200 mb-6">Connect with our team for expert construction solutions tailored to your needs</p>
                  <Link to="/contact">
                    <Button className="bg-[#F37021] hover:bg-[#F37021]/90 text-white px-8 py-3 shadow-md hover:shadow-lg transition-all group">
                      Request a Consultation
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className="hidden md:block h-full bg-gradient-to-r from-white/10 to-white/5 p-10">
                  <div className="space-y-4">
                    {[
                      "Expert consultations",
                      "Detailed project estimates",
                      "Quality craftsmanship",
                      "On-time delivery",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <ChevronRight className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-white font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
        
      {/* Footer - Separate from CTA */}
      <footer className="relative overflow-hidden border-t border-gray-200 bg-gradient-to-t from-[#F37021]/40 via-[#F37021]/15 to-white">

        {/* Background Elements */}
        <SectionBackgroundAccents 
          variant="default" 
          showGrid={true}
          circlePositions={['top-right', 'bottom-left']} 
          density="medium"
        />

        {/* Extra blue accent on the left */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-6rem] top-1/3 w-[36rem] h-[36rem] bg-[#002B5B]/30 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16 items-start">
            {/* Company Info */}
            <div className="reveal fade-up stagger-1 once">
              <div className="flex items-start mb-6">
                <div className="h-16">
                  <img src={logo} alt="Sunergon Development" className="h-full w-auto object-contain" />
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-8">
                Building Texas from the ground up with excellence in construction services. From initial site preparation to final structural elements, we deliver precision, durability, and dependable execution.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F37021]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#F37021]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1 font-medium">Call Us</p>
                    <a href="tel:+14703631543" className="text-[#002B5B] hover:text-[#F37021] transition-colors font-medium">
                      (470) 363-1543
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F37021]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#F37021]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1 font-medium">Email</p>
                    <a href="mailto:jesusz@sunergongroup.com" className="text-[#002B5B] hover:text-[#F37021] transition-colors break-all font-medium">
                      jesusz@sunergongroup.com
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <a 
                  href="#" 
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#F37021] text-gray-700 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#F37021] text-gray-700 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#F37021] text-gray-700 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#F37021] text-gray-700 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="reveal fade-up stagger-2 once">
              <h3 className="text-lg font-bold text-[#002B5B] mb-5">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-700 hover:text-[#F37021] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F37021] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="reveal fade-up stagger-3 once">
              <h3 className="text-lg font-bold text-[#002B5B] mb-5">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link 
                      to={service.path} 
                      className="text-gray-700 hover:text-[#F37021] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F37021]"></span>
                      <span className="group-hover:translate-x-1 transition-transform">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-lg font-bold text-[#002B5B] mb-5">Project Types</h3>
              <ul className="space-y-3">
                {projectTypes.map((type) => (
                  <li key={type}>
                    <Link 
                      to="/projects" 
                      className="text-gray-700 hover:text-[#F37021] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F37021]"></span>
                      <span className="group-hover:translate-x-1 transition-transform">{type}</span>
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link 
                    to="/projects"
                    className="text-[#F37021] hover:text-[#F37021]/80 transition-colors flex items-center gap-1 text-sm font-medium"
                  >
                    <span>View all projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-8 border-t border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 reveal fade-in once">
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <Globe className="w-4 h-4" />
                <span>Serving all of Texas</span>
              </div>
              
              <p className="text-gray-600 text-sm">
                {new Date().getFullYear()} Sunergon Development. All rights reserved.
              </p>
              
              <div className="flex gap-6 text-sm text-gray-600">
                <Link to="/privacy-policy" className="hover:text-[#F37021] transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-[#F37021] transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
        
      </footer>
    </div>
  );
}