
import React from 'react';
import { useUserContext } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight, Users, MessageCircle } from 'lucide-react';
import PlanSelector from '@/components/step3/PlanSelector';

interface CalculatorSectionProps {
  onSelectPlan: () => void;
  onRequestConsultation: () => void;
}

const CalculatorSection: React.FC<CalculatorSectionProps> = ({ onSelectPlan, onRequestConsultation }) => {
  const { userData } = useUserContext();
  
  // Dynamic button text based on client count
  const getButtonText = () => {
    const count = userData.clientCount || 2;
    if (count <= 2) {
      return "Start with 2 Receptionists";
    } else if (count >= 10) {
      return "Start with 10+ Receptionists";
    } else {
      return `Start with ${count} Receptionists`;
    }
  };

  return (
    <Card className="h-full flex flex-col shadow-md">
      <CardHeader className="py-3 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="flex items-center justify-center space-x-1 mb-1">
          <Users className="h-4 w-4 text-primary" />
          <CardTitle className="text-sm font-semibold">How many AI receptionists would you like to start with?</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-4 pb-3 px-3 flex-1">
        <PlanSelector initialClientCount={userData.clientCount || 2} />
      </CardContent>
      <CardFooter className="py-4 border-t flex flex-col space-y-3 bg-gray-50">
        <Button 
          className="w-full bg-green-600 hover:bg-green-700"
          onClick={onSelectPlan}
          size="lg"
        >
          {getButtonText()}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
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
