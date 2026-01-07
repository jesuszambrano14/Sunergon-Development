import React, { useEffect, useState, useRef } from "react";
import { Briefcase, HardHat, Landmark, ShieldCheck, Factory, Building2 } from "lucide-react";
import SectionBackgroundAccents from "./ui/SectionBackground";

export function About() {
  // Core values section removed in minimalist design
  
  const sectorTypes = [
    { name: "Commercial Developers", icon: Building2, description: "Partnering with developers for precision construction services" },
    { name: "General Contractors", icon: HardHat, description: "Supporting contractors with specialized expertise" },
    { name: "Municipalities", icon: Landmark, description: "Delivering infrastructure solutions for local governments" },
    { name: "Public Agencies", icon: ShieldCheck, description: "Executing critical projects for public institutions" },
    { name: "Industrial Facilities", icon: Factory, description: "Building robust solutions for industrial clients" },
    { name: "Private Enterprises", icon: Briefcase, description: "Serving businesses with tailored construction services" },
  ];
  
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

  // Counter component for stat animation
  function Counter({ end, duration = 1500, suffix = "", prefix = "" }: {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
  }) {
    const [value, setValue] = useState(0);
    const { ref, isInView } = useInView();
    const animatedRef = useRef(false);
    
    useEffect(() => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (isInView && !animatedRef.current) {
        animatedRef.current = true;
        
        if (prefersReducedMotion) {
          setValue(end);
          return;
        }
        
        const start = 0;
        const startTime = performance.now();
        
        const updateCounter = () => {
          const now = performance.now();
          const progress = Math.min(1, (now - startTime) / duration);
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(start + (end - start) * easeOutCubic);
          
          setValue(current);
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };
        
        requestAnimationFrame(updateCounter);
      } else if (!isInView) {
        setValue(0);
      }
    }, [isInView, end, duration]);
    
    // Format the number with comma separators for thousands
    const formattedValue = value.toLocaleString();
    return <div ref={ref}>{prefix}{formattedValue}{suffix}</div>;
  };

  return (
    <section className="py-28 md:py-36 relative overflow-hidden" id="about">
      {/* Blueprint background pattern */}
      <SectionBackgroundAccents 
        variant="light" 
        showGrid={true}
        circlePositions={['bottom-right', 'top-left']} 
        density="medium"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with improved hierarchy */}
        <div className="text-center mb-20">
          <span className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-3">About Sunergon Development</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F42] mb-4 leading-tight">Your Trusted Construction Partner</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium">
            Serving both public and private sectors with excellence in construction services
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-24">
          {/* Two-column layout for Building Excellence section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#001F42] mb-6 leading-snug">Building Excellence Across Texas</h3>
              <div className="prose prose-lg">
                <p className="text-base md:text-lg text-gray-700 mb-5 leading-relaxed">
                  With decades of combined field experience, Sunergon Development delivers full-service solutions from 
                  initial site preparation to final structural elements with precision, durability, and dependable execution.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We partner with commercial developers, general contractors, municipalities, and public agencies 
                  across Texas, offering comprehensive expertise in grading, utilities, paving, demolition, and 
                  structural concrete work.
                </p>
              </div>
            </div>
            
            {/* Credibility card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-[#001F42] mb-6">Our Capabilities</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <div className="rounded-full p-1 bg-[#F37021]/10 text-[#F37021] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                  </div>
                  <p className="text-gray-700">Full-service delivery from site preparation to structural concrete work</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full p-1 bg-[#F37021]/10 text-[#F37021] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                  </div>
                  <p className="text-gray-700">Comprehensive expertise in grading, utilities, paving, demolition, and structural concrete</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-full p-1 bg-[#F37021]/10 text-[#F37021] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                  </div>
                  <p className="text-gray-700">Serving public and private clients across Texas</p>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Sectors We Serve - Responsive cards */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-[#001F42] mb-8 text-center">Sectors We Serve</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sectorTypes.map((sector, index) => {
                const Icon = sector.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-6 flex gap-5 transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-[#F37021] focus-visible:outline-none hover:bg-gray-50 hover:border-[#F37021]/40"
                    tabIndex={0}
                    aria-label={`Sector: ${sector.name}`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#F37021]/5 text-[#F37021] flex items-center justify-center group-hover:bg-[#F37021]/10 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#001F42] mb-1">{sector.name}</h4>
                      <p className="text-sm text-gray-600">{sector.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Stats grid with animations - flatter, cleaner design */}
          <div className="bg-gray-50 border border-gray-100 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="text-center p-6 md:p-8">
                <div className="text-4xl md:text-5xl font-extrabold text-[#001F42] mb-3 tracking-tight">
                  <Counter end={3000} duration={1800} prefix="+" suffix=" LF" />
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Piers Installed</div>
              </div>
              <div className="text-center p-6 md:p-8">
                <div className="text-4xl md:text-5xl font-extrabold text-[#001F42] mb-3 tracking-tight">
                  <Counter end={6000} duration={2000} prefix="+" suffix=" LF" />
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Grade Beams Constructed</div>
              </div>
              <div className="text-center p-6 md:p-8">
                <div className="text-4xl md:text-5xl font-extrabold text-[#001F42] mb-3 tracking-tight">
                  <Counter end={35000} duration={1600} prefix="+" suffix=" Ft²" />
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Concrete Slabs Placed</div>
              </div>
              <div className="text-center p-6 md:p-8">
                <div className="text-4xl md:text-5xl font-extrabold text-[#001F42] mb-3 tracking-tight">
                  <Counter end={100000} duration={1800} prefix="+" suffix=" Ft²" />
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-500">Paving Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}