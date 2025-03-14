
import React from 'react';
import PricingCalculator from '@/components/PricingCalculator';

interface CalculatorProps {
  showHeader?: boolean;
  initialClientCount?: number;
}

const Calculator: React.FC<CalculatorProps> = ({ 
  showHeader = false,
  initialClientCount, 
}) => {
  return (
    <PricingCalculator 
      showHeader={showHeader} 
      initialClientCount={initialClientCount} 
    />
  );
};

export default Calculator;
