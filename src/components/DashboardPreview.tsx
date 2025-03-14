
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useUserContext } from '@/context/UserContext';
import DashboardSidebar from './dashboard/DashboardSidebar';
import DashboardContent from './dashboard/DashboardContent';

interface DashboardPreviewProps {
  className?: string;
}

const DashboardPreview: React.FC<DashboardPreviewProps> = ({
  className
}) => {
  const {
    userData
  } = useUserContext();

  return (
    <Card className={`w-full h-full overflow-hidden ${className}`}>
      <CardContent className="p-0 h-full">
        <div className="flex h-full">
          {/* Sidebar */}
          <DashboardSidebar />
          
          {/* Main content */}
          <DashboardContent clientCount={userData.clientCount} />
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardPreview;
