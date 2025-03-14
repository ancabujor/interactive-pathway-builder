
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@/context/UserContext';
import { toast } from 'sonner';
import SimpleFooter from '@/components/SimpleFooter';
import Step3Header from '@/components/step3/Step3Header';
import CalculatorSection from '@/components/step3/CalculatorSection';
import TrustBuilders from '@/components/TrustBuilders';
import Step3Navigation from '@/components/step3/Step3Navigation';

const Step3 = () => {
  const navigate = useNavigate();
  const {
    setCurrentStep,
    resetUserData
  } = useUserContext();

  const handlePreviousPage = () => {
    setCurrentStep(2);
    navigate('/step2');
  };

  const handleConsultationRequest = () => {
    toast.success('Consultation request received! We\'ll be in touch shortly.');
    setTimeout(() => {
      resetUserData();
      navigate('/step1');
    }, 3000);
  };

  const handleSelectPlan = () => {
    toast.success('Thank you for your selection! Your account is being set up.');
    setTimeout(() => {
      resetUserData();
      navigate('/step1');
    }, 3000);
  };

  return <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-br from-blue-50/50 to-purple-50/50">
      {/* Header with progress indicator */}
      <Step3Header />

      <main className="flex-1 flex flex-col">
        {/* Main content */}
        <div className="flex-1 flex flex-col px-4 pb-3 items-center">
          <div className="w-full max-w-xl mx-auto">
            {/* Calculator section - centered */}
            <div className="w-full">
              <CalculatorSection 
                onSelectPlan={handleSelectPlan} 
                onRequestConsultation={handleConsultationRequest} 
              />
            </div>
          </div>

          {/* Trust builders */}
          <TrustBuilders />
        </div>

        {/* Navigation buttons */}
        <Step3Navigation onPreviousPage={handlePreviousPage} />
      </main>

      <SimpleFooter />
    </div>;
};

export default Step3;
