
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, Phone, Calculator, DollarSign, 
  Plus, Settings, LogOut, BookOpen, 
  Globe, FileText, Box, LifeBuoy, 
  File, User, Package, Briefcase, Building
} from 'lucide-react';

interface DashboardContentProps {
  userData?: {
    companyName: string;
    clientCount: number;
    location: string;
  };
}

const DashboardContent: React.FC<DashboardContentProps> = ({ userData }) => {
  const companyName = userData?.companyName || 'Your Company';
  const clientCount = userData?.clientCount || 1;
  const location = userData?.location || 'United States';
  
  // Calculate remaining available client slots (out of 5)
  const remainingSlots = 5 - Math.min(clientCount, 5);
  
  // Generic client titles with icons to use for the cards
  const clientTypes = [
    { title: "Primary Client", icon: <User className="h-4 w-4 text-blue-600" /> },
    { title: "Business Account", icon: <Building className="h-4 w-4 text-green-600" /> },
    { title: "Service Client", icon: <Package className="h-4 w-4 text-purple-600" /> },
    { title: "Project Account", icon: <File className="h-4 w-4 text-orange-600" /> },
    { title: "Partner Client", icon: <Briefcase className="h-4 w-4 text-red-600" /> },
  ];
  
  // Generate array of client data based on client count
  const generateClients = () => {
    return Array.from({ length: Math.min(clientCount, 5) }, (_, index) => ({
      name: `${companyName} ${index > 0 ? (index + 1) : ''}`,
      type: clientTypes[index % clientTypes.length],
      location: location
    }));
  };
  
  const clients = generateClients();
  
  return (
    <div className="flex h-full w-full overflow-hidden bg-white shadow-sm rounded-lg border">
      {/* Sidebar */}
      <div className="w-16 md:w-52 bg-[#f8f9ff] border-r h-full flex flex-col">
        <div className="p-2 md:p-4 border-b flex items-center">
          <div className="flex text-blue-600 font-bold items-center">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-600 mr-1 md:mr-2 flex items-center justify-center">
              <span className="text-white text-xs">🎧</span>
            </div>
            <span className="text-sm md:text-xl truncate">AI Front Desk</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto">
          <nav className="p-1 md:p-2">
            <div className="py-1 md:py-2">
              <div className="flex items-center text-blue-600 bg-blue-50 px-2 md:px-3 py-1 md:py-2 rounded-md my-1">
                <Users className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm truncate">My Receptionists</span>
              </div>
              
              <div className="flex items-center justify-between text-gray-700 px-2 md:px-3 py-1 md:py-2 rounded-md my-1 hover:bg-gray-100">
                <div className="flex items-center">
                  <Users className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                  <span className="text-xs md:text-sm truncate">Plans</span>
                </div>
                <span className="text-xs">▼</span>
              </div>
              
              <div className="hidden md:flex items-center text-gray-700 px-3 py-2 rounded-md my-1 hover:bg-gray-100">
                <Box className="h-5 w-5 mr-2" />
                <span>Embed</span>
              </div>
              
              <div className="hidden md:flex items-center justify-between text-gray-700 px-3 py-2 rounded-md my-1 hover:bg-gray-100">
                <div className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  <span>Branding Configuration</span>
                </div>
                <span>▼</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white p-2 md:p-4 border-b flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-md p-1 mr-2 md:mr-3">
              <span className="text-xs md:text-sm">{companyName.substring(0, 2).toUpperCase()}</span>
            </div>
            <h1 className="text-sm md:text-xl font-bold truncate">{companyName}</h1>
          </div>
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600">👤</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto p-2 md:p-4 bg-gray-50">
          <div className="bg-white rounded-lg shadow-sm p-2 md:p-4 mb-3 md:mb-4">
            <div className="flex justify-between items-center mb-2 md:mb-4">
              <h2 className="text-sm md:text-xl font-bold">All Receptionists</h2>
              <div className="hidden md:flex space-x-2">
                <Button variant="outline" className="flex items-center" size="sm">
                  <Box className="mr-1 h-3 w-3 md:mr-2 md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm">Embed</span>
                </Button>
                <Button variant="outline" className="flex items-center" size="sm">
                  <Calculator className="mr-1 h-3 w-3 md:mr-2 md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm">Calculate</span>
                </Button>
                <Button className="flex items-center" size="sm">
                  <Plus className="mr-1 h-3 w-3 md:mr-2 md:h-4 md:w-4" />
                  <span className="text-xs md:text-sm">Add Seats</span>
                </Button>
              </div>
              <div className="flex md:hidden">
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-2 md:p-4 mb-3 md:mb-4">
            <h2 className="text-sm md:text-lg font-bold mb-2 md:mb-3">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
              <Card className="border hover:border-blue-300 cursor-pointer transition-all">
                <CardContent className="p-2 md:p-4">
                  <div className="flex">
                    <div className="rounded-full bg-blue-100 p-2 md:p-3 mr-2 md:mr-4">
                      <Plus className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm md:text-lg">Add New Client</h3>
                      <p className="text-gray-600 text-xs md:text-sm line-clamp-2">
                        Setup a new business account in {location}.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border hover:border-blue-300 cursor-pointer transition-all">
                <CardContent className="p-2 md:p-4">
                  <div className="flex">
                    <div className="rounded-full bg-blue-100 p-2 md:p-3 mr-2 md:mr-4">
                      <Phone className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm md:text-lg">Create Trial</h3>
                      <p className="text-gray-600 text-xs md:text-sm line-clamp-2">
                        Set up a free trial for a prospect.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-2 md:p-4 mb-3 md:mb-4">
            <h2 className="text-sm md:text-lg font-bold mb-1 md:mb-2">Active Clients ({clientCount})</h2>
            <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-4">
              {remainingSlots > 0 
                ? `You have set up ${clientCount} of 5 accounts. You can add ${remainingSlots} more client(s).`
                : `You've reached your limit of 5 clients. Upgrade your plan to add more.`
              }
            </p>
            
            {clientCount > 0 && (
              <div className="bg-gray-50 rounded-md p-2 md:p-4 max-w-xs">
                {clients.map((client, index) => (
                  <div key={index} className="flex justify-between items-center mb-2 last:mb-0 client-card-enter">
                    <div className="flex items-center">
                      <div className="mr-2">
                        {client.type.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-xs md:text-sm">{client.name}</h3>
                        <div className="text-xs text-gray-500 flex items-center">
                          <Globe className="h-3 w-3 mr-1" />
                          <span>{client.location}</span>
                        </div>
                      </div>
                    </div>
                    <Settings className="h-4 w-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-2 md:p-4 mb-3 md:mb-4">
            <h2 className="text-sm md:text-lg font-bold mb-1 md:mb-2">Trial Accounts (0 / ∞)</h2>
            <p className="text-gray-600 text-xs md:text-sm">
              No trial accounts yet. Create your first one!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
