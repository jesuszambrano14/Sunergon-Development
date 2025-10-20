import { Button } from "./ui/button";
import { ArrowRight, Award, Users, Briefcase } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#002B5B] opacity-5 transform skew-x-12"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F37021] rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#F37021]/10 text-[#F37021] px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm">Texas Premier Construction Partner</span>
            </div>
            
            <h1 className="text-[#002B5B] mb-6">
              Building Texas from the Ground Up
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Full-service construction excellence in grading, paving, demolition, utilities, and structural concrete.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#F37021] hover:bg-[#F37021]/90 text-white shadow-lg shadow-[#F37021]/20 hover:shadow-xl hover:shadow-[#F37021]/30 transition-all px-8 gap-2"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-[#002B5B] text-[#002B5B] hover:bg-[#002B5B] hover:text-white shadow-sm transition-all px-8"
              >
                View Projects
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
              <div>
                <div className="text-3xl text-[#F37021] mb-1">25+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl text-[#F37021] mb-1">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl text-[#F37021] mb-1">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1756402751986-15f343b1437f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBoZWF2eSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjA5MDg5MTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Construction equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1704821920298-9193dc3ddea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwcGF2aW5nJTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2MDk4MjQ3OXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Paving project"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1706581324170-d847716c4512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGZvdW5kYXRpb24lMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYwOTgyNDgwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Concrete work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1568151769173-e7784208c098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzYwOTM2Njk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Commercial construction"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F37021] flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl text-[#002B5B]">A+ Rated</div>
                  <div className="text-sm text-gray-600">BBB Accredited</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}