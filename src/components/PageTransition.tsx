
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
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage('fadeOut');
      
      const timeout = setTimeout(() => {
        setTransitionStage('fadeIn');
        setDisplayLocation(location);
      }, 400); // Match this with the CSS animation duration
      
      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <div className={cn('page-transition-container', className)}>
      <div
        className={cn(
          'page-content',
          transitionStage === 'fadeIn' ? 'animate-fade-in' : 'animate-fade-out'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
