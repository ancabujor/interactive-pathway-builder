
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useUserContext } from '@/context/UserContext';
import { Users, CalculatorIcon, ShoppingCart, Phone, PlusCircle, Settings, Bell, UserRound } from 'lucide-react';

interface DashboardPreviewProps {
  className?: string;
}

const DashboardPreview: React.FC<DashboardPreviewProps> = ({
  className
}) => {
  const {
    userData
  } = useUserContext();

  // Function to render client cards based on clientCount
  const renderClientCards = () => {
    const cards = [];
    for (let i = 0; i < userData.clientCount; i++) {
      cards.push(
        <div key={i} className="bg-gray-50 p-2 rounded-md flex justify-between items-center mb-2">
          <div className="flex flex-col">
            <div className="font-medium text-xs">Mr. Sparkle Car Wash</div>
            <p className="text-gray-500 text-[10px]">testanca</p>
          </div>
          <div>
            <button className="p-1 rounded-full hover:bg-gray-200">
              <Settings className="h-3 w-3 text-gray-500" />
            </button>
          </div>
        </div>
      );
    }
    return cards;
  };

  return <Card className={`w-full h-full overflow-hidden ${className}`}>
      <CardContent className="p-0 h-full">
        <iframe 
          src="https://demo.folio.la/uOlaHJrK" 
          className="w-full h-full border-0" 
          title="Dashboard Preview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </CardContent>
    </Card>;
};

export default DashboardPreview;
