
import React from 'react';

interface DashboardStatsProps {
  clientCount: number;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ clientCount }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg border">
      <div className="text-sm font-medium mb-2">Monthly Summary</div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-3 rounded shadow-sm">
          <div className="text-xs text-gray-500 mb-1">Revenue</div>
          <div className="text-lg font-bold">${(clientCount * 500).toLocaleString()}</div>
        </div>
        <div className="bg-white p-3 rounded shadow-sm">
          <div className="text-xs text-gray-500 mb-1">Active Services</div>
          <div className="text-lg font-bold">{(clientCount * 2).toLocaleString()}</div>
        </div>
        <div className="bg-white p-3 rounded shadow-sm">
          <div className="text-xs text-gray-500 mb-1">Profit</div>
          <div className="text-lg font-bold text-green-600">+${(clientCount * 325).toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
