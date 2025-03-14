
import React from 'react';
import ClientsList from './ClientsList';
import DashboardStats from './DashboardStats';

interface DashboardContentProps {
  clientCount: number;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ clientCount }) => {
  return (
    <div className="flex-1 overflow-auto">
      <ClientsList clientCount={clientCount} />
      <div className="px-6 pb-6">
        <DashboardStats clientCount={clientCount} />
      </div>
    </div>
  );
};

export default DashboardContent;
