import { MapPin, Calendar, Building2, ArrowRight, Filter } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { useState } from "react";

export function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "commercial", label: "Commercial" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "industrial", label: "Industrial" },
    { id: "municipal", label: "Municipal" },
  ];

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1723367194881-fe2e53534170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYWVyaWFsfGVufDF8fHx8MTc2MDk0MTUyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Kilgore Field Operations Center",
      category: "commercial",
      categoryLabel: "Commercial Development",
      location: "Kilgore, TX",
      year: "2024",
      size: "45,000 sq ft",
      duration: "8 months",
      services: ["Grading", "Utilities", "Paving"],
      description: "Complete site development for a new field operations facility including earthwork, utility installation, and paving.",
      status: "Completed"
    },
    {
      image: "https://images.unsplash.com/photo-1704821920298-9193dc3ddea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwcGF2aW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MDk4MjQ3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Highway 75 Expansion",
      category: "infrastructure",
      categoryLabel: "Infrastructure",
      location: "McKinney, TX",
      year: "2024",
      size: "2.5 miles",
      duration: "12 months",
      services: ["Grading", "Paving", "Utilities"],
      description: "Major highway expansion project including lane additions, drainage improvements, and full paving.",
      status: "Completed"
    },
    {
      image: "https://images.unsplash.com/photo-1568151769173-e7784208c098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYwOTM2Njk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Melissa Commercial Pads",
      category: "commercial",
      categoryLabel: "Site Development",
      location: "Melissa, TX",
      year: "2023",
      size: "15 acres",
      duration: "6 months",
      services: ["Grading", "Utilities", "Concrete"],
      description: "Multi-pad commercial development with comprehensive site work and infrastructure.",
      status: "Completed"
    },
    {
      image: "https://images.unsplash.com/photo-1706581324170-d847716c4512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZvdW5kYXRpb24lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYwOTgyNDgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Frisco Distribution Center",
      category: "industrial",
      categoryLabel: "Industrial",
      location: "Frisco, TX",
      year: "2023",
      size: "120,000 sq ft",
      duration: "10 months",
      services: ["Grading", "Concrete", "Paving"],
      description: "Large-scale distribution facility with structural concrete foundations and extensive site improvements.",
      status: "Completed"
    },
    {
      image: "https://images.unsplash.com/photo-1723369962563-5e873df9b93b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW1vbGl0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NjA5ODI0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Downtown Redevelopment",
      category: "municipal",
      categoryLabel: "Municipal",
      location: "Dallas, TX",
      year: "2023",
      size: "3 blocks",
      duration: "14 months",
      services: ["Demolition", "Utilities", "Grading"],
      description: "Downtown revitalization project including demolition, utility upgrades, and site preparation.",
      status: "Completed"
    },
    {
      image: "https://images.unsplash.com/photo-1756402751986-15f343b1437f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBoZWF2eSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjA5MDg5MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Industrial Park Infrastructure",
      category: "industrial",
      categoryLabel: "Industrial",
      location: "Plano, TX",
      year: "2024",
      size: "50 acres",
      duration: "9 months",
      services: ["Grading", "Utilities", "Paving", "Concrete"],
      description: "Complete infrastructure for new industrial park including roads, utilities, and drainage systems.",
      status: "In Progress"
    },
    {
      image: "https://images.unsplash.com/photo-1541888915364-aaeed51d238b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjA5ODIzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Corporate Campus Phase II",
      category: "commercial",
      categoryLabel: "Commercial",
      location: "Richardson, TX",
      year: "2024",
      size: "25 acres",
      duration: "11 months",
      services: ["Grading", "Paving", "Utilities"],
      description: "Expansion of corporate campus with parking structures and site improvements.",
      status: "In Progress"
    },
    {
      image: "https://images.unsplash.com/photo-1729551610640-e8adee1172e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBibHVlcHJpbnQlMjBwbGFuc3xlbnwxfHx8fDE3NjA4OTgxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Municipal Water Treatment Facility",
      category: "municipal",
      categoryLabel: "Municipal",
      location: "Allen, TX",
      year: "2023",
      size: "20,000 sq ft",
      duration: "15 months",
      services: ["Concrete", "Utilities", "Grading"],
      description: "New water treatment facility with extensive concrete work and utility connections.",
      status: "Completed"
    },
    {
      image: "https://images.unsplash.com/photo-1700204168269-17794b26924e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzYWZldHklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYwOTc1ODY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Retail Plaza Development",
      category: "commercial",
      categoryLabel: "Commercial",
      location: "Prosper, TX",
      year: "2023",
      size: "8 acres",
      duration: "7 months",
      services: ["Grading", "Paving", "Utilities"],
      description: "Retail development with parking lots, sidewalks, and comprehensive drainage systems.",
      status: "Completed"
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

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
              <span className="text-[#F37021] text-sm">Our Portfolio</span>
            </div>
            <h1 className="text-white mb-6">
              Proven Excellence Across Texas
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Explore our portfolio of successful construction projects spanning commercial, industrial, infrastructure, and municipal developments across the state.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl text-[#F37021] mb-2">500+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl text-[#F37021] mb-2">$50M+</div>
                <div className="text-sm text-gray-300">Total Project Value</div>
              </div>
              <div>
                <div className="text-4xl text-[#F37021] mb-2">100%</div>
                <div className="text-sm text-gray-300">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-100 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span>Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={filter === cat.id ? "default" : "outline"}
                  className={`rounded-full ${
                    filter === cat.id 
                      ? "bg-[#F37021] hover:bg-[#F37021]/90 text-white shadow-lg shadow-[#F37021]/20" 
                      : "border-gray-300 text-gray-700 hover:border-[#F37021] hover:text-[#F37021]"
                  }`}
                  onClick={() => setFilter(cat.id)}
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <Badge className="bg-white text-[#F37021] hover:bg-white shadow-lg">
                      {project.categoryLabel}
                    </Badge>
                    <Badge 
                      className={`${
                        project.status === "Completed" 
                          ? "bg-green-500 hover:bg-green-500" 
                          : "bg-blue-500 hover:bg-blue-500"
                      } text-white shadow-lg`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-[#002B5B] mb-4">{project.title}</h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 text-[#F37021]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 text-[#F37021]" />
                      <span>{project.year} • {project.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Building2 className="w-4 h-4 text-[#F37021]" />
                      <span>{project.size}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#002B5B] to-[#002B5B]/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F37021] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-white mb-6">Start Your Next Project</h2>
          <p className="text-xl text-gray-200 mb-8">
            Ready to add your project to our portfolio of success stories? Let's discuss how we can bring your vision to life.
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
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
