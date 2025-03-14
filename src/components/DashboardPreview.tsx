
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
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-48 bg-gray-50 border-r h-full">
            <div className="p-3 flex items-center justify-between border-b">
              <div className="text-sm font-medium">Dashboard</div>
              <button className="p-1 rounded-full hover:bg-gray-200">
                <Bell className="h-4 w-4 text-gray-500" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="px-3 py-2">
              <ul className="space-y-1">
                <li className="flex items-center px-2 py-1.5 text-sm bg-blue-50 text-blue-600 rounded">
                  <Users className="h-4 w-4 mr-2" />
                  <span>Clients</span>
                </li>
                <li className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">
                  <CalculatorIcon className="h-4 w-4 mr-2" />
                  <span>Invoices</span>
                </li>
                <li className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  <span>Services</span>
                </li>
                <li className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>Support</span>
                </li>
              </ul>
            </nav>
            
            {/* User profile */}
            <div className="absolute bottom-0 left-0 w-48 border-t p-3">
              <div className="flex items-center">
                <div className="bg-gray-200 rounded-full p-1.5 mr-2">
                  <UserRound className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <div className="text-xs font-medium">Your Account</div>
                  <div className="text-xs text-gray-500">Settings</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1 overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold">Your Clients</h1>
                <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-xs">
                  <PlusCircle className="h-3 w-3 mr-1" /> 
                  Add New Client
                </button>
              </div>
              
              {/* Client list */}
              <div className="mb-6">
                <div className="text-sm font-medium mb-2">Active Clients ({userData.clientCount})</div>
                {renderClientCards()}
              </div>
              
              {/* Stats */}
              <div className="bg-gray-50 p-4 rounded-lg border">
                <div className="text-sm font-medium mb-2">Monthly Summary</div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Revenue</div>
                    <div className="text-lg font-bold">${(userData.clientCount * 500).toLocaleString()}</div>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Active Services</div>
                    <div className="text-lg font-bold">{(userData.clientCount * 2).toLocaleString()}</div>
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Profit</div>
                    <div className="text-lg font-bold text-green-600">+${(userData.clientCount * 325).toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>;
};

export default DashboardPreview;
