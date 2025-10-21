import { Mountain, Route, Hammer, Droplets, Box, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function ServicesPage() {
  const services = [
    {
      id: "grading",
      icon: Mountain,
      title: "Grading & Earthwork",
      description: "Precision site preparation and earthwork services for optimal drainage and foundation stability.",
      image: "https://images.unsplash.com/photo-1756402751986-15f343b1437f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBoZWF2eSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjA5MDg5MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Site clearing and preparation",
        "Cut and fill operations",
        "Rough and fine grading",
        "Drainage and erosion control",
        "Soil stabilization",
        "Excavation services"
      ],
      benefits: [
        "State-of-the-art GPS-guided equipment",
        "Certified operators with 15+ years experience",
        "Efficient project completion",
        "Minimal environmental impact"
      ]
    },
    {
      id: "paving",
      icon: Route,
      title: "Paving Solutions",
      description: "High-quality asphalt and concrete paving solutions for roads, parking lots, and commercial surfaces.",
      image: "https://images.unsplash.com/photo-1704821920298-9193dc3ddea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwcGF2aW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MDk4MjQ3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Asphalt paving and overlay",
        "Concrete paving",
        "Parking lot construction",
        "Road construction and repair",
        "ADA-compliant installations",
        "Line striping and marking"
      ],
      benefits: [
        "Premium materials for durability",
        "Weather-resistant installations",
        "Smooth, professional finish",
        "Long-lasting results"
      ]
    },
    {
      id: "demolition",
      icon: Hammer,
      title: "Demolition Services",
      description: "Safe and efficient demolition services with proper debris removal and site cleanup.",
      image: "https://images.unsplash.com/photo-1723369962563-5e873df9b93b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW1vbGl0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NjA5ODI0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Building demolition",
        "Selective demolition",
        "Concrete removal and recycling",
        "Site clearing",
        "Debris hauling and disposal",
        "Environmental remediation"
      ],
      benefits: [
        "OSHA-compliant safety procedures",
        "Minimal dust and noise",
        "Complete site cleanup",
        "Recycling and waste management"
      ]
    },
    {
      id: "utilities",
      icon: Droplets,
      title: "Utilities Installation",
      description: "Complete utility installation including water, sewer, storm drainage, and electrical infrastructure.",
      image: "https://images.unsplash.com/photo-1723367194881-fe2e53534170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYWVyaWFsfGVufDF8fHx8MTc2MDk0MTUyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Water and sewer lines",
        "Storm drainage systems",
        "Electrical underground",
        "Gas line installation",
        "Fiber optic infrastructure",
        "Utility coordination"
      ],
      benefits: [
        "Licensed utility contractors",
        "Coordination with municipalities",
        "Precise installation methods",
        "Code-compliant work"
      ]
    },
    {
      id: "concrete",
      icon: Box,
      title: "Structural Concrete",
      description: "Expert concrete work for foundations, slabs, walls, and structural elements built to last.",
      image: "https://images.unsplash.com/photo-1706581324170-d847716c4512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZvdW5kYXRpb24lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYwOTgyNDgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Foundation construction",
        "Concrete slabs and floors",
        "Retaining walls",
        "Structural columns and beams",
        "Decorative concrete",
        "Concrete repair and restoration"
      ],
      benefits: [
        "High-strength concrete mixes",
        "Expert finishing techniques",
        "Reinforcement as needed",
        "Weatherproof installations"
      ]
    },
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
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="text-[#F37021] text-sm">Our Services</span>
            </div>
            <h1 className="text-white mb-6">
              Comprehensive Construction Solutions
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              From ground preparation to structural finishing, we provide end-to-end construction services tailored to your project needs with precision, safety, and excellence.
            </p>
            <Button 
              size="lg"
              className="bg-[#F37021] hover:bg-[#F37021]/90 text-white shadow-lg shadow-[#F37021]/20 gap-2"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Service Icons */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 hover:bg-[#F37021] transition-colors">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-200">{service.title.split('&')[0].trim()}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="grading" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12 h-auto bg-gray-100 p-2 rounded-2xl">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <TabsTrigger 
                    key={service.id} 
                    value={service.id}
                    className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-white data-[state=active]:shadow-lg rounded-xl"
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-xs md:text-sm">{service.title.split('&')[0].trim()}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {services.map((service) => {
              const Icon = service.icon;
              return (
                <TabsContent key={service.id} value={service.id} className="mt-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="order-2 lg:order-1">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#F37021] to-[#F37021]/80 flex items-center justify-center mb-6 shadow-lg shadow-[#F37021]/20">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-[#002B5B] mb-4">{service.title}</h2>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-[#002B5B] mb-4">What We Offer</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-[#F37021] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                          <h3 className="text-[#002B5B] mb-4">Why Choose Us</h3>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#F37021] mt-2 flex-shrink-0"></div>
                                <span className="text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-6">
              <span className="text-[#002B5B] text-sm">Our Process</span>
            </div>
            <h2 className="text-[#002B5B] mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to delivering your project on time and within budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Consultation", desc: "Discuss your project needs and objectives" },
              { num: "02", title: "Planning", desc: "Develop detailed plans and timelines" },
              { num: "03", title: "Execution", desc: "Execute with precision and safety" },
              { num: "04", title: "Completion", desc: "Final inspection and project handoff" },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100">
                  <div className="text-6xl text-[#F37021]/20 mb-4">{step.num}</div>
                  <h3 className="text-[#002B5B] mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-[#F37021]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#002B5B] to-[#002B5B]/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F37021] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-white mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Every project is unique. Let's discuss how we can tailor our services to meet your specific construction needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#F37021] hover:bg-[#F37021]/90 text-white shadow-lg shadow-[#F37021]/20 gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#002B5B] transition-all"
            >
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
