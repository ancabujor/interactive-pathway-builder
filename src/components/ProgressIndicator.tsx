
import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep }) => {
  return (
    <header className="w-full py-3 border-b">
      <div className="flex justify-center items-center space-x-4 sm:space-x-8">
        <div className="flex flex-col items-center">
          <div className={`step-indicator ${currentStep >= 1 ? 'completed' : ''}`}>1</div>
          <span className="text-xs mt-1 text-center">Demo</span>
        </div>
        <div className="w-12 h-px bg-muted-foreground/30" />
        <div className="flex flex-col items-center">
          <div className={`step-indicator ${currentStep >= 2 ? 'active' : ''}`}>2</div>
          <span className="text-xs mt-1 text-center">Assessment</span>
        </div>
        <div className="w-12 h-px bg-muted-foreground/30" />
        <div className="flex flex-col items-center">
          <div className={`step-indicator ${currentStep >= 3 ? 'active' : ''}`}>3</div>
          <span className="text-xs mt-1 text-center">Selection</span>
        </div>
      </div>
    </header>
  );
};

export default ProgressIndicator;
