
import React from 'react';
import ProgressIndicator from '@/components/ProgressIndicator';
import { useUserContext } from '@/context/UserContext';

const Step3Header: React.FC = () => {
  const { currentStep } = useUserContext();
  
  return (
    <>
      <ProgressIndicator currentStep={currentStep} />
      <section className="text-center pt-6 pb-3">
        <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Launch Your AI Receptionist Business
        </h1>
        <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
          Start earning monthly profits with a plan tailored to your goals
        </p>
      </section>
    </>
  );
};

export default Step3Header;
