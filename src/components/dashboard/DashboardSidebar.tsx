
import React from 'react';
import { Users, CalculatorIcon, ShoppingCart, Phone, Bell, UserRound, Settings } from 'lucide-react';

const DashboardSidebar = () => {
  return (
    <div className="w-48 bg-gray-50 border-r h-full">
      <div className="p-3 flex items-center justify-between border-b">
        <div className="text-sm font-medium">Dashboard</div>
        <button className="p-1 rounded-full hover:bg-gray-200">
          <Bell className="h-4 w-4 text-gray-500" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="px-3 py-2">
        <ul className="space-y-1">
          <li className="flex items-center px-2 py-1.5 text-sm bg-blue-50 text-blue-600 rounded">
            <Users className="h-4 w-4 mr-2" />
            <span>Clients</span>
          </li>
          <li className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">
            <CalculatorIcon className="h-4 w-4 mr-2" />
            <span>Invoices</span>
          </li>
          <li className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">
            <ShoppingCart className="h-4 w-4 mr-2" />
            <span>Services</span>
          </li>
          <li className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">
            <Phone className="h-4 w-4 mr-2" />
            <span>Support</span>
          </li>
        </ul>
      </nav>
      
      {/* User profile */}
      <div className="absolute bottom-0 left-0 w-48 border-t p-3">
        <div className="flex items-center">
          <div className="bg-gray-200 rounded-full p-1.5 mr-2">
            <UserRound className="h-4 w-4 text-gray-500" />
          </div>
          <div>
            <div className="text-xs font-medium">Your Account</div>
            <div className="text-xs text-gray-500">Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
