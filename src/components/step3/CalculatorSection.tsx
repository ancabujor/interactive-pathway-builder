
import React from 'react';
import { useUserContext } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import Calculator from '@/components/Calculator';
import { ArrowRight, Users } from 'lucide-react';
import { toast } from 'sonner';

interface CalculatorSectionProps {
  onSelectPlan: () => void;
}

const CalculatorSection: React.FC<CalculatorSectionProps> = ({ onSelectPlan }) => {
  const { userData } = useUserContext();

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="py-3">
        <div className="flex items-center justify-center space-x-1 mb-1">
          <Users className="h-4 w-4 text-primary" />
          <CardTitle className="text-sm font-semibold">How many clients would you like to start with?</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0 pb-3 px-3 flex-1">
        <Calculator initialClientCount={userData.clientCount || 5} />
      </CardContent>
      <CardFooter className="py-3 border-t">
        <Button 
          className="w-full"
          onClick={onSelectPlan}
          size="sm"
        >
          Select Plan
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CalculatorSection;
