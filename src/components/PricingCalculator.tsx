
import React from 'react';
import { useCalculator } from '@/hooks/useCalculator';
import { useUserContext } from '@/context/UserContext';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface PricingCalculatorProps {
  showHeader?: boolean;
  initialClientCount?: number;
  className?: string;
}

const PricingCalculator: React.FC<PricingCalculatorProps> = ({ 
  showHeader = false,
  initialClientCount,
  className
}) => {
  const { userData, updateUserData } = useUserContext();
  
  const { inputs, outputs, updateInput } = useCalculator({ 
    clientCount: initialClientCount || userData.clientCount || 5 
  });

  // Update the user context with calculated profit
  React.useEffect(() => {
    updateUserData({ 
      calculatedProfit: outputs.monthlyProfit,
      clientCount: inputs.clientCount
    });
  }, [outputs.monthlyProfit, inputs.clientCount, updateUserData]);

  return (
    <Card className={`w-full h-full mx-auto overflow-hidden flex flex-col ${className}`}>
      <CardContent className="p-3 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="space-y-2">
            <label className="text-xs font-medium flex justify-between">
              <span>Number of Clients</span>
              <span className="text-muted-foreground">{inputs.clientCount}</span>
            </label>
            <Slider
              value={[inputs.clientCount]}
              min={2}
              max={50}
              step={1}
              onValueChange={(value) => updateInput('clientCount', value[0])}
              className="py-1"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <label className="text-xs font-medium">
                Your Price ($)
              </label>
              <Input
                type="number"
                value={inputs.pricePerClient}
                onChange={(e) => updateInput('pricePerClient', parseInt(e.target.value) || 0)}
                className="text-right h-8 text-sm"
                min={0}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium">
                Your Cost ($)
              </label>
              <Input
                type="number"
                value={inputs.costPerClient}
                readOnly
                className="text-right h-8 text-sm bg-muted/30 cursor-not-allowed"
              />
            </div>
          </div>
          
          {inputs.clientCount === 50 && (
            <div className="mt-2 text-center">
              <p className="text-sm font-medium text-blue-500">
                Unlimited clients, unlimited profits
              </p>
            </div>
          )}
        </div>

        <div className="pt-3 border-t mt-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Monthly Profit</p>
              <p className="text-xl font-bold text-blue-600">
                ${outputs.monthlyProfit.toLocaleString()}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Annual Profit</p>
              <p className="text-xl font-bold text-blue-600">
                ${outputs.yearlyProfit.toLocaleString()}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Profit Per Client</p>
              <p className="text-base font-semibold text-blue-500">
                ${outputs.revenuePerClient}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">ROI</p>
              <p className="text-base font-semibold text-blue-500">
                {outputs.roi.toFixed(0)}%
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingCalculator;
