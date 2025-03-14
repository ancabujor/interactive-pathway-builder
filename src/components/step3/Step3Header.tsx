
import React from 'react';
import ProgressIndicator from '@/components/ProgressIndicator';
import { useUserContext } from '@/context/UserContext';

const Step3Header: React.FC = () => {
  const { currentStep } = useUserContext();
  
  return (
    <>
      <ProgressIndicator currentStep={currentStep} />
      <section className="text-center pt-3 pb-2">
        <h1 className="text-xl font-bold tracking-tight">
          Select Your Reseller Plan
        </h1>
        <p className="text-xs text-muted-foreground">
          Choose the option that best fits your business needs.
        </p>
      </section>
    </>
  );
};

export default Step3Header;
