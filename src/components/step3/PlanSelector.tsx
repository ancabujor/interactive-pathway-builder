
import React, { useEffect, useState } from 'react';
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
import { DollarSign, TrendingUp, Info, Pencil, XCircle, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Function to determine cost per client based on volume
const getFixedCostPerClient = (clientCount: number): number => {
  if (clientCount <= 2) return 97;
  if (clientCount === 3) return 75;
  if (clientCount === 4) return 65;
  if (clientCount === 5) return 55;
  return 50; // 10 clients
};

const clientOptions = [
  { value: "2", label: "2 Receptionists", cost: 97 },
  { value: "3", label: "3 Receptionists", cost: 75 },
  { value: "4", label: "4 Receptionists", cost: 65 },
  { value: "5", label: "5 Receptionists", cost: 55 },
  { value: "10", label: "10 Receptionists", cost: 50 },
];

interface PlanSelectorProps {
  initialClientCount?: number;
}

const PlanSelector: React.FC<PlanSelectorProps> = ({ 
  initialClientCount = 2 
}) => {
  const { userData, updateUserData } = useUserContext();
  const [pricePerClient, setPricePerClient] = useState(199);
  const [editingPrice, setEditingPrice] = useState(false);
  const [tempPrice, setTempPrice] = useState(pricePerClient.toString());
  
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

  // Handle price editing
  const startEditingPrice = () => {
    setTempPrice(pricePerClient.toString());
    setEditingPrice(true);
  };

  const confirmPriceEdit = () => {
    const newPrice = parseInt(tempPrice);
    if (!isNaN(newPrice) && newPrice >= 0) {
      setPricePerClient(newPrice);
      
      // Recalculate profit with the new price
      const clientCount = userData.clientCount || 2;
      const costPerClient = getFixedCostPerClient(clientCount);
      const profit = clientCount * (newPrice - costPerClient);
      
      // Update user context
      updateUserData({ 
        calculatedProfit: profit
      });
    }
    setEditingPrice(false);
  };

  const cancelPriceEdit = () => {
    setEditingPrice(false);
  };
  
  // Initialize with the initial client count
  useEffect(() => {
    if (initialClientCount) {
      handleClientCountChange(initialClientCount.toString());
    } else {
      // Default to 2 if no initialClientCount provided
      handleClientCountChange("2");
    }
  }, [initialClientCount]);
  
  // Get current values based on client count
  const clientCount = userData.clientCount || 2; // Default to 2 if not set
  const costPerClient = getFixedCostPerClient(clientCount);
  const profit = clientCount * (pricePerClient - costPerClient);
  const monthlyInvestment = clientCount * costPerClient;
  
  return (
    <Card className="w-full border bg-white shadow-none hover:shadow-sm transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Client selection dropdown */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Number of AI Receptionists</label>
            <Select 
              defaultValue={clientCount.toString()}
              onValueChange={handleClientCountChange}
              value={clientCount.toString()} // Ensure a value is always selected
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select number of receptionists" />
              </SelectTrigger>
              <SelectContent className="bg-background">
                {clientOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="flex justify-between items-center">
                    <span>{option.label}</span>
                    <span className="text-muted-foreground ml-2">${option.cost}/each</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price setting with edit option */}
          <div className="space-y-2 border p-3 rounded-md bg-blue-50/50">
            <label className="text-sm font-medium flex justify-between items-center">
              <span>Your Selling Price per Receptionist</span>
              {!editingPrice && (
                <button onClick={startEditingPrice} className="text-blue-600 hover:text-blue-800 inline-flex items-center text-xs">
                  <Pencil className="h-3 w-3 mr-1" />
                  Edit
                </button>
              )}
            </label>
            
            {editingPrice ? (
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-2 text-gray-500">$</span>
                  <Input 
                    type="number"
                    value={tempPrice}
                    onChange={(e) => setTempPrice(e.target.value)}
                    min="0"
                    className="pl-7"
                    autoFocus
                  />
                </div>
                <button onClick={confirmPriceEdit} className="p-2 bg-green-50 text-green-600 rounded-md hover:bg-green-100">
                  <Check className="h-4 w-4" />
                </button>
                <button onClick={cancelPriceEdit} className="p-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100">
                  <XCircle className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="text-lg font-bold text-blue-600">${pricePerClient}</div>
            )}
            <p className="text-xs text-blue-700">This is what you'll charge your clients per receptionist</p>
          </div>

          {/* Investment clarification */}
          <Alert className="bg-blue-50 border-blue-200">
            <Info className="h-4 w-4 text-blue-500" />
            <AlertDescription className="text-xs text-blue-700">
              Your total investment will be ${monthlyInvestment}/month for {clientCount} AI receptionists.
              <span className="block mt-1 font-medium">Cancel anytime - no long-term contracts.</span>
            </AlertDescription>
          </Alert>

          {/* Results display */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            {/* Investment amount */}
            <div className="space-y-1 p-3 rounded-md bg-red-50">
              <div className="flex items-center space-x-1 text-sm text-red-700">
                <DollarSign className="h-3.5 w-3.5" />
                <span>Monthly Investment</span>
              </div>
              <p className="text-xl font-bold text-red-600">${monthlyInvestment.toLocaleString()}</p>
              <p className="text-xs text-red-700">${costPerClient} per receptionist</p>
            </div>
            
            {/* Potential profit */}
            <div className="space-y-1 p-3 bg-green-50 rounded-md">
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
            <p className="text-xs text-center mt-1 text-muted-foreground">
              If you charge each client ${pricePerClient}/month per receptionist
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlanSelector;
