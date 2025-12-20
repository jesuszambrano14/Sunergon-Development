import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuoteModal } from "../contexts/QuoteModalContext";
const logo = new URL("../images/sunergondev-01-removebg-preview.png", import.meta.url).href;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useQuoteModal();

  const navLinks = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <div className="relative">
              <img src={logo} alt="Sunergon Development" className="h-12 sm:h-12 w-24  shadow-[#002B5B]/20" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const path = link === "Home" ? "/" : `/${link.toLowerCase()}`;
              return (
                <Link
                  key={link}
                  to={path}
                  className="text-gray-700 hover:text-[#F37021] transition-colors relative group"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F37021] group-hover:w-full transition-all duration-300"></span>
                </Link>
              );
            })}
            <Button 
              onClick={openModal}
              className="bg-[#F37021] hover:bg-[#F37021]/90 text-white shadow-lg shadow-[#F37021]/20 hover:shadow-xl hover:shadow-[#F37021]/30 transition-all"
            >
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
              {navLinks.map((link) => {
                const path = link === "Home" ? "/" : `/${link.toLowerCase()}`;
                return (
                  <Link
                    key={link}
                    to={path}
                    className="text-gray-700 hover:text-[#F37021] transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link}
                  </Link>
                );
              })}
              <Button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="bg-[#F37021] hover:bg-[#F37021]/90 text-white w-full shadow-lg shadow-[#F37021]/20"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}