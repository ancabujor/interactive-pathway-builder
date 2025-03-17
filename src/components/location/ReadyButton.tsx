
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ReadyButtonProps {
  onClick: () => void;
  show: boolean;
}

const ReadyButton: React.FC<ReadyButtonProps> = ({ onClick, show }) => {
  if (!show) return null;
  
  return (
    <Button onClick={onClick} className="w-full mt-4 bg-primary hover:bg-primary/90" variant="default">
      I'm ready to start my AI business <ArrowRight className="ml-2" />
    </Button>
  );
};

export default ReadyButton;
