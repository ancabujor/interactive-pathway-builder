import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import LocationChecker from '@/components/LocationChecker';
import DashboardPreview from '@/components/DashboardPreview';
import EmailForm from '@/components/EmailForm';
import ProgressIndicator from '@/components/ProgressIndicator';
import SimpleFooter from '@/components/SimpleFooter';
import { ArrowLeft, AlertCircle } from 'lucide-react';

const Step2 = () => {
  const navigate = useNavigate();
  const { userData, updateUserData, currentStep, setCurrentStep } = useUserContext();
  const [stage, setStage] = useState<'location' | 'email'>('location');
  const [email, setEmail] = useState(userData.email || '');

  // Ensure the current step is set correctly when this component loads
  useEffect(() => {
    if (currentStep !== 2) {
      setCurrentStep(2);
    }
  }, []);

  // Validate if we have the required information to continue
  useEffect(() => {
    if (!userData.location) {
      setStage('location');
    }
  }, [userData.location]);

  const handleEmailSubmit = () => {
    if (!email) {
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return;
    }
    
    updateUserData({ email });
    setCurrentStep(3);
    navigate('/step3');
  };

  const handlePreviousPage = () => {
    if (stage === 'location') {
      setCurrentStep(1);
      navigate('/step1');
    } else if (stage === 'email') {
      setStage('location');
    }
  };

  const handleNextStage = () => {
    if (stage === 'location' && userData.location) {
      setStage('email');
    }
  };

  // Helper function to get stage-specific description
  const getStageDescription = () => {
    switch(stage) {
      case 'location': return "Let's check if your location qualifies for our program.";
      case 'email': return "One last step - where should we send your personalized plan?";
      default: return "";
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-secondary/30">
      {/* Progress indicator */}
      <ProgressIndicator currentStep={2} />

      <main className="flex-1 flex flex-col px-4 py-4 overflow-hidden">
        {/* Page title */}
        <section className="text-center mb-4">
          <h1 className="text-xl font-bold tracking-tight mb-1">
            Personalized Assessment
          </h1>
          <p className="text-sm text-muted-foreground">
            {getStageDescription()}
          </p>
        </section>

        {/* Two-column layout */}
        <div className="flex-1 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            {/* Left column - Form */}
            <div className="flex flex-col space-y-4 overflow-y-auto">
              {stage === 'location' && (
                <LocationChecker onQualified={() => {}} />
              )}

              {stage === 'email' && (
                <EmailForm
                  email={email}
                  setEmail={setEmail}
                  onSubmit={handleEmailSubmit}
                />
              )}
            </div>

            {/* Right column - Dashboard Preview */}
            <div className="hidden md:block">
              <DashboardPreview className="h-full" />
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center w-full mt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePreviousPage}
            className="text-muted-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {stage === 'location' && userData.location && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextStage}
            >
              Continue
            </Button>
          )}
        </div>
      </main>

      <SimpleFooter />
    </div>
  );
};

export default Step2;
