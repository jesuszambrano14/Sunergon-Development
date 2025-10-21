import { Shield, Award, TrendingUp, Target, Users, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export function AboutPage() {
  const values = [
    { 
      icon: Shield, 
      label: "Safety First",
      description: "Zero-compromise approach to workplace safety and OSHA compliance. Every team member goes home safely."
    },
    { 
      icon: Award, 
      label: "Integrity",
      description: "Transparent communication and ethical business practices. We do what we say and say what we do."
    },
    { 
      icon: TrendingUp, 
      label: "Performance",
      description: "Exceeding expectations on every project, every time. Excellence is our standard, not our goal."
    },
    { 
      icon: Target, 
      label: "Precision",
      description: "Meticulous attention to detail in planning and execution. Quality craftsmanship in every phase."
    },
    { 
      icon: Users, 
      label: "Collaboration",
      description: "Strong partnerships with clients, subcontractors, and communities. Together we build better."
    },
    { 
      icon: Zap, 
      label: "Innovation",
      description: "Leveraging modern equipment and methods to deliver efficient, cost-effective solutions."
    },
  ];

  const timeline = [
    { year: "1998", title: "Founded", description: "Sunergon Development established in Dallas, TX" },
    { year: "2005", title: "Expansion", description: "Opened operations across North Texas region" },
    { year: "2012", title: "Growth", description: "Exceeded 200 completed projects milestone" },
    { year: "2018", title: "Recognition", description: "Awarded BBB A+ Rating and industry certifications" },
    { year: "2024", title: "Today", description: "500+ projects completed, serving all of Texas" },
  ];

  const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "500+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "$50M+", label: "Total Project Value" },
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
                  src="https://images.unsplash.com/photo-1541888915364-aaeed51d238b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjA5ODIzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Construction team"
                  className="w-full h-full object-cover"
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
                <div className="text-4xl lg:text-5xl text-[#F37021] mb-2">{stat.value}</div>
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

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-50 rounded-full shadow-sm mb-6">
              <span className="text-[#002B5B] text-sm">Our Journey</span>
            </div>
            <h2 className="text-[#002B5B] mb-4">Milestones of Excellence</h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#F37021] to-[#002B5B] opacity-20"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1 lg:text-right">
                    <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                      <div className="text-3xl text-[#F37021] mb-2">{item.year}</div>
                      <h3 className="text-[#002B5B] mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F37021] to-[#F37021]/80 flex items-center justify-center shadow-lg shadow-[#F37021]/20 flex-shrink-0 z-10">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F37021] opacity-5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-6">
              <span className="text-[#002B5B] text-sm">What Drives Us</span>
            </div>
            <h2 className="text-[#002B5B] mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision and every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#F37021]/20"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#F37021] to-[#F37021]/80 flex items-center justify-center mb-6 shadow-lg shadow-[#F37021]/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[#002B5B] mb-3">{value.label}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#002B5B] to-[#002B5B]/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F37021] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how we can bring your construction vision to life with our expertise and commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#F37021] hover:bg-[#F37021]/90 text-white shadow-lg shadow-[#F37021]/20 gap-2"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#002B5B] transition-all"
            >
              View Our Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
