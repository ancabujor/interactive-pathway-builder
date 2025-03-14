
import React from 'react';
import { ChevronRight } from 'lucide-react';

const SimpleFooter: React.FC = () => {
  return (
    <footer className="border-t py-2 px-4 flex justify-between items-center">
      <p className="text-xs text-muted-foreground">White-Label AI Receptionist Program</p>
      <a href="#" className="text-xs text-primary inline-flex items-center hover:underline">
        Learn more <ChevronRight className="ml-1 h-3 w-3" />
      </a>
    </footer>
  );
};

export default SimpleFooter;
