
import React from 'react';
import { Settings } from 'lucide-react';

interface ClientCardProps {
  name?: string;
  subtitle?: string;
  key?: number | string;
}

const ClientCard: React.FC<ClientCardProps> = ({ 
  name = "Mr. Sparkle Car Wash", 
  subtitle = "testanca",
  key
}) => {
  return (
    <div key={key} className="bg-gray-50 p-2 rounded-md flex justify-between items-center mb-2">
      <div className="flex flex-col">
        <div className="font-medium text-xs">{name}</div>
        <p className="text-gray-500 text-[10px]">{subtitle}</p>
      </div>
      <div>
        <button className="p-1 rounded-full hover:bg-gray-200">
          <Settings className="h-3 w-3 text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default ClientCard;
