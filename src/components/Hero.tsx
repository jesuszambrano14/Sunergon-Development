import { Button } from "./ui/button";
import { ArrowRight, Award, Users, Briefcase, Check } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useQuoteModal } from "../contexts/QuoteModalContext";
// Using placeholder image since the import is causing an error
const imgKilgoreFOCFirst = "https://images.unsplash.com/photo-1503387837-b154d5074bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDF8fHx8MTcwNDIzMjM5Mnww&ixlib=rb-4.1.0&q=80";
import SectionBackgroundAccents from "./ui/SectionBackground";

function Counter({ end, duration = 1500, suffix = "", prefix = "" }: { end: number; duration?: number; suffix?: string; prefix?: string }) {
  const elRef = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const animate = () => {
      if (started) return;
      setStarted(true);
      const start = performance.now();
      const from = 0;
      const to = end;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = Math.round(from + (to - from) * eased);
        setVal(current);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const el = elRef.current;
    if (!el) return;

    let timeoutId: number | undefined;
    try {
      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          animate();
          io.disconnect();
        }
      }, { threshold: 0.1, rootMargin: "0px 0px -15% 0px" });
      io.observe(el);
      timeoutId = window.setTimeout(() => animate(), 800);
      return () => {
        io.disconnect();
        if (timeoutId) window.clearTimeout(timeoutId);
      };
    } catch {
      animate();
    }
  }, [end, duration, started]);

  return <span ref={elRef}>{`${prefix}${val}${suffix}`}</span>;
}

export function Hero() {
  const { openModal } = useQuoteModal();
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <SectionBackgroundAccents 
        variant="default" 
        showGrid={true}
        circlePositions={['top-right', 'bottom-left', 'top-left']} 
        density="medium"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="lg:col-span-6 relative z-10 reveal fade-in once">
            <div className="inline-flex items-center gap-2 bg-[#F37021]/10 text-[#D85A0F] px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Texas Premier Construction Partner</span>
            </div>
            
            <h1 
              className="font-black tracking-tight text-[#001F42] mb-6 leading-[1.1] reveal fade-up once stagger-1"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                WebkitTextStroke: '0.5px rgba(0, 0, 0, 0.1)'
              }}
            >
              Building Excellence <span className="text-[#D85A0F]">Across Texas</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl reveal fade-in once stagger-2">
              From initial site preparation to final structural elements, we deliver precision, durability, and dependable execution for commercial, industrial, and public-sector projects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-slideUp">
              <Button 
                size="lg" 
                className="bg-[#F37021] hover:bg-[#D85A0F] text-white text-lg shadow-xl shadow-[#F37021]/20 hover:shadow-2xl hover:shadow-[#F37021]/30 transition-all px-10 py-6 gap-3 group"
                onClick={openModal}
              >
                Request a Bid
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-[#002B5B] text-[#001F42] hover:bg-[#002B5B] hover:text-white shadow-sm transition-all px-8 py-6 font-medium"
              >
                Explore Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 reveal fade-in once stagger-4">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-[#D85A0F] mb-1"><Counter end={25} suffix="+" duration={1400} /></div>
                <div className="text-sm text-gray-900 font-semibold">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-[#D85A0F] mb-1"><Counter end={500} suffix="+" duration={1600} /></div>
                <div className="text-sm text-gray-900 font-semibold">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-[#D85A0F] mb-1"><Counter end={100} suffix="%" duration={1200} /></div>
                <div className="text-sm text-gray-900 font-semibold">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="lg:col-span-6 relative reveal fade-left once">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-4 lg:space-y-6">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] hover:shadow-2xl duration-500">
                  <img
                    src={imgKilgoreFOCFirst}
                    alt="Construction equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] hover:shadow-2xl duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwcGF2aW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MDk4MjQ3OXww&ixlib=rb-4.1.0&q=80"
                    alt="Paving project"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4 lg:space-y-6 pt-8">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] hover:shadow-2xl duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZvdW5kYXRpb24lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYwOTgyNDgwfDA&ixlib=rb-4.1.0&q=80"
                    alt="Concrete work"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] hover:shadow-2xl duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYwOTM2Njk3fDA&ixlib=rb-4.1.0&q=80"
                    alt="Commercial construction"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 lg:-bottom-8 lg:-left-8 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 transform hover:scale-[1.03] hover:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 reveal fade-up once stagger-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F37021] to-[#F37021]/80 flex items-center justify-center shadow-lg shadow-[#F37021]/20">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl lg:text-2xl font-bold text-[#001F42]">100% Satisfaction Guarantee</div>
                  <div className="text-sm text-gray-700 font-medium">We stand behind our work</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce hidden md:flex">
          <span className="text-sm text-gray-500">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-[#F37021] rounded-full animate-scrollDot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}