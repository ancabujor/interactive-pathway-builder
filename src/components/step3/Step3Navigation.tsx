
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

interface Step3NavigationProps {
  onPreviousPage: () => void;
  onRequestDemo: () => void;
}

const Step3Navigation: React.FC<Step3NavigationProps> = ({ onPreviousPage, onRequestDemo }) => {
  return (
    <div className="flex justify-between items-center px-4 pb-3">
      <Button
        variant="ghost"
        size="sm"
        onClick={onPreviousPage}
        className="text-muted-foreground"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={onRequestDemo}
      >
        Request a Demo
      </Button>
    </div>
  );
};

export default Step3Navigation;
