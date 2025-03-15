
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
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';

const Step2 = () => {
  const navigate = useNavigate();
  const { userData, updateUserData, currentStep, setCurrentStep } = useUserContext();
  const [stage, setStage] = useState<'location' | 'email'>('location');
  const [email, setEmail] = useState(userData.email || '');
  const [showPreviewUpdate, setShowPreviewUpdate] = useState(false);

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

  // Animation effect when user data changes
  useEffect(() => {
    if (userData.location || userData.companyName || userData.clientCount) {
      setShowPreviewUpdate(true);
      const timer = setTimeout(() => {
        setShowPreviewUpdate(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [userData.location, userData.companyName, userData.clientCount]);

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
            Personalize Your AI Business Blueprint
          </h1>
          <p className="text-sm text-muted-foreground">
            {getStageDescription()}
          </p>
        </section>

        <div className="flex-1 overflow-hidden">
          {/* Desktop view with ResizablePanelGroup */}
          <div className="hidden md:block h-full">
            <ResizablePanelGroup
              direction="horizontal"
              className="h-full w-full rounded-lg overflow-hidden border"
            >
              <ResizablePanel defaultSize={33} minSize={25} maxSize={40}>
                <div className="h-full overflow-y-auto p-4 bg-background">
                  <div className="space-y-4">
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
                </div>
              </ResizablePanel>
              
              <ResizableHandle withHandle className="bg-primary/20 hover:bg-primary/30" />
              
              <ResizablePanel defaultSize={67}>
                <div className={`h-full overflow-hidden relative ${showPreviewUpdate ? 'before:absolute before:inset-0 before:bg-primary/5 before:animate-pulse before:z-10 before:rounded-lg before:pointer-events-none' : ''}`}>
                  <div className="absolute top-2 right-2 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full z-10 animate-fade-in">
                    <ArrowRight className="inline-block w-3 h-3 mr-1" />
                    Live Preview
                  </div>
                  <DashboardContent userData={userData} />
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>

          {/* Mobile view without ResizablePanelGroup */}
          <div className="md:hidden grid grid-cols-1 gap-4 h-full">
            <div className="flex flex-col space-y-4 overflow-y-auto bg-background p-4 rounded-lg border">
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
            
            {/* Mobile preview - smaller version */}
            <div className={`overflow-hidden relative h-[300px] border rounded-lg ${showPreviewUpdate ? 'before:absolute before:inset-0 before:bg-primary/5 before:animate-pulse before:z-10 before:rounded-lg' : ''}`}>
              <div className="absolute top-2 right-2 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full z-10">
                <ArrowRight className="inline-block w-3 h-3 mr-1" />
                Preview
              </div>
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
