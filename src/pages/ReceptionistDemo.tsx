
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
            Test Our AI Receptionist
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Before proceeding, we recommend testing our AI receptionist to ensure it meets your quality standards. This short demo will give you a feel for what your clients will experience.
          </p>
        </section>

        <div className="flex flex-col gap-6 items-center max-w-2xl mx-auto p-6 bg-background rounded-lg shadow-sm border">
          <div className="text-center space-y-4">
            <h2 className="text-lg font-semibold">Experience the AI Receptionist Firsthand</h2>
            <p className="text-sm text-muted-foreground">
              As a reseller, your reputation depends on the quality of the solutions you provide. Take a moment to test how our AI receptionist handles calls so you can confidently offer this service to your clients.
            </p>
            
            <div className="flex flex-col gap-4 mt-6">
              <Button 
                size="lg" 
                className="w-full"
                onClick={handleTryDemo}
              >
                Try Demo Now
              </Button>
              
              <p className="text-xs text-muted-foreground">
                This will open our demo interface where you can interact with the AI receptionist.
              </p>
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
