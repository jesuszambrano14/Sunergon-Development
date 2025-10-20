import { Mountain, Route, Hammer, Droplets, Box } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Mountain,
      title: "Grading",
      description: "Precision site preparation and earthwork services for optimal drainage and foundation stability.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Route,
      title: "Paving",
      description: "High-quality asphalt and concrete paving solutions for roads, parking lots, and commercial surfaces.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Hammer,
      title: "Demolition",
      description: "Safe and efficient demolition services with proper debris removal and site cleanup.",
      color: "from-orange-600 to-orange-700"
    },
    {
      icon: Droplets,
      title: "Utilities",
      description: "Complete utility installation including water, sewer, storm drainage, and electrical infrastructure.",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Box,
      title: "Structural Concrete",
      description: "Expert concrete work for foundations, slabs, walls, and structural elements built to last.",
      color: "from-orange-500 to-orange-700"
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#F37021] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#002B5B] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-6">
            <span className="text-[#002B5B] text-sm">Our Services</span>
          </div>
          <h2 className="text-[#002B5B] mb-6">Comprehensive Construction Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From ground preparation to structural finishing, we provide end-to-end construction services tailored to your project needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#F37021]/20"
              >
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${index % 2 === 0 ? 'from-[#F37021] to-[#F37021]/80' : 'from-[#002B5B] to-[#002B5B]/80'} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${index % 2 === 0 ? 'from-[#F37021] to-[#F37021]/80' : 'from-[#002B5B] to-[#002B5B]/80'} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`}></div>
                </div>
                
                <h3 className="text-[#002B5B] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a href="#" className="inline-flex items-center text-[#F37021] hover:gap-2 transition-all group/link">
                    <span className="text-sm">Learn more</span>
                    <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}