
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useUserContext } from '@/context/UserContext';
import { ChevronRight, Users, DollarSign, BarChart3, CheckCircle } from 'lucide-react';

interface DashboardPreviewProps {
  className?: string;
}

const DashboardPreview: React.FC<DashboardPreviewProps> = ({ className }) => {
  const { userData } = useUserContext();

  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Card className={`overflow-hidden w-full flex flex-col hover-scale ${className}`}>
      <header className="bg-primary p-4 text-white">
        <div className="flex justify-between items-center">
          <h2 className="font-medium">{userData.companyName || 'Your Company'} Reseller Dashboard</h2>
          <span className="text-xs opacity-80">{today}</span>
        </div>
      </header>
      <CardContent className="p-0 flex-1 flex flex-col">
        <div className="grid grid-cols-2 divide-x divide-y flex-shrink-0">
          <div className="p-4 flex flex-col">
            <span className="text-sm text-muted-foreground">Active Clients</span>
            <div className="flex items-center mt-2">
              <Users className="w-5 h-5 text-primary mr-2" />
              <span className="text-2xl font-semibold">{userData.clientCount || 5}</span>
            </div>
          </div>
          
          <div className="p-4 flex flex-col">
            <span className="text-sm text-muted-foreground">Monthly Revenue</span>
            <div className="flex items-center mt-2">
              <DollarSign className="w-5 h-5 text-primary mr-2" />
              <span className="text-2xl font-semibold">${userData.calculatedProfit.toLocaleString() || '0'}</span>
            </div>
          </div>
          
          <div className="p-4 flex flex-col">
            <span className="text-sm text-muted-foreground">Client Satisfaction</span>
            <div className="flex items-center mt-2">
              <CheckCircle className="w-5 h-5 text-primary mr-2" />
              <span className="text-2xl font-semibold">98%</span>
            </div>
          </div>
          
          <div className="p-4 flex flex-col">
            <span className="text-sm text-muted-foreground">Growth Rate</span>
            <div className="flex items-center mt-2">
              <BarChart3 className="w-5 h-5 text-primary mr-2" />
              <span className="text-2xl font-semibold">+12%</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-muted/30 flex-1 flex flex-col justify-end">
          <div className="flex items-center justify-between hover:bg-primary/5 p-2 rounded-md cursor-pointer transition-colors">
            <span className="font-medium">View Client Details</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="flex items-center justify-between hover:bg-primary/5 p-2 rounded-md cursor-pointer transition-colors">
            <span className="font-medium">Manage Subscriptions</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
          <div className="flex items-center justify-between hover:bg-primary/5 p-2 rounded-md cursor-pointer transition-colors">
            <span className="font-medium">Financial Reports</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardPreview;
