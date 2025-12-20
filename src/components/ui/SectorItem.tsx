import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectorItemProps {
  icon: LucideIcon;
  name: string;
}

export const SectorItem: React.FC<SectorItemProps> = ({ icon: Icon, name }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#F37021]/20 transition-all duration-300 hover:-translate-y-1 group">
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#002B5B]/90 to-[#001F42] flex items-center justify-center text-white group-hover:from-[#F37021] group-hover:to-[#D85A0F] transition-all duration-300">
        <Icon className="w-7 h-7" />
      </div>
      <span className="text-[#001F42] font-medium text-sm text-center group-hover:text-[#D85A0F] transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

export default SectorItem;
