import { Shield, Award, TrendingUp, Target, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import React, { useEffect, useRef, useState } from "react";
import kilgoreFsImage from "../images/Kilgore Fs/2-DJI_20250903101755_0016_D.jpg";

function Counter({ end, duration = 2000, suffix = "", prefix = "", startDelay = 0 }: { end: number; duration?: number; suffix?: string; prefix?: string; startDelay?: number }) {
  const elRef = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const animate = () => {
      if (started) return;
      setStarted(true);
      const startAt = performance.now() + startDelay;
      const from = 0;
      const to = end;
      const tick = (now: number) => {
        const elapsed = Math.max(0, now - startAt);
        const t = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - t, 4);
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
      }, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" });
      io.observe(el);
      timeoutId = window.setTimeout(() => animate(), 700 + startDelay);
      return () => {
        io.disconnect();
        if (timeoutId) window.clearTimeout(timeoutId);
      };
    } catch {
      animate();
    }
  }, [end, duration, startDelay, started]);
  return <span ref={elRef}>{`${prefix}${val}${suffix}`}</span>;
}

export function AboutPage() {
  const coreValues = [
    { icon: Award, title: "Integrity", description: "Transparent communication and ethical business practices. We do what we say and deliver what we promise." },
    { icon: Shield, title: "Safety", description: "Every project begins and ends with safety as the priority." },
    { icon: TrendingUp, title: "Performance", description: "Exceeding expectations on every job, every time." },
    { icon: Users, title: "Partnership", description: "Building long-term relationships through collaboration and respect." },
  ];

  const stats = [
    { value: "100%", label: "On-Time Delivery" },
    { value: "10+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "$15M", label: "Total Project Value" },
  ];

  const certifications = [
    "OSHA Certified",
    "BBB A+ Rated",
    "Licensed & Insured",
    "EPA Compliant",
    "DOT Approved",
    "ISO 9001 Certified",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <span className="text-[#F37021] text-sm">About Sunergon Development</span>
              </div>
              <h1 className="text-white mb-6">
                Building Texas with Integrity & Excellence
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                For over 25 years, we've been the trusted construction partner for businesses and communities across Texas, delivering exceptional results through precision, safety, and unwavering commitment to quality.
              </p>
              <Button 
                size="lg"
                className="bg-[#F37021] hover:bg-[#F37021]/90 text-white shadow-lg shadow-[#F37021]/20 gap-2"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={kilgoreFsImage}
                  alt="Construction team"
                  className="w-full h-full object-cover"
                  data-component-name="AboutPage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl text-[#F37021] mb-2">
                  {index === 0 && (<Counter end={100} suffix="%" duration={2000} startDelay={0} />)}
                  {index === 1 && (<Counter end={10} prefix="+" duration={2200} startDelay={150} />)}
                  {index === 2 && (<Counter end={100} suffix="%" duration={1800} startDelay={300} />)}
                  {index === 3 && (<Counter end={15} prefix="$" suffix="M" duration={2400} startDelay={450} />)}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-6">
                <span className="text-[#002B5B] text-sm">Our Story</span>
              </div>
              <h2 className="text-[#002B5B] mb-6">Built on a Foundation of Trust</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Since 1998, Sunergon Development has been at the forefront of commercial and industrial construction across Texas. What started as a small grading and earthwork operation has grown into a full-service construction company trusted by businesses, municipalities, and developers statewide.
                </p>
                <p>
                  Our success is built on three pillars: uncompromising safety standards, transparent communication, and a relentless pursuit of excellence. Every project, regardless of size, receives the same level of attention to detail and commitment to quality that has become our trademark.
                </p>
                <p>
                  Today, we're proud to have completed over 500 projects, from major highway infrastructure to commercial developments, always delivering on time and within budget while maintaining the highest safety and quality standards.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1700204168269-17794b26924e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzYWZldHklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYwOTc1ODY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Safety equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1729551610640-e8adee1172e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBibHVlcHJpbnQlMjBwbGFuc3xlbnwxfHx8fDE3NjA4OTgxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Construction plans"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision & Core Values (replaces Timeline) */}
      <section className="py-24 bg-gradient-to-b from-[#F4F7FB] to-white relative overflow-hidden">
        {/* Subtle blue background accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 -right-16 w-[28rem] h-[28rem] rounded-full bg-[#F4F7FB] shadow-[inset_0_0_60px_rgba(18,40,76,0.05)]"></div>
          <div className="absolute bottom-[-6rem] -left-24 w-[32rem] h-[32rem] rounded-full bg-[#12284C]/5 blur-3xl"></div>
          <div className="absolute top-1/3 left-0 right-0 h-24 bg-gradient-to-r from-[#F4F7FB] via-transparent to-[#F4F7FB]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-15 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-4 bg-gray-50 rounded-full shadow-sm mb-6">
              <span className="text-[#002B5B] text-2xl">Our Vision & Core Values</span>
            </div>
           
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The principles that guide every decision and project we undertake</p>
          </div>

          {/* Vision Block - centered and separated */}
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <div className="mb-4 flex justify-center">
              
            </div>
            
          </div>

          {/* subtle separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-10"></div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-xl ring-1 ring-black/5 border border-gray-100 transition-transform transition-shadow duration-200 hover:shadow-2xl hover:-translate-y-0.5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-[#F36F21]" />
                  </div>
                  <h3 className="text-[#12284C] mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-50 rounded-full shadow-sm mb-6">
              <span className="text-[#002B5B] text-sm">Credentials</span>
            </div>
            <h2 className="text-[#002B5B] mb-4">Licensed & Certified</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fully compliant with industry standards and regulations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex items-center justify-center text-center"
              >
                <div>
                  <CheckCircle2 className="w-8 h-8 text-[#F37021] mx-auto mb-3" />
                  <p className="text-sm text-[#002B5B]">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
}
