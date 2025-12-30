import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  HardHat,
  Truck,
  ShieldCheck,
  Clock,
  Phone,
  ArrowRight,
  Hammer,
  Ruler,
  Calculator,
} from "lucide-react";

// --- DATA MOCKUP (Data Simulation) ---
const serviceData = {
  title: "Grading and Earthmoving",
  description:
    "Precise site preparation and earthmoving services for optimal drainage and foundation stability, utilizing state-of-the-art equipment.",
  image:
    "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=1000",
  features: [
    "Slope design and construction",
    "Operation on difficult terrain",
    "High-precision laser leveling",
    "Drainage and erosion control",
    "Soil stabilization",
    "Deep excavation services",
  ],
  benefits: [
    { title: "Safety First", desc: "Premium construction insurance and HSE protocols.", icon: ShieldCheck },
    { title: "Certified Personnel", desc: "Operators with 10+ years of experience.", icon: HardHat },
    { title: "Efficiency", desc: "Efficient completion within the schedule.", icon: Clock },
  ],
};

const processSteps = [
  { id: 1, title: "Consultation", desc: "We discuss on-site needs and objectives.", icon: Phone },
  { id: 2, title: "Planning", desc: "Development of plans, schedules, and machinery.", icon: Ruler },
  { id: 3, title: "Execution", desc: "Project execution with precision and safety.", icon: Hammer },
  { id: 4, title: "Completion", desc: "Final inspection and project handover.", icon: CheckCircle2 },
];

// --- REUSABLE UI COMPONENTS ---

type SectionTitleProps = { subtitle: string; title: string; align?: "left" | "center" };
const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, align = "center" }) => (
  <div className={`mb-12 ${align === "left" ? "text-left" : "text-center"}`}>
    <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-2 block">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{title}</h2>
    <div className={`h-1.5 w-24 bg-orange-500 mt-4 rounded-full ${align === "center" ? "mx-auto" : ""}`}></div>
  </div>
);

type ButtonProps = React.PropsWithChildren<{ variant?: "primary" | "secondary" | "outline" | "white"; className?: string }>;
const Button: React.FC<ButtonProps> = ({ children, variant = "primary", className = "" }) => {
  const baseStyle =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 shadow-lg";
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/30",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/30",
    outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-50",
    white: "bg-white text-orange-600 hover:bg-gray-100",
  } as const;
  return <button className={`${baseStyle} ${variants[variant]} ${className}`}>{children}</button>;
};

// --- MAIN COMPONENT ---

const GradingDetail: React.FC = () => {
  return (
    <section className="bg-slate-50 selection:bg-orange-100 selection:text-orange-600">
      {/* HERO SECTION (Compact for internal pages) */}
      <header className="relative pt-24 pb-16 md:pt-32 md:pb:24 overflow-hidden">
        <div className="absolute inset-0 bg-[#002B5B]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#002B5B]/50 to-[#002B5B]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-sm font-semibold mb-6">
            Advanced Engineering Solutions
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Services</span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            We provide comprehensive solutions for the oil and construction industry, guaranteeing the highest standards of safety and quality.
          </p>

          {/* Icon Navigation Bar */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 border-t border-white/20 pt-8">
            {[
              { icon: Truck, label: "Earthwork" },
              { icon: Calculator, label: "Estimates" },
              { icon: HardHat, label: "Civil Works" },
              { icon: ShieldCheck, label: "Industrial Safety" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="p-3 rounded-full bg-white/10 text-gray-300 group-hover:bg-[#F37021] group-hover:text-white transition-all duration-300">
                  <item.icon size={24} />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* SERVICE DETAIL SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left: Image Showcase */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src={serviceData.image}
                  alt="Service"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white max-w-xs">
                  <p className="font-bold text-lg mb-1">Owned Machinery</p>
                  <p className="text-xs text-slate-200">Renewed fleet and constant maintenance to prevent delays.</p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-1/2">
              <SectionTitle subtitle="Our Flagship Service" title={serviceData.title} align="left" />

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">{serviceData.description}</p>

              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 mb-8">
                <h3 className="font-bold text-slate-800 text-xl mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-orange-500" /> What We Offer
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {serviceData.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 list-none group">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-slate-300 group-hover:bg-orange-500 transition-colors"></span>
                      {feature}
                    </li>
                  ))}
                </div>
              </div>

              {/* Benefits Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {serviceData.benefits.map((benefit, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <benefit.icon className="w-8 h-8 text-[#002B5B] mb-3" />
                    <h4 className="font-bold text-slate-800 text-sm mb-1">{benefit.title}</h4>
                    <p className="text-xs text-slate-500 leading-tight">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Workflow" title="How We Work" />

          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
            An optimized approach to deliver your project on time and within budget, minimizing operational risks.
          </p>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step) => (
                <div key={step.id} className="group relative">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-orange-200 h-full flex flex-col items-center">
                    {/* Step Number Badge */}
                    <div className="hidden absolute -top-4 bg-slate-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white shadow">
                      {step.id}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                      <step.icon size={32} />
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#002B5B] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Need a <span className="text-[#F37021]">customized solution?</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg">
            Every project is unique. Let's discuss how we can adapt our services to meet your specific needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="primary" className="text-lg px-8">
                Contact Us Today <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900 text-lg px-8">
              View Portfolio
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-slate-400">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span>Quick quotes. Reliable timelines. Guaranteed quality.</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default GradingDetail;
