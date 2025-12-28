import { useState } from "react";
import { MapPin } from "lucide-react";

export function TexasServiceMap() {
  // Define the North Texas region highlight and pin - updated
  const northTexas = {
    label: "North Texas",
    description: "Dallas–Fort Worth Metroplex & surrounding cities",
    x: 260,
    y: 105
  };

  // Define city locations for the service area chips (not for pins on the map)
  const serviceCities = [
    "Dallas", 
    "Frisco", 
    "McKinney", 
    "Plano", 
    "Little Elm", 
    "Prosper", 
    "Aubrey"
  ];

  const [isActive, setIsActive] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
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
                    onMouseEnter={() => setIsActive(true)}
                    onMouseLeave={() => setIsActive(false)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Service area: ${city}`}
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
          
          {/* Right column: Texas Map SVG */}
          <div className="rounded-xl border border-gray-200 shadow-md bg-slate-50/70 p-4 relative h-[420px]">
            <svg 
              viewBox="0 0 400 400" 
              className="w-full h-full"
              role="img"
              aria-label="Map of Texas showing Sunergon service areas"
            >
              {/* Texas outline SVG path */}
              <path 
                d="M56,106 L61,62 L70,28 L123,34 L237,44 L304,50 L306,59 L317,59 L325,69 L331,69 L328,78 L338,78 L338,85 L346,89 L348,98 L357,104 L361,118 L375,126 L376,134 L386,137 L395,148 L395,164 L383,168 L383,180 L363,204 L350,211 L345,227 L336,231 L336,250 L329,255 L329,273 L320,284 L298,284 L283,297 L280,313 L271,318 L261,318 L261,305 L251,292 L238,293 L231,304 L219,312 L217,326 L180,377 L169,375 L159,368 L150,358 L131,356 L117,348 L106,337 L101,326 L93,320 L82,303 L76,297 L68,296 L59,288 L59,264 L74,264 L74,243 L65,233 L65,225 L54,214 L52,196 L59,185 L60,165 L75,151 L76,138 L61,119 L56,106" 
                fill="#f0f4f9"
                stroke="#002B5B" 
                strokeWidth="2" 
                className="transition-all duration-300"
              />

              {/* North Texas region highlight (ellipse) */}
              <ellipse 
                cx="260" 
                cy="105" 
                rx="55" 
                ry="40" 
                fill="#F37021" 
                fillOpacity="0.12" 
                stroke="#F37021"
                strokeOpacity="0.25"
                strokeWidth="1.5"
                className="transition-all duration-300"
              />
              
              {/* North Texas callout line */}
              <line 
                x1={northTexas.x + 12} 
                y1={northTexas.y - 10} 
                x2={northTexas.x + 80} 
                y2={northTexas.y - 35}
                stroke="#002B5B" 
                strokeOpacity="0.6"
                strokeWidth="0.75"
                className={`${isActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
              />
              
              {/* North Texas callout box */}
              <g className={`${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-300 transform origin-bottom-left`}
                 transform={`translate(${northTexas.x + 80}, ${northTexas.y - 45})`}>
                <rect 
                  x="-65" 
                  y="-25" 
                  width="130" 
                  height="36" 
                  rx="4" 
                  fill="white" 
                  stroke="#002B5B"
                  strokeOpacity="0.2"
                  strokeWidth="1"
                  filter="drop-shadow(0 1px 2px rgba(0,0,0,0.1))"
                />
                <text 
                  textAnchor="middle" 
                  x="0" 
                  y="-10" 
                  fill="#002B5B" 
                  fontSize="10" 
                  fontWeight="600"
                >
                  North Texas
                </text>
                <text 
                  textAnchor="middle" 
                  x="0" 
                  y="5" 
                  fill="#475569" 
                  fontSize="7"
                >
                  Dallas–Fort Worth Metroplex & surrounding cities
                </text>
              </g>

              {/* Single North Texas pin */}
              <g 
                className={`cursor-pointer transition-transform duration-300 ${isActive ? 'scale-125' : ''}`}
                tabIndex={0}
                role="button"
                aria-label="North Texas: Dallas–Fort Worth Metroplex & surrounding cities"
                transform={`translate(${northTexas.x}, ${northTexas.y})`}
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
              >
                {/* Pin shadow (subtle) */}
                <circle 
                  r="5.5" 
                  fill="rgba(0,0,0,0.1)" 
                  transform="translate(1, 1)" 
                />
                
                {/* Pin base */}
                <circle 
                  r="6" 
                  fill={isActive ? '#F37021' : '#F37021'}
                  fillOpacity={isActive ? '1' : '0.8'}
                  stroke="#fff"
                  strokeWidth="1.5"
                  className="transition-all duration-200"
                />
                
                {/* Pin center */}
                <circle 
                  r="2" 
                  fill="#fff" 
                />
              </g>
            </svg>
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="block w-2.5 h-2.5 rounded-full bg-[#F37021]"></span>
                Primary Coverage Area
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
