import { Shield, Award, TrendingUp } from "lucide-react";

export function About() {
  const values = [
    { 
      icon: Shield, 
      label: "Safety",
      description: "Zero-compromise approach to workplace safety and OSHA compliance"
    },
    { 
      icon: Award, 
      label: "Integrity",
      description: "Transparent communication and ethical business practices"
    },
    { 
      icon: TrendingUp, 
      label: "Performance",
      description: "Exceeding expectations on every project, every time"
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Geometric Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#002B5B] opacity-5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="inline-block px-4 py-2 bg-[#002B5B]/5 rounded-full mb-6">
              <span className="text-[#002B5B] text-sm">About Us</span>
            </div>
            <h2 className="text-[#002B5B] mb-6">Building Excellence Across Texas</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              With decades of combined experience, Sunergon Development has established itself as a trusted partner 
              in the construction industry across Texas.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We deliver exceptional results through our commitment to quality craftsmanship, innovative solutions, 
              and unwavering dedication to our clients' success. From initial site preparation to final structural 
              elements, we handle every phase with precision and professionalism.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1723367194881-fe2e53534170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYWVyaWFsfGVufDF8fHx8MTc2MDk0MTUyOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Construction site"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#F37021] opacity-10 rounded-2xl -z-10"></div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl hover:border-[#F37021]/20 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#F37021] to-[#F37021]/80 flex items-center justify-center mb-6 shadow-lg shadow-[#F37021]/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[#002B5B] mb-3">{value.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}