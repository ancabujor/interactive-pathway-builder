
import React from 'react';
import { useUserContext } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import PricingCalculator from '@/components/PricingCalculator';
import { ArrowRight, Users, MessageCircle } from 'lucide-react';

interface CalculatorSectionProps {
  onSelectPlan: () => void;
  onRequestConsultation: () => void;
}

const CalculatorSection: React.FC<CalculatorSectionProps> = ({ onSelectPlan, onRequestConsultation }) => {
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
        <PricingCalculator initialClientCount={userData.clientCount || 5} />
      </CardContent>
      <CardFooter className="py-3 border-t flex flex-col space-y-2">
        <Button 
          className="w-full"
          onClick={onSelectPlan}
          size="sm"
        >
          Select Plan
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full text-muted-foreground" 
          onClick={onRequestConsultation}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Not ready to commit yet? Request a Consultation
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CalculatorSection;
