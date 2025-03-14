
import React from 'react';
import { useUserContext } from '@/context/UserContext';
import DashboardIframe from './dashboard/DashboardIframe';

interface DashboardPreviewProps {
  className?: string;
}

const DashboardPreview: React.FC<DashboardPreviewProps> = ({
  className
}) => {
  const { userData } = useUserContext();

  return <DashboardIframe className={className} />;
};

export default DashboardPreview;
