import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, HardHat, ShieldCheck, 
  ArrowRight, Ruler, Route, Droplets, Mountain, Hammer
} from 'lucide-react';
import imgGrading from "../images/Kilgore Fs/3-DJI_20250903101825_0017_D.jpg";
import imgPaving from "../images/Kilgore FOC/13-DJI_20250916121456_0032_D.jpg"
import imgUtilities from "../images/sewerimage.jpg"
// Services Data
const services = [
  {
    id: 1,
    title: 'Grading & Earthmoving',
    description: 'Precision site preparation and earthwork services for optimal drainage and foundation stability.',
    icon: Mountain,
    color: 'bg-orange-100 text-orange-500',
    features: [
      'Site preparation',
      'Drainage solutions',
      'Soil stabilization',
      'Excavation',
      'Land clearing',
      'Erosion control'
    ],
    image: imgGrading
    
  },
  {
    id: 2,
    title: 'Paving',
    description: 'High-quality asphalt and concrete paving solutions for roads, parking lots, and commercial surfaces.',
    icon: Route,
    color: 'bg-blue-100 text-blue-500',
    features: [
      'Asphalt paving',
      'Concrete work',
      'Parking lot construction',
      'Pavement repair',
      'Sealcoating',
      'Line striping'
    ],
    image: imgPaving
  },
  {
    id: 3,
    title: 'Utilities',
    description: 'Complete utility installation including water, sewer, storm drainage, and electrical infrastructure.',
    icon: Droplets,
    color: 'bg-blue-100 text-blue-500',
    features: [
      'Water & sewer lines',
      'Storm drainage',
      'Underground utilities',
      'Utility trenching',
      'Manhole installation',
      'Catch basin installation'
    ],
    image: imgUtilities
  }
];

// Process Steps Data
const processSteps = [
  {
    id: 1,
    title: 'Consultation',
    desc: 'We discuss your project requirements and goals.',
    icon: HardHat
  },
  {
    id: 2,
    title: 'Planning',
    desc: 'Our team creates a detailed project plan and timeline.',
    icon: Ruler
  },
  {
    id: 3,
    title: 'Execution',
    desc: 'We implement the project with precision and care.',
    icon: Hammer
  },
  {
    id: 4,
    title: 'Completion',
    desc: 'Final inspection and handover of the completed project.',
    icon: ShieldCheck
  }
];

// Reusable Components
const SectionTitle = ({ subtitle, title, align = 'center' }: { subtitle: string; title: string; align?: 'left' | 'center' }) => (
  <div className={`${align === 'center' ? 'text-center' : 'text-left'} mb-12`}>
    <span className="inline-block px-4 py-1.5 bg-[#F37021]/10 text-[#F37021] text-sm font-medium rounded-full mb-4">
      {subtitle}
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B] mb-4">
      {title}
    </h2>
    <div className={`w-16 h-1 bg-[#F37021] ${align === 'center' ? 'mx-auto' : ''}`}></div>
  </div>
);

const ServiceCard = ({ service }: { service: typeof services[0] }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl">
    <div className="h-56 bg-gray-100 overflow-hidden flex items-center justify-center">
      <img 
        src={service.image} 
        alt={service.title}
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center' }}
      />
    </div>
    <div className="p-6">
      <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
        <service.icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-[#002B5B] mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <ul className="space-y-2 mb-6">
        {service.features.slice(0, 3).map((feature, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="text-[#F37021] font-medium flex items-center hover:underline">
        Learn more
        <ArrowRight className="w-4 h-4 ml-1.5" />
      </button>
    </div>
  </div>
);

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#F37021] opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#002B5B] opacity-5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#F37021]/10 text-[#F37021] px-4 py-2 rounded-full mb-6">
              <HardHat className="w-4 h-4" />
              <span className="text-sm">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#002B5B] mb-6">
              Comprehensive Construction Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert construction services tailored to meet your project's unique requirements with precision and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="What We Offer" 
            title="Our Core Services" 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
     

      {/* PROCESS SECTION (Redesigned) */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Workflow" 
            title="How We Work" 
          />
          
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-16">
            An optimized approach to deliver your project on time and within budget, minimizing operational risks.
          </p>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step) => (
                <div key={step.id} className="group relative">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#002B5B]/30 h-full flex flex-col items-center">
                    {/* Step Number Badge */}
                    <div className="hidden absolute -top-4 bg-[#002B5B] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-4 border-white shadow">
                      {step.id}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-orange-100 text-[#F37021] rounded-full flex items-center justify-center mb-6 transition-all duration-300 ring-2 ring-orange-200/60 group-hover:bg-[#002B5B] group-hover:text-white group-hover:ring-[#002B5B]/60 transform group-hover:scale-105">
                      <step.icon size={24} />
                    </div>

                    <h3 className="text-xl font-bold text-[#002B5B] mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION (minimal light style) */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 max-w-3xl mx-auto mb-8 text-lg">
            Each project is unique. Let’s discuss how we can tailor our services to your specific needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link to="/contact" className="w-full sm:w-auto md:min-w-[240px] px-12 md:px-16 py-6 md:py-7 rounded-full bg-[#F37021] text-white shadow-[0_8px_18px_-6px_rgba(243,112,33,0.6)] hover:bg-[#FF8844] hover:shadow-[0_16px_28px_-8px_rgba(243,112,33,0.55)] transition-all font-semibold text-lg md:text-xl leading-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F37021]/30 inline-flex items-center justify-center">
              Contact us today <ArrowRight className="inline-block ml-3 w-6 h-6 align-middle" />
            </Link>
            <Link to="/projects" className="w-full sm:w-auto md:min-w-[240px] px-12 md:px-16 py-6 md:py-7 rounded-full border-2 border-[#002B5B] text-[#002B5B] bg-white hover:bg-[#002B5B] hover:text-white transition-all font-semibold text-lg md:text-xl leading-none shadow-[0_8px_18px_-6px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#002B5B]/20 inline-flex items-center justify-center">
              View portfolio
            </Link>
          </div>

          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 text-sm text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Fast estimates. Reliable timelines. Guaranteed quality.</span>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ServicesPage;
