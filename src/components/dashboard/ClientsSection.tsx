
import React from 'react';
import ClientCard from './ClientCard';
import { Client } from '@/utils/clientUtils';

interface ClientsSectionProps {
  clientCount: number;
  clients: Client[];
  remainingSlots: number;
}

const ClientsSection: React.FC<ClientsSectionProps> = ({
  clientCount,
  clients,
  remainingSlots
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-2 md:p-3 mb-2 md:mb-3">
      <h2 className="text-xs md:text-base font-bold mb-1">Active Clients ({clientCount})</h2>
      <p className="text-gray-600 text-xs mb-1 md:mb-2">
        {remainingSlots > 0 
          ? `You have set up ${clientCount} of 5 accounts. You can add ${remainingSlots} more client(s).`
          : `You've reached your limit of 5 clients. Upgrade your plan to add more.`
        }
      </p>
      
      {clientCount > 0 && (
        <div className="bg-gray-50 rounded-md p-1 md:p-2 max-w-xs">
          {clients.map((client, index) => (
            <ClientCard
              key={index}
              name={client.name}
              location={client.location}
              icon={client.type.icon}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientsSection;
