import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#002B5B] to-[#002B5B]/80 rounded-xl flex items-center justify-center shadow-lg shadow-[#002B5B]/20">
                <span className="text-[#F37021] text-xl">S</span>
              </div>
            </div>
            <div>
              <div className="text-[#002B5B] leading-tight">Sunergon</div>
              <div className="text-[#F37021] text-sm leading-tight">Development</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 hover:text-[#F37021] transition-colors relative group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F37021] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <Button className="bg-[#F37021] hover:bg-[#F37021]/90 text-white shadow-lg shadow-[#F37021]/20 hover:shadow-xl hover:shadow-[#F37021]/30 transition-all">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-[#F37021] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-700 hover:text-[#F37021] transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <Button className="bg-[#F37021] hover:bg-[#F37021]/90 text-white w-full shadow-lg shadow-[#F37021]/20">
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}