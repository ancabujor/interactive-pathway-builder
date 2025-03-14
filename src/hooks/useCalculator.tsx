
import { useState, useEffect } from 'react';

type CalculatorInputs = {
  clientCount: number;
  pricePerClient: number;
  costPerClient: number;
};

type CalculatorOutputs = {
  monthlyProfit: number;
  yearlyProfit: number;
  roi: number;
  revenuePerClient: number;
};

export const useCalculator = (initialValues?: Partial<CalculatorInputs>) => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    clientCount: initialValues?.clientCount || 5,
    pricePerClient: initialValues?.pricePerClient || 199,
    costPerClient: initialValues?.costPerClient || 99,
  });

  const [outputs, setOutputs] = useState<CalculatorOutputs>({
    monthlyProfit: 0,
    yearlyProfit: 0,
    roi: 0,
    revenuePerClient: 0,
  });

  // Calculate outputs whenever inputs change
  useEffect(() => {
    const { clientCount, pricePerClient, costPerClient } = inputs;
    const profit = clientCount * (pricePerClient - costPerClient);
    
    setOutputs({
      monthlyProfit: profit,
      yearlyProfit: profit * 12,
      roi: costPerClient > 0 ? ((pricePerClient - costPerClient) / costPerClient) * 100 : 0,
      revenuePerClient: pricePerClient - costPerClient,
    });
  }, [inputs]);

  const updateInput = (key: keyof CalculatorInputs, value: number) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  return {
    inputs,
    outputs,
    updateInput,
  };
};
