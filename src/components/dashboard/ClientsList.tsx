
import React from 'react';
import ClientCard from './ClientCard';

interface ClientsListProps {
  clientCount: number;
}

const ClientsList: React.FC<ClientsListProps> = ({ clientCount }) => {
  // Function to render client cards based on clientCount
  const renderClientCards = () => {
    const cards = [];
    for (let i = 0; i < clientCount; i++) {
      cards.push(
        <ClientCard key={i} />
      );
    }
    return cards;
  };

  return (
    <div className="clients-list">
      {renderClientCards()}
    </div>
  );
};

export default ClientsList;
