
import React from 'react';

const TrialAccountsSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-2 md:p-4 mb-3 md:mb-4">
      <h2 className="text-sm md:text-lg font-bold mb-1 md:mb-2">Trial Accounts (0 / ∞)</h2>
      <p className="text-gray-600 text-xs md:text-sm">
        No trial accounts yet. Create your first one!
      </p>
    </div>
  );
};

export default TrialAccountsSection;
