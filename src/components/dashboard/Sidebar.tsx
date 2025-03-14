
import React from 'react';
import { Users, Box, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-16 md:w-52 bg-[#f8f9ff] border-r h-full flex flex-col">
      <div className="p-2 md:p-4 border-b flex items-center">
        <div className="flex text-blue-600 font-bold items-center">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-600 mr-1 md:mr-2 flex items-center justify-center">
            <span className="text-white text-xs">🎧</span>
          </div>
          <span className="text-sm md:text-xl truncate">AI Front Desk</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto">
        <nav className="p-1 md:p-2">
          <div className="py-1 md:py-2">
            <div className="flex items-center text-blue-600 bg-blue-50 px-2 md:px-3 py-1 md:py-2 rounded-md my-1">
              <Users className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
              <span className="text-xs md:text-sm truncate">My Receptionists</span>
            </div>
            
            <div className="flex items-center justify-between text-gray-700 px-2 md:px-3 py-1 md:py-2 rounded-md my-1 hover:bg-gray-100">
              <div className="flex items-center">
                <Users className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm truncate">Plans</span>
              </div>
              <span className="text-xs">▼</span>
            </div>
            
            <div className="hidden md:flex items-center text-gray-700 px-3 py-2 rounded-md my-1 hover:bg-gray-100">
              <Box className="h-5 w-5 mr-2" />
              <span>Embed</span>
            </div>
            
            <div className="hidden md:flex items-center justify-between text-gray-700 px-3 py-2 rounded-md my-1 hover:bg-gray-100">
              <div className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                <span>Branding Configuration</span>
              </div>
              <span>▼</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
