import { MapPin, Calendar, Building2, ArrowRight, Filter } from "lucide-react";
import { Button } from "../components/ui/button";
import React, { useEffect, useRef, useState } from "react";
import imgKilgoreFS from "../images/Kilgore Fs/3-DJI_20250903101825_0017_D.jpg";
import imgKilgoreFOC from "../images/Kilgore FOC/16-DJI_20250916121623_0036_D.jpg";
import imgMelissa6 from "../images/Melissa/melissa6.jpeg";
import img1008Devonshire from "../images/1008 Devonshire/1008Devonshire.jpeg";
import img1014Devonshire from "../images/1014 Devonshire/1014Devonshire.jpeg";
import imgStonecrest from "../images/2703 Stonecrest/StoneCrest.jpeg";

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

export function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "commercial", label: "Commercial" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "industrial", label: "Industrial" },
    { id: "municipal", label: "Municipal" },
    { id: "residential", label: "Residential" },
  ];

  const projects = [
    {
      image: imgKilgoreFS,
      title: "Kilgore Fire Station",
      category: "municipal",
      categoryLabel: "Municipal",
      location: "Kilgore, TX",
      year: "2025",
      size: "25,000 sq ft",
      duration: "9 months",
      services: ["Grading", "Utilities", "Concrete", "Paving"],
      description: "Sunergon Development completed all structural and paving work for this public facility, including pier installation, concrete slab construction, and full site paving. The project reflects our commitment to precision, safety, and durable craftsmanship in municipal infrastructure.",
      status: "In Progress"
    },
    {
      image: imgKilgoreFOC,
      title: "Kilgore Field Operation Center",
      category: "municipal",
      categoryLabel: "Municipal",
      location: "Kilgore, TX",
      year: "2025",
      size: "45,000 sq ft",
      duration: "8 months",
      services: ["Grading", "Utilities", "Paving"],
      description: "Sunergon Development executed the complete structural and paving scope for this facility, including pier foundations, concrete slab placement, and full site paving. This project showcases our expertise in delivering high-quality concrete work and site development for industrial and municipal operations.",
      status: "In Progress"
    },
    {
      image: imgMelissa6,
      title: "Christian Brothers Automotive Melissa",
      category: "commercial",
      categoryLabel: "Commercial Development",
      location: "Melissa, TX",
      year: "2025",
      size: "8,500 sq ft",
      duration: "3 months",
      services: ["Grading", "Utilities", "Concrete", "Paving"],
      description: "Sunergon Development carried out the full structural and paving scope for this project, including grade beams, footings, concrete slab construction, and asphalt parking. The result is a high-quality, long-lasting foundation and surface designed to support daily commercial operations.",
      status: "Completed"
    },
    {
      image: img1008Devonshire,
      title: "1008 Devonshire",
      category: "residential",
      categoryLabel: "Residential",
      location: "Forney, TX",
      year: "2025",
      size: "0.4 acres",
      duration: "3 Weeks",
      services: ["Grading", "Utilities", "Concrete"],
      description: "Sunergon Development completed the concrete slab foundation for this custom home, ensuring precision leveling, proper reinforcement, and a smooth finish ready for framing. The work reflects our commitment to quality and long-term structural reliability.",
      status: "Completed"
    },
    {
      image: img1014Devonshire,
      title: "1014 Devonshire",
      category: "residential",
      categoryLabel: "Residential",
      location: "Forney, TX",
      year: "2025",
      size: "0.4 acres",
      duration: "3 weeks",
      services: ["Grading", "Utilities", "Concrete"],
      description: "Sunergon Development provided full slab construction for this residential property, managing excavation, formwork, reinforcement, and concrete placement. The project was delivered on schedule with a durable and clean finish that meets all structural standards.",
      status: "Completed"
    },
    {
      image: imgStonecrest,
      title: "2703 Stonecrest",
      category: "commercial",
      categoryLabel: "Commercial Development",
      location: "Sherman, TX",
      year: "2025",
      size: "12,000 sq ft",
      duration: "3 Weeks",
      services: ["Grading", "Utilities", "Concrete", "Paving"],
      description: "Sunergon Development executed the concrete foundation for this new home, delivering a reinforced and well-finished slab built to ensure stability and longevity. Our team maintained strict quality control throughout each phase of the pour and finish.",
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
                <div className="text-4xl text-[#F37021] mb-2"><Counter end={500} suffix="+" duration={2200} startDelay={0} /></div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl text-[#F37021] mb-2"><Counter end={50} prefix="$" suffix="M+" duration={2400} startDelay={200} /></div>
                <div className="text-sm text-gray-300">Total Project Value</div>
              </div>
              <div>
                <div className="text-4xl text-[#F37021] mb-2"><Counter end={100} suffix="%" duration={2000} startDelay={350} /></div>
                <div className="text-sm text-gray-300">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pt-12 pb-0 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <div className="">
              <div className="flex flex-wrap gap-2.5 md:gap-3">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    aria-pressed={filter === cat.id}
                    variant="outline"
                    className={`rounded-full px-8 md:px-10 py-3.5 md:py-4 text-base md:text-lg font-medium leading-none inline-flex items-center justify-center transition-colors transition-shadow duration-200 ${
                      filter === cat.id
                        ? "bg-[#F37021] text-white border-[#F37021] hover:bg-[#F37021]/90 hover:text-white shadow-md"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-[#F37021] hover:text-white hover:border-[#F37021] shadow-sm hover:shadow-md"
                    }`}
                    onClick={() => setFilter(cat.id)}
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
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
