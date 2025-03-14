
import React from 'react';
import Header from './Header';
import ReceptionistsHeader from './ReceptionistsHeader';
import QuickActionsSection from './QuickActionsSection';
import ClientsSection from './ClientsSection';
import TrialAccountsSection from './TrialAccountsSection';
import { generateClients, calculateRemainingSlots } from '@/utils/clientUtils';

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
  // Calculate remaining available client slots
  const remainingSlots = calculateRemainingSlots(clientCount);
  
  // Generate array of client data
  const clients = generateClients(companyName, clientCount, location);

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Header companyName={companyName} />
      
      <div className="flex-1 overflow-hidden p-1 md:p-2 bg-gray-50">
        <div className="h-full overflow-auto">
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
    </div>
  );
};

export default MainContent;
