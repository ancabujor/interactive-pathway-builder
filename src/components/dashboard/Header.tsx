
import React from 'react';

interface HeaderProps {
  companyName: string;
}

const Header: React.FC<HeaderProps> = ({ companyName }) => {
  return (
    <div className="bg-white p-2 md:p-4 border-b flex justify-between items-center">
      <div className="flex items-center">
        <div className="bg-gray-200 rounded-md p-1 mr-2 md:mr-3">
          <span className="text-xs md:text-sm">{companyName.substring(0, 2).toUpperCase()}</span>
        </div>
        <h1 className="text-sm md:text-xl font-bold truncate">{companyName}</h1>
      </div>
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 flex items-center justify-center">
        <span className="text-blue-600">👤</span>
      </div>
    </div>
  );
};

export default Header;
