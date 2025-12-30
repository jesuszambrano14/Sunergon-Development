import { MapPin } from "lucide-react";

export function TexasServiceMap() {
  // Define city locations for the service area chips
  const serviceCities = [
    "Dallas", 
    "Frisco", 
    "McKinney", 
    "Plano", 
    "Little Elm", 
    "Prosper", 
    "Aubrey"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
          
          {/* Left column: Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#002B5B]">Serving All of Texas</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Commercial & public construction services across the state — with <span className="font-medium">focused coverage in North Texas</span>.
            </p>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium text-[#002B5B] mb-4">Focused Coverage: Dallas–Fort Worth & North Texas</h3>
              <div className="flex flex-wrap gap-2">
                {serviceCities.map((city) => (
                  <div 
                    key={city}
                    className="inline-flex items-center px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#F37021]" strokeWidth={2.5} />
                    {city}
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Coverage Highlights</h4>
                <ul className="text-gray-700 space-y-2.5">
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F37021]/20 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-[#F37021]"></span>
                    </div>
                    <span className="font-medium">Dallas–Fort Worth Metroplex</span> — Primary Focus
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F37021]/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-[#F37021]"></span>
                    </div>
                    <span className="font-medium">North Texas Counties</span> — Full Service
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F37021]/10 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-[#F37021]"></span>
                    </div>
                    <span className="font-medium">Statewide</span> — Select Projects
                  </li>
                </ul>
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
              src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=Dallas-Fort Worth metroplex&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Sunergon Service Area Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
