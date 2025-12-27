import { Layers, Ruler, Building2, Droplet, Briefcase, Landmark, ArrowRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useEffect, useState, useRef } from "react";
import SectionBackgroundAccents from "./ui/SectionBackground";

export function Services() {
  const navigate = useNavigate();
  
  // Create useInView hook for animation
  function useInView(threshold = 0.1, rootMargin = "0px") {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const element = ref.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(element);
      return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return { ref, isInView };
  }

  const services = [
    {
      icon: Layers,
      title: "Grading & Earthwork",
      description: "Site preparation, mass grading, and earthwork to establish precise elevations and long-term stability."
    },
    {
      icon: Ruler,
      title: "Paving & Flatwork",
      description: "Concrete paving, sidewalks, curb & gutter, and exterior flatwork built for durability and compliance."
    },
    {
      icon: Building2,
      title: "Structural Concrete",
      description: "Foundations, grade beams, piers, slabs, and structural concrete systems executed to engineered specifications."
    },
    {
      icon: Droplet,
      title: "Utilities & Underground",
      description: "Storm drainage, sanitary sewer, water lines, and underground infrastructure installation."
    },
    {
      icon: Briefcase,
      title: "Commercial Construction",
      description: "Full-service construction support for private commercial and industrial developments."
    },
    {
      icon: Landmark,
      title: "Public / Municipal Construction",
      description: "Infrastructure and facility construction for cities, counties, and public agencies."
    }
  ];

  return (
    <section className="py-32 md:py-40 relative overflow-hidden mt-24 md:mt-32 pt-32 md:pt-44" id="services">
      {/* Blueprint background pattern */}
      <SectionBackgroundAccents 
        variant="blueprint" 
        showGrid={true}
        circlePositions={['bottom-right', 'top-left']} 
        density="sparse"
      />
      {/* Explicit top spacer to ensure visual separation from previous section */}
      <div className="h-12 md:h-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 md:mt-32 mb-16 relative z-10">
        <div className="text-center">
          <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-6">
            <span className="text-[#001F42] text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F42] mb-6 leading-tight">Construction Excellence</h2>
          <div className="w-24 h-1 bg-[#F37021] mx-auto mb-10 md:mb-12"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-normal mt-6 mb-32 md:mb-40">
            Specialized construction services delivered with precision, safety, and long-term performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto mb-48 md:mb-56">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-[#F37021] focus-visible:outline-none hover:bg-gray-50 hover:border-[#F37021]/40"
                  tabIndex={0}
                  aria-label={`Service: ${service.title}`}
                >
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-lg bg-[#F37021]/5 text-[#F37021] flex items-center justify-center mb-6 group-hover:bg-[#F37021]/10 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#001F42] mb-3">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed grow">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Extra spacer to separate the grid from the CTA */}
          <div className="h-12 md:h-20"></div>

          {/* CTA Section */}
          <div className="mt-64 md:mt-80 pt-24 border-t border-gray-200">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-12">Need a contractor experienced in commercial and public projects?</p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Button
                  size="lg"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      navigate('/contact');
                    }
                  }}
                  className="bg-[#F37021] hover:bg-[#F37021]/90 text-white h-12 px-6 py-3 rounded-xl text-base font-medium transition-colors group"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  onClick={() => navigate('/projects')}
                  variant="outline"
                  className="border-2 border-[#001F42] text-[#001F42] hover:bg-gray-50 h-12 px-6 py-3 rounded-xl text-base font-medium transition-colors"
                >
                  View Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}