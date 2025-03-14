
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@/context/UserContext';
import { Button } from '@/components/ui/button';
import LocationChecker from '@/components/LocationChecker';
import DashboardPreview from '@/components/DashboardPreview';
import EmailForm from '@/components/EmailForm';
import ProgressIndicator from '@/components/ProgressIndicator';
import SimpleFooter from '@/components/SimpleFooter';
import { toast } from 'sonner';
import { ArrowLeft, AlertCircle } from 'lucide-react';

const Step2 = () => {
  const navigate = useNavigate();
  const { userData, updateUserData, setCurrentStep, currentStep } = useUserContext();
  const [stage, setStage] = useState<'location' | 'preview' | 'email'>(
    userData.isQualified ? 'preview' : 'location'
  );
  const [email, setEmail] = useState(userData.email || '');

  // Validate if we have the required information to continue
  useEffect(() => {
    if (!userData.location) {
      setStage('location');
    }
  }, [userData.location]);

  const handleLocationQualified = () => {
    setStage('preview');
  };

  const handleEmailSubmit = () => {
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
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
    } else if (stage === 'preview') {
      setStage('location');
    } else if (stage === 'email') {
      setStage('preview');
    }
  };

  const handleNextStage = () => {
    if (stage === 'preview') {
      setStage('email');
    }
  };

  // Helper function to get stage-specific description
  const getStageDescription = () => {
    switch(stage) {
      case 'location': return "Let's check if your location qualifies for our program.";
      case 'preview': return "Here's how your reseller dashboard would look.";
      case 'email': return "One last step - where should we send your personalized plan?";
      default: return "";
    }
  };

  // Render a warning if location is not selected
  const renderLocationWarning = () => {
    if (stage === 'preview' && !userData.location) {
      return (
        <div className="bg-amber-50 border border-amber-200 text-amber-700 p-2 rounded-md flex items-center mb-3">
          <AlertCircle className="h-4 w-4 mr-2" />
          <span className="text-xs">Please select your location first</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-secondary/30">
      {/* Progress indicator */}
      <ProgressIndicator currentStep={currentStep} />

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

        {renderLocationWarning()}

        {/* Two-column layout */}
        <div className="flex-1 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            {/* Left column - Form */}
            <div className="flex flex-col space-y-4 overflow-y-auto">
              {stage === 'location' && (
                <LocationChecker onQualified={handleLocationQualified} />
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

          {stage === 'preview' && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextStage}
              disabled={!userData.location}
            >
              Continue
            </Button>
          )}

          {stage === 'location' && userData.isQualified === false && userData.location && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                toast.success("You've been added to our waitlist");
                updateUserData({ email: '' });
              }}
            >
              Join Waitlist
            </Button>
          )}
        </div>
      </main>

      <SimpleFooter />
    </div>
  );
};

export default Step2;
