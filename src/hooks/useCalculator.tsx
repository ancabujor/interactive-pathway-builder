
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

// Function to determine cost per client based on volume
const getFixedCostPerClient = (clientCount: number): number => {
  if (clientCount < 2) return 97; // Minimum 2 clients, but handling edge case
  if (clientCount === 2) return 97;
  if (clientCount === 3) return 75;
  if (clientCount === 4) return 65;
  if (clientCount === 5) return 55;
  if (clientCount >= 10) return 50;
  
  // For client counts between 6-9, we'll interpolate between $55 and $50
  const ratio = (clientCount - 5) / 5; // How far between 5 and 10
  return 55 - (ratio * 5); // Gradually reduce from 55 to 50
};

export const useCalculator = (initialValues?: Partial<CalculatorInputs>) => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    clientCount: Math.max(initialValues?.clientCount || 5, 2), // Ensure minimum 2 clients
    pricePerClient: initialValues?.pricePerClient || 199,
    costPerClient: initialValues?.costPerClient || getFixedCostPerClient(initialValues?.clientCount || 5),
  });

  const [outputs, setOutputs] = useState<CalculatorOutputs>({
    monthlyProfit: 0,
    yearlyProfit: 0,
    roi: 0,
    revenuePerClient: 0,
  });

  // Update cost per client whenever clientCount changes
  useEffect(() => {
    setInputs(prev => ({
      ...prev,
      costPerClient: getFixedCostPerClient(prev.clientCount)
    }));
  }, [inputs.clientCount]);

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
    if (key === 'clientCount' && value < 2) {
      value = 2; // Enforce minimum 2 clients
    }
    
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  return {
    inputs,
    outputs,
    updateInput,
  };
};
