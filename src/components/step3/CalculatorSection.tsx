
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
      return "Start with 10 Receptionists";
    } else {
      return `Start with ${count} Receptionists`;
    }
  };

  return (
    <Card className="h-full flex flex-col shadow-md overflow-hidden bg-white">
      <CardHeader className="py-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b">
        <div className="flex items-center justify-center space-x-2 mb-1">
          <Users className="h-5 w-5 text-primary" />
          <CardTitle className="text-base font-semibold">Choose Your AI Receptionist Plan</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6 pb-4 px-6 flex-1">
        <PlanSelector initialClientCount={userData.clientCount || 2} />
      </CardContent>
      
      <CardFooter className="py-5 border-t flex flex-col space-y-3 bg-gray-50 px-6">
        <Button 
          className="w-full bg-green-600 hover:bg-green-700 transition-all duration-200 shadow-sm hover:shadow-md"
          onClick={onSelectPlan}
          size="lg"
        >
          {getButtonText()}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full text-muted-foreground border-muted hover:bg-muted/10" 
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
