
import React from 'react';
import { Button } from '@/components/ui/button';
import { Box, Calculator, Plus } from 'lucide-react';

const ReceptionistsHeader: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-2 md:p-4 mb-3 md:mb-4">
      <div className="flex justify-between items-center mb-2 md:mb-4">
        <h2 className="text-sm md:text-xl font-bold">All Receptionists</h2>
        <div className="hidden md:flex space-x-2">
          <Button variant="outline" className="flex items-center" size="sm">
            <Box className="mr-1 h-3 w-3 md:mr-2 md:h-4 md:w-4" />
            <span className="text-xs md:text-sm">Embed</span>
          </Button>
          <Button variant="outline" className="flex items-center" size="sm">
            <Calculator className="mr-1 h-3 w-3 md:mr-2 md:h-4 md:w-4" />
            <span className="text-xs md:text-sm">Calculate</span>
          </Button>
          <Button className="flex items-center" size="sm">
            <Plus className="mr-1 h-3 w-3 md:mr-2 md:h-4 md:w-4" />
            <span className="text-xs md:text-sm">Add Seats</span>
          </Button>
        </div>
        <div className="flex md:hidden">
          <Button size="icon" variant="outline" className="h-8 w-8">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReceptionistsHeader;
