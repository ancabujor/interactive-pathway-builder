
import React from 'react';
import { UserData } from '@/context/UserContext';
import LocationChecker from '@/components/LocationChecker';
import EmailForm from '@/components/EmailForm';
import StageSelector from './StageSelector';

interface StepContentProps {
  stage: 'location' | 'receptionist' | 'email';
  userData: UserData;
  email: string;
  setEmail: (email: string) => void;
  handleEmailSubmit: () => void;
  handleNextStage: () => void;
  handleReceptionistResponse: (value: string) => void;
  showReceptionistAlert: boolean;
  hasTestedReceptionist: string | undefined;
  handleContinue: () => void;
}

const StepContent: React.FC<StepContentProps> = ({
  stage,
  userData,
  email,
  setEmail,
  handleEmailSubmit,
  handleNextStage,
  handleReceptionistResponse,
  showReceptionistAlert,
  hasTestedReceptionist,
  handleContinue
}) => {
  return (
    <div className="flex flex-col space-y-4 overflow-y-auto bg-background p-4 rounded-lg border">
      {stage === 'location' && (
        <LocationChecker onQualified={handleNextStage} />
      )}

      {stage === 'receptionist' && (
        <StageSelector 
          handleReceptionistResponse={handleReceptionistResponse}
          showReceptionistAlert={showReceptionistAlert}
          hasTestedReceptionist={hasTestedReceptionist}
          handleContinue={handleContinue}
        />
      )}

      {stage === 'email' && (
        <EmailForm
          email={email}
          setEmail={setEmail}
          onSubmit={handleEmailSubmit}
        />
      )}
    </div>
  );
};

export default StepContent;
