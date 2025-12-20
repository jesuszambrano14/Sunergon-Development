import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1">
      <div className="w-20 h-20 bg-[#F0F9F9] rounded-full flex items-center justify-center mb-5 shadow-sm">
        <Icon className="w-8 h-8 text-[#00BBC9]" />
      </div>
      <h3 className="uppercase text-lg font-bold mb-4 text-[#333333]">{title}</h3>
      <p className="text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceItem;
