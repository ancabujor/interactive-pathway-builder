
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Phone, DollarSign, CalculatorIcon } from 'lucide-react';

const ClientCard = ({ name, status }: { name: string; status: 'active' | 'pending' }) => {
  return (
    <div className="flex items-center justify-between bg-white p-2 rounded-md border mb-2">
      <div className="flex items-center">
        <div className={`w-2 h-2 rounded-full mr-2 ${status === 'active' ? 'bg-green-500' : 'bg-yellow-400'}`} />
        <span className="text-sm font-medium">{name}</span>
      </div>
      <span className={`text-xs px-2 py-0.5 rounded-full ${
        status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
      }`}>
        {status === 'active' ? 'Active' : 'Pending'}
      </span>
    </div>
  );
};

const ClientsList = () => {
  const clients = [
    { id: 1, name: 'Acme Co', status: 'active' as const },
    { id: 2, name: 'TechFirm Inc', status: 'active' as const },
    { id: 3, name: 'Global Services', status: 'pending' as const },
    { id: 4, name: 'Local Business', status: 'active' as const },
  ];
  
  return (
    <div className="p-3">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium">Clients</h3>
        <span className="text-xs text-blue-600 cursor-pointer hover:underline">View all</span>
      </div>
      <div className="space-y-2">
        {clients.map(client => (
          <ClientCard key={client.id} name={client.name} status={client.status} />
        ))}
      </div>
    </div>
  );
};

const DashboardSidebar = () => {
  return (
    <div className="w-64 bg-gray-50 border-r h-full flex flex-col">
      <div className="p-4 border-b">
        <h2 className="font-semibold">Your Business</h2>
        <p className="text-xs text-gray-500">AI Receptionist Reseller</p>
      </div>
      <ClientsList />
    </div>
  );
};

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      <Card>
        <CardContent className="p-4 flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Total Clients</span>
            <Users className="h-5 w-5 text-blue-500" />
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">4</span>
            <span className="text-xs text-green-500 ml-2">+1 this month</span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4 flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Total Calls</span>
            <Phone className="h-5 w-5 text-blue-500" />
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">287</span>
            <span className="text-xs text-green-500 ml-2">+42 this week</span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4 flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Monthly Revenue</span>
            <DollarSign className="h-5 w-5 text-blue-500" />
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">$796</span>
            <span className="text-xs text-green-500 ml-2">+$199 vs last month</span>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4 flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Profit Margin</span>
            <CalculatorIcon className="h-5 w-5 text-blue-500" />
          </div>
          <div className="mt-2">
            <span className="text-2xl font-bold">51%</span>
            <span className="text-xs text-green-500 ml-2">+3% this month</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const DashboardContent = () => {
  return (
    <div className="flex h-full w-full overflow-hidden bg-white shadow-sm rounded-lg border">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white p-4 border-b">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome to your AI receptionist business dashboard</p>
        </div>
        <div className="flex-1 overflow-auto p-4 bg-gray-50">
          <DashboardStats />
          <div className="grid grid-cols-2 gap-4">
            <Card className="col-span-2 md:col-span-1">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Recent Activity</h3>
                <div className="space-y-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="p-2 bg-gray-50 rounded-md text-sm">
                      <p>New call handled for <span className="font-medium">Acme Co</span></p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-2 md:col-span-1">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">Client Onboarding</h3>
                <div className="space-y-2">
                  <div className="p-2 bg-gray-50 rounded-md text-sm">
                    <p>Complete setup for <span className="font-medium">New Client</span></p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
