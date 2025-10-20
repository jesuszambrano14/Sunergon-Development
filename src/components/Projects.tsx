import { MapPin, Calendar } from "lucide-react";

export function Projects() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1723367194881-fe2e53534170?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYWVyaWFsfGVufDF8fHx8MTc2MDk0MTUyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Kilgore Field Operations Center",
      category: "Commercial Development",
      location: "Kilgore, TX",
      year: "2024"
    },
    {
      image: "https://images.unsplash.com/photo-1704821920298-9193dc3ddea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwcGF2aW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MDk4MjQ3OXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Highway 75 Expansion",
      category: "Paving & Grading",
      location: "McKinney, TX",
      year: "2024"
    },
    {
      image: "https://images.unsplash.com/photo-1568151769173-e7784208c098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYwOTM2Njk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Melissa Commercial Pads",
      category: "Site Development",
      location: "Melissa, TX",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1706581324170-d847716c4512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZvdW5kYXRpb24lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYwOTgyNDgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Frisco Distribution Center",
      category: "Structural Concrete",
      location: "Frisco, TX",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1723369962563-5e873df9b93b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW1vbGl0aW9uJTIwc2l0ZXxlbnwxfHx8fDE3NjA5ODI0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Downtown Redevelopment",
      category: "Demolition & Utilities",
      location: "Dallas, TX",
      year: "2023"
    },
    {
      image: "https://images.unsplash.com/photo-1756402751986-15f343b1437f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBoZWF2eSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjA5MDg5MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Industrial Park Infrastructure",
      category: "Complete Site Work",
      location: "Plano, TX",
      year: "2024"
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gray-50 rounded-full shadow-sm mb-6">
            <span className="text-[#002B5B] text-sm">Our Work</span>
          </div>
          <h2 className="text-[#002B5B] mb-6">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful construction projects across Texas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                <div className="absolute top-4 right-4">
                  <span className="bg-white text-[#F37021] px-3 py-1 rounded-full text-sm shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-[#002B5B] mb-4">{project.title}</h3>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 text-[#F37021]" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 text-[#F37021]" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}