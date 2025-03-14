
import React from 'react';
import { PlusCircle } from 'lucide-react';
import ClientCard from './ClientCard';

interface ClientsListProps {
  clientCount: number;
}

const ClientsList: React.FC<ClientsListProps> = ({ clientCount }) => {
  // Function to render client cards based on clientCount
  const renderClientCards = () => {
    const cards = [];
    for (let i = 0; i < clientCount; i++) {
      cards.push(<ClientCard key={i} index={i} />);
    }
    return cards;
  };

  return (
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
        <div className="text-sm font-medium mb-2">Active Clients ({clientCount})</div>
        {renderClientCards()}
      </div>
    </div>
  );
};

export default ClientsList;
