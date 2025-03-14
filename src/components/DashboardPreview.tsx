
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useUserContext } from '@/context/UserContext';
import { ChevronRight, Users, DollarSign, BarChart3, TrendingUp, LineChart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

  const monthlyInvestment = userData.clientCount * 50; // Cost per client
  const monthlyProfit = userData.calculatedProfit || 0;
  const annualProfit = monthlyProfit * 12;
  const roi = monthlyInvestment > 0 ? ((monthlyProfit / monthlyInvestment) * 100).toFixed(0) : 0;

  const chartData = [
    { name: 'Jan', investment: monthlyInvestment, profit: monthlyProfit },
    { name: 'Feb', investment: monthlyInvestment, profit: monthlyProfit * 1.1 },
    { name: 'Mar', investment: monthlyInvestment, profit: monthlyProfit * 1.2 },
    { name: 'Apr', investment: monthlyInvestment, profit: monthlyProfit * 1.3 },
    { name: 'May', investment: monthlyInvestment, profit: monthlyProfit * 1.4 },
    { name: 'Jun', investment: monthlyInvestment, profit: monthlyProfit * 1.5 },
  ];

  return <Card className={`overflow-hidden w-full flex flex-col ${className}`}>
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
        
        {/* Investment & Profit Overview */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white mb-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium">Investment & Profit</h4>
            <TrendingUp className="h-4 w-4" />
          </div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div>
              <p className="text-xs text-blue-100 mb-1">Monthly Investment</p>
              <p className="text-sm font-bold">${monthlyInvestment.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-blue-100 mb-1">Monthly Profit</p>
              <p className="text-sm font-bold">${monthlyProfit.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-blue-100 mb-1">ROI</p>
              <p className="text-sm font-bold">{roi}%</p>
            </div>
          </div>
          <p className="text-xs text-blue-100 mb-1">Annual Projection</p>
          <p className="text-xl font-bold">${annualProfit.toLocaleString()}</p>
        </div>
        
        {/* Chart */}
        <div className="mb-4 bg-white p-3 rounded-lg border border-blue-100">
          <div className="flex items-center mb-2">
            <LineChart className="h-4 w-4 text-blue-600 mr-2" />
            <h4 className="text-sm font-medium">6-Month Projection</h4>
          </div>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip />
                <Bar dataKey="investment" name="Investment" fill="#93c5fd" />
                <Bar dataKey="profit" name="Profit" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>;
};

export default DashboardPreview;
