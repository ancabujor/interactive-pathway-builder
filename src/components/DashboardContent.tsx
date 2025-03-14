
import React from 'react';
import Sidebar from './dashboard/Sidebar';
import MainContent from './dashboard/MainContent';

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
  
  return (
    <div className="flex h-full w-full overflow-hidden bg-white shadow-sm rounded-lg border">
      <Sidebar />
      <MainContent 
        companyName={companyName}
        clientCount={clientCount}
        location={location}
      />
    </div>
  );
};

export default DashboardContent;
