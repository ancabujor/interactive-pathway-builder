import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useUserContext } from '@/context/UserContext';
import { ChevronRight, Users, DollarSign, BarChart3, CheckCircle } from 'lucide-react';
interface DashboardPreviewProps {
  className?: string;
}
const DashboardPreview: React.FC<DashboardPreviewProps> = ({
  className
}) => {
  const {
    userData
  } = useUserContext();
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  return <Card className={`overflow-hidden w-full flex flex-col hover-scale ${className}`}>
      
      
    </Card>;
};
export default DashboardPreview;