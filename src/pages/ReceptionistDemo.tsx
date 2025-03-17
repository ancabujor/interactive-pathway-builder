
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import ProgressIndicator from '@/components/ProgressIndicator';
import SimpleFooter from '@/components/SimpleFooter';
import { ArrowLeft } from 'lucide-react';

const ReceptionistDemo = () => {
  const navigate = useNavigate();
  const { currentStep, setCurrentStep } = useUserContext();

  useEffect(() => {
    // This would be step 3 in the new flow, with final step becoming step 4
    if (currentStep !== 3) {
      setCurrentStep(3);
    }
  }, []);

  const handleTryDemo = () => {
    // Here we would trigger the demo flow
    console.log("Demo activation would happen here");
    
    // After demo is complete, proceed to the next step
    setTimeout(() => {
      setCurrentStep(4);
      navigate('/step3');
    }, 1000);
  };

  const handleBack = () => {
    setCurrentStep(2);
    navigate('/step2');
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-secondary/30">
      <ProgressIndicator currentStep={3} />

      <main className="flex-1 flex flex-col px-4 py-8 overflow-auto">
        <section className="text-center mb-6">
          <h1 className="text-2xl font-bold tracking-tight mb-2">
            Test Drive Your AI Receptionist
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Before selling to clients, experience the power of our AI receptionist technology yourself.
          </p>
        </section>

        <div className="flex flex-col gap-6 items-center max-w-2xl mx-auto p-6 bg-background rounded-lg shadow-sm border">
          <div className="text-center space-y-4">
            <h2 className="text-lg font-semibold">Why Testing First Matters:</h2>
            <ul className="text-sm text-left list-disc pl-5 space-y-2">
              <li><span className="font-medium">Sell with confidence</span> - Understand exactly what you're offering</li>
              <li><span className="font-medium">Create compelling demos</span> - Show prospects real capabilities you've experienced</li>
              <li><span className="font-medium">Set up client success</span> - Master customization and workflows</li>
              <li><span className="font-medium">Build better packages</span> - Develop targeted pricing based on feature value</li>
            </ul>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100 italic text-sm">
              <p className="text-blue-800">
                "Testing the AI receptionist first gave me the confidence to pitch to clients authentically. It's been a game-changer for my agency's credibility."
              </p>
              <p className="text-blue-600 font-medium mt-2">
                — Michael T., Digital Marketing Agency Owner
              </p>
            </div>
            
            <div className="flex flex-col gap-4 mt-6">
              <Button 
                size="lg" 
                className="w-full"
                onClick={handleTryDemo}
              >
                TEST THE AI RECEPTIONIST NOW
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-start items-center w-full mt-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBack}
            className="text-muted-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </main>

      <SimpleFooter />
    </div>
  );
};

export default ReceptionistDemo;
