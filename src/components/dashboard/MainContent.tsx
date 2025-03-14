
import React from 'react';
import Header from './Header';
import ReceptionistsHeader from './ReceptionistsHeader';
import QuickActionsSection from './QuickActionsSection';
import ClientsSection from './ClientsSection';
import TrialAccountsSection from './TrialAccountsSection';
import { User, Building, Package, File, Briefcase } from 'lucide-react';

interface MainContentProps {
  companyName: string;
  clientCount: number;
  location: string;
}

const MainContent: React.FC<MainContentProps> = ({
  companyName,
  clientCount,
  location
}) => {
  // Calculate remaining available client slots (out of 5)
  const remainingSlots = 5 - Math.min(clientCount, 5);
  
  // Generic client types with icons
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
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header companyName={companyName} />
      
      <div className="flex-1 overflow-auto p-2 md:p-4 bg-gray-50">
        <ReceptionistsHeader />
        <QuickActionsSection location={location} />
        <ClientsSection 
          clientCount={clientCount} 
          clients={clients} 
          remainingSlots={remainingSlots} 
        />
        <TrialAccountsSection />
      </div>
    </div>
  );
};

export default MainContent;
