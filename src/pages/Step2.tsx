import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import LocationChecker from '@/components/LocationChecker';
import DashboardContent from '@/components/DashboardContent';
import EmailForm from '@/components/EmailForm';
import ProgressIndicator from '@/components/ProgressIndicator';
import SimpleFooter from '@/components/SimpleFooter';
import TrustBuilders from '@/components/TrustBuilders';
import { ArrowLeft, AlertCircle } from 'lucide-react';

const Step2 = () => {
  const navigate = useNavigate();
  const { userData, updateUserData, currentStep, setCurrentStep } = useUserContext();
  const [stage, setStage] = useState<'location' | 'email'>('location');
  const [email, setEmail] = useState(userData.email || '');

  useEffect(() => {
    if (currentStep !== 2) {
      setCurrentStep(2);
    }
  }, []);

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

  const getStageDescription = () => {
    switch(stage) {
      case 'location': return "Let's build your personalized AI business plan in just 60 seconds";
      case 'email': return "One last step - where should we send your personalized plan?";
      default: return "";
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-secondary/30">
      <ProgressIndicator currentStep={2} />

      <main className="flex-1 flex flex-col px-4 py-4 overflow-hidden">
        <section className="text-center mb-4">
          <h1 className="text-xl font-bold tracking-tight mb-1">
            Your Custom Business Opportunity
          </h1>
          <p className="text-sm text-muted-foreground">
            {getStageDescription()}
          </p>
        </section>

        <div className="flex-1 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            <div className="flex flex-col space-y-4 overflow-y-auto">
              {stage === 'location' && (
                <LocationChecker onQualified={handleNextStage} />
              )}

              {stage === 'email' && (
                <EmailForm
                  email={email}
                  setEmail={setEmail}
                  onSubmit={handleEmailSubmit}
                />
              )}
            </div>

            <div className="hidden md:block h-full overflow-hidden">
              <DashboardContent userData={userData} />
            </div>
          </div>
        </div>

        <TrustBuilders />

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
        </div>
      </main>

      <SimpleFooter />
    </div>
  );
};

export default Step2;
