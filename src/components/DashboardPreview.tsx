
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
  const { userData } = useUserContext();
  
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  
  return (
    <Card className={`overflow-hidden w-full flex flex-col ${className}`}>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-bold text-lg">
              {userData.companyName || 'Your Company'} Dashboard
            </h3>
            <p className="text-xs text-muted-foreground">{today}</p>
          </div>
          <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium">
            Reseller Portal
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Active Clients</p>
                  <p className="font-semibold">{userData.clientCount || 5}</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <DollarSign className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Monthly Revenue</p>
                  <p className="font-semibold">${userData.calculatedProfit?.toLocaleString() || '0'}</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white mb-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Growth Summary</h4>
            <BarChart3 className="h-4 w-4" />
          </div>
          <p className="text-xs text-blue-100 mb-1">Annual Projection</p>
          <p className="text-xl font-bold">${(userData.calculatedProfit * 12)?.toLocaleString() || '0'}</p>
        </div>
        
        <div className="space-y-2">
          <div className="text-sm font-medium mb-1">Quick Actions</div>
          
          <div className="flex items-center p-2 rounded-md hover:bg-blue-50 cursor-pointer">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
              <CheckCircle className="h-3 w-3 text-blue-600" />
            </div>
            <span className="text-sm">Add New Client</span>
          </div>
          
          <div className="flex items-center p-2 rounded-md hover:bg-blue-50 cursor-pointer">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
              <CheckCircle className="h-3 w-3 text-blue-600" />
            </div>
            <span className="text-sm">View Analytics</span>
          </div>
          
          <div className="flex items-center p-2 rounded-md hover:bg-blue-50 cursor-pointer">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-2">
              <CheckCircle className="h-3 w-3 text-blue-600" />
            </div>
            <span className="text-sm">Manage Billing</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardPreview;
