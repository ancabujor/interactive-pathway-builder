
import React from 'react';
import QuickActionCard from './QuickActionCard';
import { Plus, Phone } from 'lucide-react';

interface QuickActionsSectionProps {
  location: string;
}

const QuickActionsSection: React.FC<QuickActionsSectionProps> = ({ location }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-2 md:p-4 mb-3 md:mb-4">
      <h2 className="text-sm md:text-lg font-bold mb-2 md:mb-3">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        <QuickActionCard
          icon={<Plus className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />}
          title="Add New Client"
          description={`Setup a new business account in ${location}.`}
        />
        
        <QuickActionCard
          icon={<Phone className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />}
          title="Create Trial"
          description="Set up a free trial for a prospect."
        />
      </div>
    </div>
  );
};

export default QuickActionsSection;
