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
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, Info } from 'lucide-react';

// Function to determine cost per client based on volume
const getFixedCostPerClient = (clientCount: number): number => {
  if (clientCount <= 2) return 97;
  if (clientCount === 3) return 75;
  if (clientCount === 4) return 65;
  if (clientCount === 5) return 55;
  return 50; // 6+ clients
};

const clientOptions = [
  { value: "2", label: "2 Receptionists", cost: 97 },
  { value: "3", label: "3 Receptionists", cost: 75 },
  { value: "4", label: "4 Receptionists", cost: 65 },
  { value: "5", label: "5 Receptionists", cost: 55 },
  { value: "6", label: "6+ Receptionists", cost: 50 },
];

interface PlanSelectorProps {
  initialClientCount?: number;
}

const PlanSelector: React.FC<PlanSelectorProps> = ({ 
  initialClientCount = 2 
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
    <Card className="w-full border-2">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Client selection dropdown */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Number of AI Receptionists</label>
            <Select 
              defaultValue={clientCount.toString()}
              onValueChange={handleClientCountChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select number of receptionists" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                {clientOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label} (${option.cost}/receptionist)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Investment clarification */}
          <Alert className="bg-blue-50 border-blue-200">
            <Info className="h-4 w-4 text-blue-500" />
            <AlertDescription className="text-xs text-blue-700">
              Your total investment will be ${monthlyInvestment}/month for {clientCount} AI receptionists.
            </AlertDescription>
          </Alert>

          {/* Results display */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            {/* Investment amount */}
            <div className="space-y-1">
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <DollarSign className="h-3.5 w-3.5" />
                <span>Monthly Investment</span>
              </div>
              <p className="text-xl font-bold">${monthlyInvestment.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">${costPerClient} per receptionist</p>
            </div>
            
            {/* Potential profit */}
            <div className="space-y-1 bg-green-50 p-2 rounded-md">
              <div className="flex items-center space-x-1 text-sm text-green-700">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>Monthly Profit</span>
                <Badge variant="outline" className="ml-1 bg-green-100 text-green-800 border-green-200">
                  Potential
                </Badge>
              </div>
              <p className="text-2xl font-bold text-green-600">${profit.toLocaleString()}</p>
              <p className="text-xs text-green-700">${(pricePerClient - costPerClient)} profit per receptionist</p>
            </div>
          </div>

          {/* Annual summary */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-md border border-green-100">
            <p className="text-center font-medium">Annual potential profit</p>
            <p className="text-3xl font-bold text-center text-green-600">${(profit * 12).toLocaleString()}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanSelector;
