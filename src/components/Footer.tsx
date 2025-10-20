import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const quickLinks = ["Home", "About", "Services", "Projects", "Contact"];
  const services = ["Grading", "Paving", "Demolition", "Utilities", "Structural Concrete"];

  return (
    <footer className="bg-gradient-to-br from-[#002B5B] to-[#002B5B]/95 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F37021] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-[#F37021] text-xl">S</span>
              </div>
              <div>
                <div className="text-white leading-tight">Sunergon</div>
                <div className="text-[#F37021] text-sm leading-tight">Development</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Building Texas from the ground up with excellence in construction services.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#F37021] flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#F37021] flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#F37021] flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#F37021] flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-[#F37021] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#F37021] transition-all"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-6">Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F37021]"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <a href="tel:+15551234567" className="hover:text-[#F37021] transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@sunergon.com" className="hover:text-[#F37021] transition-colors">
                  info@sunergon.com
                </a>
              </li>
              <li className="pt-2">
                Serving all of Texas
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sunergon Development. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[#F37021] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#F37021] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}