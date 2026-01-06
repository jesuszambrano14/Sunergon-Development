// Texas Service Map Component

export function TexasServiceMap() {
  // Coverage tiers data structure
  const coverageTiers = [
    {
      title: "Primary Focus",
      region: "Dallas–Fort Worth Metro",
      description: "Core service area with dedicated local teams",
      priority: 1
    },
    {
      title: "Full Service Area",
      region: "North Texas Counties", 
      description: "Complete construction capabilities",
      priority: 2
    },
    {
      title: "Statewide Availability",
      region: "Select Projects Across Texas",
      description: "For qualifying commercial & public sector projects",
      priority: 3
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left column: Coverage Information */}
          <div>
            {/* Header Section - Clean & Minimal */}
            <div className="mb-8">
              <div className="inline-block mb-2">
                <div className="h-0.5 w-12 bg-[#F37021] mb-3"></div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#002B5B]">Texas Coverage</h2>
              </div>
              <p className="text-gray-600 mt-3 max-w-xl">
                Strategic construction services throughout Texas with specialized expertise in the North Texas region.
              </p>
            </div>
            
            {/* Coverage Tiers - Softer Card Layout with Better Spacing */}
            <div className="space-y-8">
              {coverageTiers.map((tier) => (
                <div 
                  key={tier.title} 
                  className="group cursor-pointer p-1"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 rounded-full flex-shrink-0 bg-[#F37021]"></div>
                      <h3 className="font-semibold text-[#002B5B] ml-3 group-hover:text-[#002B5B]/80">{tier.title}</h3>
                    </div>
                    
                    <div className="ml-6 pl-3">
                      <div className="flex items-center mb-2">
                        <span className="text-xs mr-2 text-[#F37021]">●</span>
                        <p className="text-lg font-medium text-gray-800 group-hover:text-[#001F42]">{tier.region}</p>
                      </div>
                      <p className="text-sm text-gray-600 ml-4">{tier.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Supporting Information - Clean with Better Spacing */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-start cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-[#F37021] mt-1.5 mr-3 flex-shrink-0"></div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  <span className="text-[#002B5B] font-semibold">Need a project outside our service area?</span> Contact us to discuss availability and capabilities for your specific requirements.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right column: Google Map */}
          <div className="rounded-xl border border-gray-200 shadow-md bg-slate-50/70 p-2 relative aspect-square w-full overflow-hidden">
            <iframe 
              id="map-canvas" 
              className="map_part w-full h-full rounded-lg" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Sunergon+Headquarters@4122+Cowling+Rd,+Sanger,+Texas&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Sunergon Service Area Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
