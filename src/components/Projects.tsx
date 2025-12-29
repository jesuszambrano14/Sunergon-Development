import { MapPin, Calendar, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import imgKilgoreFS from "../images/Kilgore Fs/3-DJI_20250903101825_0017_D.jpg";
import imgKilgoreFOC from "../images/Kilgore FOC/16-DJI_20250916121623_0036_D.jpg";
import imgMelissa6 from "../images/Melissa/melissa6.jpeg";
import img1008Devonshire from "../images/1008 Devonshire/1008Devonshire.jpeg";
import img1014Devonshire from "../images/1014 Devonshire/1014Devonshire.jpeg";
import imgStonecrest from "../images/2703 Stonecrest/StoneCrest.jpeg";
import { useRef } from "react";
import SectionBackgroundAccents from "./ui/SectionBackground";

export function Projects() {
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  
  const projects = [
    {
      image: imgKilgoreFS,
      title: "Kilgore Fire Station",
      category: "Municipal",
      location: "Kilgore, TX",
      year: "2024",
      description: "Construction of a modern fire station facility with specialized equipment bays and living quarters for emergency personnel.",
      scope: ["Site development", "Foundation work", "Structural concrete", "Utility connections"]
    },
    {
      image: imgKilgoreFOC,
      title: "Kilgore Field Operation Center",
      category: "Commercial",
      location: "Kilgore, TX",
      year: "2024",
      description: "Development of a comprehensive field operations facility designed for efficient management of municipal services.",
      scope: ["Grading & excavation", "Utility infrastructure", "Paving", "Site drainage"]
    },
    {
      image: imgMelissa6,
      title: "Christian Brothers Automotive",
      category: "Commercial",
      location: "Melissa, TX",
      year: "2024",
      description: "Construction of an automotive service center with specialized service bays, customer areas, and surrounding infrastructure.",
      scope: ["Site preparation", "Foundation work", "Utility installation", "Concrete paving"]
    },
    {
      image: img1008Devonshire,
      title: "1008 Devonshire in Forney",
      category: "Residential",
      location: "Forney, TX",
      year: "2024",
      description: "Development of residential infrastructure supporting new home construction in an expanding neighborhood.",
      scope: ["Grading", "Utility connections", "Street paving", "Drainage systems"]
    },
    {
      image: img1014Devonshire,
      title: "1014 Devonshire in Forney",
      category: "Residential",
      location: "Forney, TX",
      year: "2024",
      description: "Residential development featuring comprehensive infrastructure work to support new home construction.",
      scope: ["Site preparation", "Utility installation", "Concrete work", "Final grading"]
    },
    {
      image: imgStonecrest,
      title: "2703 Stonecrest in Sherman",
      category: "Industrial",
      location: "Sherman, TX",
      year: "2024",
      description: "Industrial facility development with specialized foundation requirements and extensive utility infrastructure.",
      scope: ["Heavy excavation", "Industrial grade utilities", "Reinforced concrete", "Paving"]
    },
  ];

  // Show only the first 3 featured projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <section 
      className="pt-24 md:pt-32 bg-gray-50 relative overflow-hidden" 
      id="projects"
      style={{ paddingBottom: '50px' }}
    >
      {/* Background Elements */}
      <SectionBackgroundAccents 
        variant="light" 
        showGrid={false}
        circlePositions={['top-right', 'bottom-left']} 
        density="medium"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal fade-up once">
          <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-6">
            <span className="text-[#001F42] text-sm font-semibold">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F42] mb-6" style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}>Featured Projects</h2>
          <div className="w-24 h-1 bg-[#F37021] mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful construction projects across Texas, showcasing our expertise in diverse sectors
          </p>
        </div>

        {/* Filter Controls removed for a cleaner, more curated look */}

        {/* Projects Grid */}
        <div 
          ref={projectsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 md:gap-x-12 gap-y-10"
        >
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-[#002B5B] mb-4">{project.title}</h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 text-[#F37021]" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 text-[#F37021]" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Building2 className="w-4 h-4 text-[#F37021]" />
                    <span>Project Scope: {project.scope[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons with increased spacing */}
        <div 
          className="pt-12 border-t border-gray-100 text-center max-w-xl mx-auto"
          style={{ marginTop: '30px' }}
        >
          {/* View All Projects Button */}
          <Link to="/projects">
            <Button className="bg-[#F37021] hover:bg-[#D85A0F] text-white shadow-lg shadow-[#F37021]/20 hover:shadow-xl transition-colors duration-200 px-8 py-3.5 group font-medium">
              View Full Portfolio
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        
      </div>
    </section>
  );
}