
import React from 'react';
import { Globe, Settings } from 'lucide-react';

interface ClientCardProps {
  name: string;
  location: string;
  icon: React.ReactNode;
}

const ClientCard: React.FC<ClientCardProps> = ({
  name,
  location,
  icon
}) => {
  return (
    <div className="flex justify-between items-center mb-2 last:mb-0 client-card-enter">
      <div className="flex items-center">
        <div className="mr-2">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-xs md:text-sm">{name}</h3>
          <div className="text-xs text-gray-500 flex items-center">
            <Globe className="h-3 w-3 mr-1" />
            <span>{location}</span>
          </div>
        </div>
      </div>
      <Settings className="h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" />
    </div>
  );
};

export default ClientCard;
