
import React from 'react';
import { CheckIcon } from 'lucide-react';

interface ProgressIndicatorProps {
  currentStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep }) => {
  return (
    <header className="w-full py-3 border-b">
      <div className="flex justify-center items-center space-x-4 sm:space-x-8">
        <div className="flex flex-col items-center">
          <div className={`step-indicator flex items-center justify-center 
            ${currentStep > 1 ? 'bg-green-500 text-white' : 
             currentStep === 1 ? 'bg-blue-500 text-white font-bold ring-2 ring-blue-300 ring-offset-2' : ''}`}>
            {currentStep > 1 ? <CheckIcon className="h-4 w-4" /> : '1'}
          </div>
          <span className={`text-xs mt-1 text-center ${currentStep === 1 ? 'font-medium text-blue-600' : ''}`}>Demo</span>
        </div>
        <div className={`w-12 h-px ${currentStep >= 2 ? 'bg-blue-500' : 'bg-muted-foreground/30'}`} />
        <div className="flex flex-col items-center">
          <div className={`step-indicator flex items-center justify-center 
            ${currentStep > 2 ? 'bg-green-500 text-white' : 
             currentStep === 2 ? 'bg-blue-500 text-white font-bold ring-2 ring-blue-300 ring-offset-2' : ''}`}>
            {currentStep > 2 ? <CheckIcon className="h-4 w-4" /> : '2'}
          </div>
          <span className={`text-xs mt-1 text-center ${currentStep === 2 ? 'font-medium text-blue-600' : ''}`}>Assessment</span>
        </div>
        <div className={`w-12 h-px ${currentStep >= 3 ? 'bg-blue-500' : 'bg-muted-foreground/30'}`} />
        <div className="flex flex-col items-center">
          <div className={`step-indicator flex items-center justify-center 
            ${currentStep === 3 ? 'bg-blue-500 text-white font-bold ring-2 ring-blue-300 ring-offset-2' : ''}`}>
            3
          </div>
          <span className={`text-xs mt-1 text-center ${currentStep === 3 ? 'font-medium text-blue-600' : ''}`}>Selection</span>
        </div>
      </div>
    </header>
  );
};

export default ProgressIndicator;
