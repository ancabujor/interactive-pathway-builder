
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface Step3NavigationProps {
  onPreviousPage: () => void;
}

const Step3Navigation: React.FC<Step3NavigationProps> = ({
  onPreviousPage
}) => {
  return <div className="flex justify-start items-center px-4 pb-3 w-full max-w-[60%] mx-auto">
      <Button variant="ghost" size="sm" onClick={onPreviousPage} className="text-muted-foreground">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
    </div>;
};

export default Step3Navigation;
