
import React from 'react';
import { Button } from '@/components/ui/button';
import ProgressIndicator from '@/components/ProgressIndicator';
import SimpleFooter from '@/components/SimpleFooter';
import TrustBuilders from '@/components/TrustBuilders';
import { ArrowLeft } from 'lucide-react';
import StepLayout from '@/components/step2/StepLayout';
import { useStep2 } from '@/hooks/useStep2';

const Step2 = () => {
  const {
    stage,
    email,
    setEmail,
    showPreviewUpdate,
    hasTestedReceptionist,
    showReceptionistAlert,
    userData,
    handleEmailSubmit,
    handleReceptionistResponse,
    handleContinue,
    handlePreviousPage,
    handleNextStage,
    getStageDescription
  } = useStep2();

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

        <StepLayout
          showPreviewUpdate={showPreviewUpdate}
          userData={userData}
          stage={stage}
          email={email}
          setEmail={setEmail}
          handleEmailSubmit={handleEmailSubmit}
          handleNextStage={handleNextStage}
          handleReceptionistResponse={handleReceptionistResponse}
          showReceptionistAlert={showReceptionistAlert}
          hasTestedReceptionist={hasTestedReceptionist}
          handleContinue={handleContinue}
        />

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
