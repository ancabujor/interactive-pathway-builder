
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, className }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setDisplayLocation(location);
    }
  }, [location, displayLocation]);

  return (
    <div className={cn('page-transition-container max-h-screen', className)}>
      <div className="page-content max-h-screen">
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
