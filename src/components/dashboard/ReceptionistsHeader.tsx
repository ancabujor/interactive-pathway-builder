
import React from 'react';

const ReceptionistsHeader: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-2 md:p-4 mb-3 md:mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-sm md:text-xl font-bold">All Receptionists</h2>
      </div>
    </div>
  );
};

export default ReceptionistsHeader;
