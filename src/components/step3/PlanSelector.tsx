
import React, { useEffect } from 'react';
import { useUserContext } from '@/context/UserContext';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, TrendingUp } from 'lucide-react';

// Function to determine cost per client based on volume
const getFixedCostPerClient = (clientCount: number): number => {
  if (clientCount <= 2) return 97;
  if (clientCount === 3) return 75;
  if (clientCount === 4) return 65;
  if (clientCount === 5) return 55;
  return 50; // 6+ clients
};

const clientOptions = [
  { value: "2", label: "2 Clients" },
  { value: "3", label: "3 Clients" },
  { value: "5", label: "5 Clients" },
  { value: "10", label: "10 Clients" },
  { value: "20", label: "20 Clients" },
  { value: "50", label: "50+ Clients (Enterprise)" },
];

interface PlanSelectorProps {
  initialClientCount?: number;
}

const PlanSelector: React.FC<PlanSelectorProps> = ({ 
  initialClientCount = 5 
}) => {
  const { userData, updateUserData } = useUserContext();
  const pricePerClient = 199;
  
  // Handle client count change
  const handleClientCountChange = (value: string) => {
    const count = parseInt(value);
    
    // Calculate new profit based on selection
    const costPerClient = getFixedCostPerClient(count);
    const profit = count * (pricePerClient - costPerClient);
    
    // Update user context
    updateUserData({ 
      calculatedProfit: profit,
      clientCount: count
    });
  };
  
  // Initialize with the initial client count
  useEffect(() => {
    if (initialClientCount) {
      handleClientCountChange(initialClientCount.toString());
    }
  }, [initialClientCount]);
  
  // Get current values based on client count
  const clientCount = userData.clientCount || initialClientCount;
  const costPerClient = getFixedCostPerClient(clientCount);
  const profit = clientCount * (pricePerClient - costPerClient);
  const monthlyInvestment = clientCount * costPerClient;
  
  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Client selection dropdown */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Number of Clients</label>
            <Select 
              defaultValue={clientCount.toString()}
              onValueChange={handleClientCountChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select number of clients" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                {clientOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Results display */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            {/* Investment amount */}
            <div className="space-y-1">
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <DollarSign className="h-3.5 w-3.5" />
                <span>Monthly Investment</span>
              </div>
              <p className="text-xl font-bold">${monthlyInvestment.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">${costPerClient} per client</p>
            </div>
            
            {/* Potential profit */}
            <div className="space-y-1">
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>Monthly Profit</span>
              </div>
              <p className="text-xl font-bold text-green-600">${profit.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">${(pricePerClient - costPerClient)} profit per client</p>
            </div>
          </div>

          {/* Annual summary */}
          <div className="bg-secondary/30 p-3 rounded-md">
            <p className="text-sm font-medium text-center">Annual profit: <span className="text-green-600 font-bold">${(profit * 12).toLocaleString()}</span></p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanSelector;
