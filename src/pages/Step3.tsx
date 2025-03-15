
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

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gradient-to-br from-blue-50/80 to-purple-50/80">
      {/* Header with progress indicator */}
      <Step3Header />

      <main className="flex-1 flex flex-col">
        {/* Main content */}
        <div className="flex-1 flex flex-col px-4 pb-3 items-center">
          <div className="w-full max-w-xl mx-auto pt-4">
            {/* Calculator section - centered with improved shadow */}
            <div className="w-full transform transition-all duration-300 hover:translate-y-[-2px]">
              <CalculatorSection 
                onSelectPlan={handleSelectPlan} 
                onRequestConsultation={handleConsultationRequest} 
              />
            </div>
            
            {/* Trust builders */}
            <div className="mt-6 pt-4 border-t">
              <TrustBuilders />
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <Step3Navigation onPreviousPage={handlePreviousPage} />
      </main>

      <SimpleFooter />
    </div>
  );
};

export default Step3;
